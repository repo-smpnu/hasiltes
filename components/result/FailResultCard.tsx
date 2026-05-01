"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PublicApplicantData } from "@/lib/types";
import { ACADEMIC_YEAR, SCHOOL_INFO } from "@/lib/constants";
import { getInitials } from "@/lib/utils";

interface Props {
  applicant: PublicApplicantData;
}

export default function FailResultCard({ applicant }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Top Header */}
        <div className="bg-[#2a313d] p-6 text-center">
          <h2 className="font-inter font-bold text-xl text-white tracking-wide">
            HASIL SELEKSI AKADEMIK
          </h2>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-between">
            
            {/* Left: Student Info */}
            <div className="flex-1 w-full text-center md:text-left">
              <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 rounded-lg font-inter font-bold text-xs uppercase tracking-wider mb-4 border border-gray-200">
                Informasi Peserta
              </div>
              
              <h3 className="font-inter font-bold text-3xl text-gray-900 mb-6">
                {applicant.full_name}
              </h3>
              
              <div className="space-y-4 max-w-md mx-auto md:mx-0">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-lexend text-sm">NISN</span>
                  <span className="font-inter font-semibold text-gray-900 text-sm">{applicant.nisn}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-lexend text-sm">No. Registrasi</span>
                  <span className="font-inter font-semibold text-gray-900 text-sm">{applicant.registration_number}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-lexend text-sm">Asal Sekolah</span>
                  <span className="font-inter font-semibold text-gray-900 text-sm">{applicant.school_origin}</span>
                </div>
              </div>
            </div>

            {/* Right: Status */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                
                <div className="bg-[#2a313d] text-white px-5 py-2 rounded-full font-inter font-bold text-sm tracking-widest mb-4 w-full">
                  TIDAK LULUS
                </div>
                
                <p className="font-lexend text-sm text-gray-600 leading-relaxed mb-6">
                  Mohon Maaf, Anda dinyatakan tidak lulus seleksi akademik tahun ini.
                </p>

                <button className="w-full bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-lg font-inter font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Cetak Bukti Hasil
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-8">
        <Link
          href="/cek-kelulusan"
          className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-inter font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-sm text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Kembali ke Pencarian
        </Link>
      </div>
    </motion.div>
  );
}
