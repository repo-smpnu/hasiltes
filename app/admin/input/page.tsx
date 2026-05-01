"use client";

import { useState, useCallback } from "react";
import { Upload, FileText, CheckCircle, AlertCircle, Loader2, Download, X } from "lucide-react";
import { ImportResult } from "@/lib/types";

export default function AdminInputPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && (dropped.name.endsWith(".xlsx") || dropped.name.endsWith(".csv"))) {
      setFile(dropped);
      setResult(null);
      setError("");
    } else {
      setError("Format file tidak didukung. Gunakan .xlsx atau .csv");
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setResult(null);
      setError("");
    }
  };

  const handleImport = async () => {
    if (!file) return;
    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/import", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Gagal mengimport data.");
        return;
      }

      setResult(data);
    } catch {
      setError("Koneksi gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4">
        <div>
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-1">Input Kelulusan</h1>
          <p className="font-lexend text-sm text-gray-500">Upload file Excel atau CSV untuk memasukkan data kelulusan secara massal.</p>
        </div>
      </header>

      <div className="space-y-6">
        {/* Template Download */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white text-[#005c55] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="font-inter font-semibold text-sm text-gray-900">Template Excel</h3>
              <p className="font-lexend text-xs text-gray-500">
                Download template sebelum mengisi data siswa.
              </p>
            </div>
          </div>
          <a
            href="/templates/template-import-siswa.xlsx"
            download
            className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2.5 rounded-lg border border-gray-200 font-inter font-semibold text-sm hover:bg-gray-50 transition-all flex-shrink-0 shadow-sm"
          >
            <Download size={16} />
            Download Template
          </a>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
          <h2 className="font-inter font-bold text-base text-gray-900 mb-5">Upload File Data</h2>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-10 text-center transition-all cursor-pointer ${
              dragging ? "border-[#005c55] bg-[#005c55]/5" : "border-gray-200 hover:border-[#005c55] hover:bg-gray-50"
            }`}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <input
              id="file-input"
              type="file"
              accept=".xlsx,.csv"
              onChange={handleFileChange}
              className="hidden"
            />
            {file ? (
              <div className="flex items-center justify-center gap-3">
                <FileText className="text-[#005c55]" size={28} />
                <div className="text-left">
                  <p className="font-inter font-semibold text-gray-900">{file.name}</p>
                  <p className="font-lexend text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setFile(null); }}
                  className="ml-4 p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <Upload className="mx-auto text-gray-400 mb-4" size={36} />
                <p className="font-inter font-semibold text-gray-900 mb-1">
                  Klik atau drag & drop file di sini
                </p>
                <p className="font-lexend text-sm text-gray-500">
                  Mendukung format .xlsx dan .csv (max 10MB)
                </p>
              </>
            )}
          </div>

          {error && (
            <div className="mt-4 flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
              <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
              <p className="font-lexend text-sm text-red-600">{error}</p>
            </div>
          )}

          {result && (
            <div className="mt-4 p-6 bg-[#005c55]/5 rounded-xl border border-[#005c55]/20 space-y-4">
              <h3 className="font-inter font-bold text-sm text-[#005c55] flex items-center gap-2">
                <CheckCircle size={18} />
                Proses Selesai
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="font-inter font-black text-3xl text-[#005c55]">{result.success}</p>
                  <p className="font-lexend text-xs text-gray-500 mt-1">Berhasil</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="font-inter font-black text-3xl text-orange-500">{result.duplicates}</p>
                  <p className="font-lexend text-xs text-gray-500 mt-1">Duplikat</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="font-inter font-black text-3xl text-red-500">{result.errors}</p>
                  <p className="font-lexend text-xs text-gray-500 mt-1">Gagal</p>
                </div>
              </div>
              {result.errorDetails.length > 0 && (
                <div className="mt-4 bg-white rounded-lg p-4 border border-red-100 shadow-sm">
                  <p className="font-inter font-semibold text-xs text-red-500 mb-2">Detail Error:</p>
                  <ul className="space-y-1.5 max-h-40 overflow-y-auto">
                    {result.errorDetails.map((e, i) => (
                      <li key={i} className="font-lexend text-[11px] text-red-600 bg-red-50 px-3 py-2 rounded-md">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <button
            onClick={handleImport}
            disabled={!file || loading}
            className="w-full mt-6 bg-[#005c55] text-white py-3.5 rounded-xl font-inter font-semibold flex items-center justify-center gap-2 hover:bg-[#004d47] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Memproses Data...
              </>
            ) : (
              <>
                <Upload size={18} />
                Mulai Input Data
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
