import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import * as XLSX from "xlsx";
import { ImportResult, ImportRow } from "@/lib/types";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) return NextResponse.json({ error: "File tidak ditemukan." }, { status: 400 });
    if (file.size > 10 * 1024 * 1024) return NextResponse.json({ error: "File terlalu besar (max 10MB)." }, { status: 400 });

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: "buffer", cellDates: true });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);

    if (rows.length === 0) return NextResponse.json({ error: "File kosong atau format tidak sesuai." }, { status: 400 });

    const result: ImportResult = { success: 0, errors: 0, duplicates: 0, errorDetails: [] };
    const validStatuses = ["LULUS", "TIDAK LULUS", "PENDING"];

    for (const [idx, row] of rows.entries()) {
      const rowNum = idx + 2;

      const full_name = String(row.full_name || row["Nama Lengkap"] || "").trim();
      const nisn = String(row.nisn || row["NISN"] || "").trim();
      const registration_number = String(row.registration_number || row["Nomor Pendaftar"] || "").trim();
      const school_origin = String(row.school_origin || row["Asal Sekolah"] || "").trim();
      const rawStatus = String(row.status || row["Status"] || "PENDING").trim().toUpperCase();
      const status = validStatuses.includes(rawStatus) ? rawStatus : "PENDING";

      if (!full_name || !nisn || !registration_number || !school_origin) {
        result.errors++;
        result.errorDetails.push(`Baris ${rowNum}: Data wajib tidak lengkap (nama/NISN/nomor/sekolah).`);
        continue;
      }

      const payload = {
        full_name,
        nisn,
        registration_number,
        school_origin,
        status,
        gender: String(row.gender || row["Jenis Kelamin"] || "").trim() || null,
        birth_place: String(row.birth_place || row["Tempat Lahir"] || "").trim() || null,
        birth_date: row.birth_date ? String(row.birth_date).split("T")[0] : null,
        parent_name: String(row.parent_name || row["Nama Orang Tua"] || "").trim() || null,
        updated_at: new Date().toISOString(),
      };

      const { error: upsertError } = await supabase
        .from("applicants")
        .upsert(payload, { onConflict: "nisn", ignoreDuplicates: false });

      if (upsertError) {
        if (upsertError.code === "23505") {
          result.duplicates++;
        } else {
          result.errors++;
          result.errorDetails.push(`Baris ${rowNum} (${full_name}): ${upsertError.message}`);
        }
      } else {
        result.success++;
      }
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error("Import error:", err);
    return NextResponse.json({ error: "Gagal memproses file. Pastikan format sesuai template." }, { status: 500 });
  }
}
