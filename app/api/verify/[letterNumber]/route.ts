import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ letterNumber: string }> }
) {
  const { letterNumber } = await params;
  const decodedNumber = decodeURIComponent(letterNumber);

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("applicants")
      .select("full_name, nisn, registration_number, school_origin, status, graduation_letter_number, created_at")
      .eq("graduation_letter_number", decodedNumber)
      .single();

    if (error || !data) {
      return NextResponse.json({ valid: false, message: "Surat tidak ditemukan atau tidak valid." }, { status: 404 });
    }

    return NextResponse.json({
      valid: true,
      data: {
        full_name: data.full_name,
        nisn: data.nisn,
        registration_number: data.registration_number,
        school_origin: data.school_origin,
        status: data.status,
        letter_number: data.graduation_letter_number,
        issued_at: data.created_at,
      },
    });
  } catch (err) {
    return NextResponse.json({ valid: false, message: "Terjadi kesalahan." }, { status: 500 });
  }
}
