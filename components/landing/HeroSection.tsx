"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SCHOOL_INFO, ACADEMIC_YEAR } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[620px] flex items-center overflow-hidden hero-bg text-white">
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern-hero opacity-100 pointer-events-none" />

      {/* Gradient Overlay for the hero image */}
      <div className="absolute inset-0 hero-overlay z-0" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full py-xl z-10 pt-20 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20 mb-6"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest font-inter">
              Hasil Seleksi Akademik
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-inter font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5"
          >
            Pengumuman Hasil <br />
            Seleksi Akademik
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/90 mb-3 max-w-2xl font-lexend leading-relaxed"
          >
            Selamat datang calon peserta didik baru. Hasil seleksi Penerimaan Peserta Didik
            Baru (PPDB) <strong>{SCHOOL_INFO.name}</strong> Tahun Ajaran {ACADEMIC_YEAR} kini
            telah tersedia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link
              href="/cek-kelulusan"
              className="group bg-[#944424] text-white px-8 py-3.5 rounded-lg font-inter font-semibold text-base shadow-lg shadow-black/20 hover:bg-[#7a371c] transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              Cek Hasil Seleksi
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href="#panduan"
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-lg font-inter font-semibold text-base hover:bg-white/30 transition-all flex items-center justify-center gap-3"
            >
              Unduh Panduan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative floating element */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 lg:right-32 bottom-20 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 hidden lg:flex items-center justify-center pointer-events-none opacity-20"
      >
        <span className="text-[300px] font-black leading-none text-white/20 select-none">
          C
        </span>
      </motion.div>
    </section>
  );
}
