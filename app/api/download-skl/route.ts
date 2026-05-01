import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { buildSKLDocument } from "@/components/pdf/SKLDocument";
import { Applicant } from "@/lib/types";
import QRCode from "qrcode";
import { readFile } from "fs/promises";
import { join } from "path";

const downloadRateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const limit = downloadRateLimitMap.get(key);
  if (!limit || now > limit.resetTime) {
    downloadRateLimitMap.set(key, { count: 1, resetTime: now + 60 * 1000 });
    return false;
  }
  if (limit.count >= 5) return true;
  limit.count++;
  return false;
}

export async function GET(request: NextRequest) {
  const nisn = request.nextUrl.searchParams.get("nisn");
  const reg = request.nextUrl.searchParams.get("reg");
  const preview = request.nextUrl.searchParams.get("preview");

  if (!nisn && !reg && !preview) {
    return NextResponse.json({ error: "Parameter tidak valid." }, { status: 400 });
  }

  const key = nisn || reg || (preview ? "preview" : "unknown");
  if (isRateLimited(key)) {
    return NextResponse.json(
      { error: "Terlalu banyak permintaan. Coba lagi nanti." },
      { status: 429 }
    );
  }

  try {
    const supabase = await createAdminClient();

    let applicant: Applicant;
    let letterNumber = "421/SKL-SMPNU/VI/2026/0000";

    if (preview) {
      applicant = {
        id: "preview-123",
        full_name: "MUHAMMAD FATIH AL-AYUBI",
        nisn: "0123456789",
        registration_number: "REG-2026-000",
        school_origin: "SMP NU Assalafie",
        status: "LULUS",
        gender: "L",
        birth_place: "Semarang",
        birth_date: "2012-03-12",
        parent_name: "Ahmad Shodiq",
        graduation_letter_number: letterNumber,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    } else {
      let query = supabase.from("applicants").select("*");
      if (nisn) query = query.eq("nisn", nisn);
      else query = query.ilike("registration_number", reg!);

      const { data, error } = await query.single();

      if (error || !data) {
        return NextResponse.json({ error: "Data siswa tidak ditemukan." }, { status: 404 });
      }

      applicant = data as Applicant;

      if (applicant.status !== "LULUS") {
        return NextResponse.json(
          { error: "Surat hanya tersedia untuk siswa yang LULUS." },
          { status: 403 }
        );
      }

      if (!applicant.graduation_letter_number) {
        const { count } = await supabase
          .from("applicants")
          .select("*", { count: "exact", head: true })
          .eq("status", "LULUS")
          .not("graduation_letter_number", "is", null);

        const seq = String((count || 0) + 1).padStart(4, "0");
        letterNumber = `421/SKL-SMPNU/VI/2026/${seq}`;

        await supabase
          .from("applicants")
          .update({ graduation_letter_number: letterNumber })
          .eq("id", applicant.id);
      } else {
        letterNumber = applicant.graduation_letter_number;
      }
    }

    // Generate QR code
    const verifyUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/verifikasi/${encodeURIComponent(letterNumber)}`;
    const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl, {
      width: 200,
      margin: 1,
      color: { dark: "#005c55", light: "#ffffff" },
    });

    // Read logo and signature files
    // Note: @react-pdf/renderer does not support SVG data URIs in <Image> component
    // We will omit them to prevent 500 Internal Server Error
    const logoDataUrl = "";
    const signatureDataUrl = "";

    // Generate PDF
    const pdfDoc = buildSKLDocument({
      applicant: { ...applicant, graduation_letter_number: letterNumber },
      letterNumber,
      qrCodeDataUrl,
      signatureDataUrl,
      logoDataUrl,
    });

    const pdfBuffer = await renderToBuffer(pdfDoc);

    const filename = `SKL-${applicant.nisn}-${applicant.full_name.replace(/\s+/g, "_")}.pdf`;

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("PDF generation error:", err);
    return NextResponse.json(
      { error: "Gagal membuat PDF. Coba lagi." },
      { status: 500 }
    );
  }
}
