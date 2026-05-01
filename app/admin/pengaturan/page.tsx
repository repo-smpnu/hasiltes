"use client";

import { useState } from "react";
import Image from "next/image";
import { Edit3, Download, Loader2, CheckCircle } from "lucide-react";
import { SCHOOL_INFO, PRINCIPAL_INFO, ACADEMIC_YEAR } from "@/lib/constants";

export default function AdminPengaturanPage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    await new Promise((r) => setTimeout(r, 1000));
    window.open("/api/download-skl?preview=true", "_blank");
    setDownloading(false);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4">
        <div>
          <h1 className="font-inter font-bold text-2xl text-gray-900 mb-1">Pratinjau SKL</h1>
          <p className="font-lexend text-sm text-gray-500">
            Template Surat Keterangan Lulus Tahun Ajaran {ACADEMIC_YEAR}
          </p>
        </div>
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button 
            onClick={() => alert("Pengaturan teks template dapat diubah melalui file konfigurasi sistem.")}
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-inter font-semibold text-sm hover:bg-gray-50 transition-all shadow-sm"
          >
            <Edit3 size={16} />
            Edit Konten
          </button>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 bg-[#005c55] text-white px-5 py-2.5 rounded-lg font-inter font-semibold text-sm hover:bg-[#004d47] active:scale-95 transition-all shadow-sm disabled:opacity-70"
          >
            {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
            Unduh PDF
          </button>
        </div>
      </header>

      <div className="flex justify-center">
        {/* Document Preview (A4 Ratio approximation) */}
        <div className="w-full max-w-[800px] bg-white rounded-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-12 md:p-16 border border-gray-100 font-inter text-gray-900 relative">
          
          {/* Document Header */}
          <div className="flex items-center gap-6 pb-6 mb-6 border-b-2 border-gray-900">
            <div className="w-20 h-20 bg-gray-50 p-2 rounded-lg border border-gray-100 flex items-center justify-center flex-shrink-0">
              <Image src="/logosmpnu.svg" alt="Logo" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs font-bold text-[#005c55] uppercase tracking-widest mb-1">Yayasan Pendidikan Islam NU</p>
              <h2 className="text-2xl font-black text-[#005c55] uppercase tracking-wide mb-1">SMP NU ASSALAFIE</h2>
              <p className="text-[10px] text-gray-600 italic mb-0.5">Terakreditasi A (Unggul) - NSS: 202021501003 NPSN: 20214300</p>
              <p className="text-[10px] text-gray-600">{SCHOOL_INFO.address} | Telp: {SCHOOL_INFO.phone}</p>
            </div>
          </div>

          {/* Document Title */}
          <div className="text-center mb-8">
            <h3 className="text-[15px] font-bold text-[#005c55] uppercase tracking-widest underline decoration-2 underline-offset-4 mb-2">
              Surat Keterangan Lulus
            </h3>
            <p className="text-xs text-gray-600">Nomor: 421/SKL-SMPNU/VI/2026</p>
          </div>

          {/* Document Body */}
          <div className="space-y-6 text-[13px] leading-relaxed mb-10">
            <p>Kepala Sekolah Menengah Pertama (SMP) NU Assalafie dengan ini menerangkan bahwa:</p>
            
            <div className="pl-8 space-y-2.5">
              {[
                { label: "Nama Lengkap", value: "MUHAMMAD FATIH AL-AYUBI" },
                { label: "Tempat, Tanggal Lahir", value: "Semarang, 12 Maret 2012" },
                { label: "Nama Orang Tua/Wali", value: "Ahmad Shodiq" },
                { label: "Nomor Induk Siswa (NIS)", value: "26270001" },
                { label: "NISN", value: "0123456789" },
                { label: "Sekolah Asal", value: "SMP NU Assalafie" },
              ].map(({ label, value }) => (
                <div key={label} className="flex">
                  <div className="w-48 text-gray-700">{label}</div>
                  <div className="w-6 text-center">:</div>
                  <div className="flex-1 font-bold text-gray-900">{value}</div>
                </div>
              ))}
            </div>

            <p>Berdasarkan hasil Rapat Pleno Dewan Guru Kelulusan Siswa Kelas IX Tahun Pelajaran {ACADEMIC_YEAR} pada tanggal 10 Juni 2026, nama yang tersebut di atas dinyatakan:</p>

            {/* Status Box */}
            <div className="flex justify-center my-8">
              <div className="bg-[#005c55] text-white px-20 py-4 text-2xl font-black uppercase tracking-[0.2em]">
                LULUS
              </div>
            </div>

            <p className="italic text-gray-600 pl-6">
              Surat keterangan ini bersifat sementara sampai diterbitkannya Ijazah asli dari instansi terkait. Surat ini dapat dipergunakan untuk keperluan pendaftaran ke jenjang pendidikan selanjutnya.
            </p>
          </div>

          {/* Document Footer (Signatures & QR) */}
          <div className="flex justify-between items-end mt-12">
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-gray-50 border border-gray-200 flex items-center justify-center p-2">
                {/* Fake QR */}
                <div className="w-full h-full border-4 border-[#005c55] flex flex-wrap gap-0.5 p-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className={`w-3 h-3 ${(i % 2 === 0 || i % 3 === 0) && i !== 5 ? 'bg-[#005c55]' : 'bg-transparent'}`} />
                  ))}
                </div>
              </div>
              <p className="text-[8px] text-gray-500">Scan untuk Verifikasi Online</p>
            </div>
            
            <div className="text-center w-56">
              <p className="text-[13px] mb-1">{PRINCIPAL_INFO.city}, 15 Juni 2026</p>
              <p className="text-[13px] mb-6">Kepala Sekolah,</p>
              <div className="flex justify-center mb-2">
                <Image src="/kepsek.svg" alt="Tanda Tangan" width={100} height={40} className="opacity-80" />
              </div>
              <p className="text-[13px] font-bold text-[#005c55] underline decoration-1 underline-offset-2 mb-1">{PRINCIPAL_INFO.name}</p>
              <p className="text-[11px] text-gray-600">NIP. {PRINCIPAL_INFO.nip}</p>
            </div>
          </div>

          {/* Bottom Decorator */}
          <div className="absolute bottom-8 left-16 right-16 flex items-center gap-2">
            <div className="flex-1 h-0.5 bg-[#7f4025]" />
            <div className="w-2 h-2 bg-[#005c55]" />
            <div className="w-2 h-2 bg-[#7f4025]" />
          </div>

        </div>
      </div>
    </div>
  );
}
