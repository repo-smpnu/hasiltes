"use client";

import { History, Search, Filter, AlertCircle } from "lucide-react";

export default function AdminLogPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4">
        <div>
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-1">Log Aktivitas</h1>
          <p className="font-lexend text-sm text-gray-500">Pantau semua aktivitas sistem dan perubahan data.</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col md:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari aktivitas..."
              className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#005c55] focus:ring-1 focus:ring-[#005c55] outline-none font-lexend text-sm"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <select
              className="px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#005c55] outline-none font-lexend text-sm appearance-none bg-white md:w-44 w-full"
            >
              <option value="">Semua Modul</option>
              <option value="auth">Autentikasi</option>
              <option value="siswa">Data Siswa</option>
              <option value="pengaturan">Pengaturan</option>
            </select>
            <button className="p-2.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <History className="mx-auto text-gray-300 mb-4" size={48} />
          <h2 className="text-lg font-bold text-gray-900 font-inter mb-2">Belum Ada Aktivitas</h2>
          <p className="text-gray-500 font-lexend text-sm max-w-md mx-auto">
            Log aktivitas sistem akan muncul di sini. Saat ini fitur pencatatan log sedang dalam pengembangan lebih lanjut.
          </p>
        </div>
      </div>
    </div>
  );
}
