import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isValidSearchQuery } from "@/lib/utils";

// Simple in-memory rate limiting (per server instance)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 1000 });
    return false;
  }

  if (limit.count >= 10) {
    return true;
  }

  limit.count++;
  return false;
}

export async function GET(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Terlalu banyak permintaan. Coba lagi dalam 1 menit." },
      { status: 429 }
    );
  }

  // Get & validate query
  const query = request.nextUrl.searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Parameter pencarian tidak boleh kosong." },
      { status: 400 }
    );
  }

  if (!isValidSearchQuery(query)) {
    return NextResponse.json(
      { error: "Format pencarian tidak valid. Minimal 6 karakter." },
      { status: 400 }
    );
  }

  const cleanQuery = query.trim();

  try {
    const supabase = await createClient();

    // Search by NISN or registration_number (case-insensitive)
    const { data, error } = await supabase
      .from("applicants")
      .select("full_name, nisn, registration_number, school_origin, status")
      .or(`nisn.eq.${cleanQuery},registration_number.ilike.${cleanQuery}`)
      .single();

    if (error || !data) {
      return NextResponse.json({
        found: false,
        data: null,
        message: "Data tidak ditemukan. Periksa kembali NISN atau Nomor Pendaftar Anda.",
      });
    }

    return NextResponse.json({
      found: true,
      data: {
        full_name: data.full_name,
        nisn: data.nisn,
        registration_number: data.registration_number,
        school_origin: data.school_origin,
        status: data.status,
      },
    });
  } catch (err) {
    console.error("Search error:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan sistem. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
