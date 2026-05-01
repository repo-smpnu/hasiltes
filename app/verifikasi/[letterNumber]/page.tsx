import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, XCircle, Shield } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/constants";

interface Props {
  params: Promise<{ letterNumber: string }>;
}

export const metadata: Metadata = {
  title: "Verifikasi Surat Keterangan Lulus",
  description: "Verifikasi keaslian Surat Keterangan Lulus (SKL) SMP NU Assalafie",
};

async function verifySurat(letterNumber: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(
      `${baseUrl}/api/verify/${encodeURIComponent(letterNumber)}`,
      { cache: "no-store" }
    );
    return await res.json();
  } catch {
    return { valid: false, message: "Gagal memverifikasi surat." };
  }
}

export default async function VerifikasiPage({ params }: Props) {
  const { letterNumber } = await params;
  const result = await verifySurat(decodeURIComponent(letterNumber));

  return (
    <div className="min-h-screen flex flex-col islamic-pattern-bg">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-24 pb-xl px-4 sm:px-6">
        <div className="w-full max-w-lg">
          {/* Verification Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-primary" size={32} />
            </div>
            <h1 className="font-inter font-black text-h2 text-on-surface mb-2">
              Verifikasi Surat
            </h1>
            <p className="font-lexend text-sm text-outline">
              {SCHOOL_INFO.name}
            </p>
          </div>

          {/* Result Card */}
          <div className={`bg-white rounded-2xl shadow-elevated border-2 p-8 ${
            result.valid ? "border-secondary" : "border-error/30"
          }`}>
            {result.valid ? (
              <>
                {/* Valid */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-secondary" size={28} />
                  </div>
                  <div>
                    <p className="font-inter font-black text-xl text-secondary">Surat VALID</p>
                    <p className="font-lexend text-sm text-outline">Surat keterangan lulus ini asli dan terverifikasi.</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-slate-100 pt-5">
                  {[
                    { label: "Nama Siswa", value: result.data.full_name },
                    { label: "NISN", value: result.data.nisn },
                    { label: "Nomor Pendaftar", value: result.data.registration_number },
                    { label: "Asal Sekolah", value: result.data.school_origin },
                    { label: "Status", value: result.data.status },
                    { label: "Nomor Surat", value: result.data.letter_number },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm border-b border-slate-50 pb-2">
                      <span className="font-lexend text-outline">{label}</span>
                      <span className="font-inter font-semibold text-on-surface text-right max-w-[60%]">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 bg-secondary-container/20 rounded-xl">
                  <p className="font-lexend text-xs text-secondary">
                    ✓ Dokumen ini diterbitkan oleh {SCHOOL_INFO.name} dan telah diverifikasi secara digital.
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Invalid */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-error-container rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle className="text-error" size={28} />
                  </div>
                  <div>
                    <p className="font-inter font-black text-xl text-error">Surat TIDAK VALID</p>
                    <p className="font-lexend text-sm text-outline">
                      {result.message || "Nomor surat tidak ditemukan dalam sistem kami."}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-error-container/20 rounded-xl">
                  <p className="font-lexend text-sm text-error">
                    Jika Anda merasa ini adalah kesalahan, hubungi {SCHOOL_INFO.phone} atau {SCHOOL_INFO.email}.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Letter number display */}
          <p className="text-center font-lexend text-xs text-outline mt-4">
            Nomor yang diverifikasi: <span className="font-inter font-bold">{decodeURIComponent(letterNumber)}</span>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
