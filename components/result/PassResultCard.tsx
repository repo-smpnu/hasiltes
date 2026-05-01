"use client";

import { motion } from "framer-motion";
import { CheckCircle, User, School } from "lucide-react";
import { PublicApplicantData } from "@/lib/types";
import DownloadSKLButton from "./DownloadSKLButton";
import { ACADEMIC_YEAR, SCHOOL_INFO } from "@/lib/constants";
import { getInitials } from "@/lib/utils";

interface Props {
  applicant: PublicApplicantData;
}

export default function PassResultCard({ applicant }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-4"
    >
      {/* Student Info Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between"
      >
        <div>
          {/* Student Header */}
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-[#005c55] font-inter font-black text-xl flex-shrink-0">
              {getInitials(applicant.full_name)}
            </div>
            <div>
              <p className="font-inter font-semibold text-xs text-gray-500 uppercase tracking-wider mb-1">
                Informasi Peserta
              </p>
              <h2 className="font-inter font-bold text-2xl text-gray-900">
                {applicant.full_name}
              </h2>
            </div>
          </div>

          {/* Data Fields */}
          <div className="space-y-4">
            {[
              { label: "NISN", value: applicant.nisn },
              { label: "Nomor Registrasi", value: applicant.registration_number },
              { label: "Asal Sekolah", value: applicant.school_origin },
              { label: "Tahun Ajaran", value: ACADEMIC_YEAR },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-lexend text-sm">{label}</span>
                <span className="font-inter font-semibold text-gray-900 text-sm text-right max-w-[60%]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Verification note */}
        <div className="mt-8 p-4 bg-green-50 rounded-xl border border-dashed border-green-200">
          <p className="font-lexend text-sm text-[#005c55] flex gap-3 items-start">
            <svg className="w-5 h-5 text-[#005c55] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Data di atas telah diverifikasi oleh Panitia Penerimaan Peserta Didik Baru {SCHOOL_INFO.name}.
          </p>
        </div>
      </motion.div>

      {/* Status Badge Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="lg:col-span-5 bg-[#005c55] text-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        {/* Decorative star pattern */}
        <div className="absolute top-0 right-0 p-2 opacity-10 transform translate-x-4 -translate-y-4">
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 5l5 40L95 50 55 55 50 95 45 55 5 50 45 45z" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Check Circle Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-white/30"
          >
            <CheckCircle size={48} className="text-white" fill="rgba(255,255,255,0.9)" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="font-inter font-black text-4xl sm:text-5xl tracking-widest mb-3"
          >
            LULUS
          </motion.h2>

          <p className="font-lexend text-white/90 text-lg">
            Alhamdulillah, Selamat!
          </p>
        </div>
      </motion.div>

      {/* Celebration & Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="lg:col-span-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="font-inter font-bold text-2xl text-[#005c55] mb-3">
            Baarakallahu Fiikum! 🎉
          </h3>
          <p className="font-lexend text-base text-gray-600 mb-8 leading-relaxed">
            Anda dinyatakan memenuhi kriteria kelulusan akademik dan akhlak di {SCHOOL_INFO.name}.
            Langkah selanjutnya adalah mengunduh Surat Keterangan Lulus (SKL) sebagai syarat daftar ulang.
          </p>
          <div className="flex justify-center">
            <DownloadSKLButton applicant={applicant} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
