"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, AlertCircle } from "lucide-react";
import { isValidSearchQuery } from "@/lib/utils";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError("");

    if (!query.trim()) {
      setError("Masukkan NISN atau Nomor Pendaftar terlebih dahulu.");
      return;
    }

    if (!isValidSearchQuery(query)) {
      setError("Format tidak valid. Minimal 6 karakter.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}`);
      const result = await res.json();

      if (res.status === 429) {
        setError("Terlalu banyak percobaan. Coba lagi dalam 1 menit.");
        return;
      }

      if (!res.ok) {
        setError(result.error || "Terjadi kesalahan. Coba lagi.");
        return;
      }

      if (!result.found) {
        setError("Data tidak ditemukan. Periksa kembali NISN atau Nomor Pendaftar Anda.");
        return;
      }

      // Navigate to result page
      router.push(`/hasil/${encodeURIComponent(query.trim())}`);
    } catch {
      setError("Koneksi gagal. Periksa internet Anda dan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header section in card */}
      <div className="p-8 sm:p-10 border-b border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-50 text-[#005c55] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="font-inter font-bold text-2xl text-gray-900 mb-3">
          Pengecekan Hasil Seleksi
        </h2>
        <p className="font-lexend text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
          Silakan masukkan Nomor Induk Siswa Nasional (NISN) atau Nomor Pendaftar untuk melihat hasil seleksi Anda.
        </p>
      </div>

      <div className="p-8 sm:p-10 bg-gray-50/50">
        <form onSubmit={handleSearch} className="space-y-6">
          <div>
            <label
              htmlFor="search-input"
              className="block font-inter font-semibold text-sm text-gray-700 mb-2.5"
            >
              NISN atau No. Pendaftar
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </span>
              <input
                ref={inputRef}
                id="search-input"
                type="text"
                name="query"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Contoh: 0012345678"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-200 focus:border-[#005c55] focus:ring-2 focus:ring-[#005c55]/20 transition-all text-gray-800 placeholder:text-gray-400 font-lexend outline-none"
                disabled={loading}
                autoComplete="off"
                autoCorrect="off"
                inputMode="text"
              />
            </div>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2 mt-3 text-red-600 text-sm font-lexend bg-red-50 p-3 rounded-lg border border-red-100"
                >
                  <AlertCircle size={16} className="flex-shrink-0" />
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="w-full bg-[#005c55] text-white py-4 rounded-xl font-inter font-semibold text-base flex items-center justify-center gap-2 hover:bg-[#004d47] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-[#005c55]/20"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Mencari Data...
              </>
            ) : (
              <>
                <Search size={18} />
                Cari Hasil Seleksi
              </>
            )}
          </button>
        </form>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
          <div className="bg-blue-100 text-blue-600 p-1 rounded-full flex-shrink-0 mt-0.5">
            <AlertCircle size={16} />
          </div>
          <p className="text-sm font-lexend text-blue-800 leading-relaxed">
            <span className="font-semibold">Informasi:</span> Bagi siswa yang dinyatakan Lulus, harap segera mencetak Surat Keterangan Lulus (SKL) sebagai syarat daftar ulang.
          </p>
        </div>
      </div>
    </div>
  );
}
