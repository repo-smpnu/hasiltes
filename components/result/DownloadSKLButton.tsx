"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader2, Share2, MessageCircle } from "lucide-react";
import { PublicApplicantData } from "@/lib/types";
import { createWhatsAppShareUrl } from "@/lib/utils";

interface DownloadSKLButtonProps {
  applicant: PublicApplicantData;
}

export default function DownloadSKLButton({ applicant }: DownloadSKLButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `/api/download-skl?nisn=${encodeURIComponent(applicant.nisn)}`
      );

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Gagal mengunduh surat. Coba lagi.");
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `SKL-${applicant.nisn}-${applicant.full_name.replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch {
      setError("Koneksi gagal. Periksa internet Anda.");
    } finally {
      setLoading(false);
    }
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://smpnuassalafie.sch.id";
  const shareUrl = `${baseUrl}/hasil/${encodeURIComponent(applicant.nisn)}`;

  const whatsappUrl = createWhatsAppShareUrl(
    applicant.full_name,
    applicant.status,
    shareUrl
  );

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleDownload}
        disabled={loading}
        className="bg-tertiary text-on-tertiary px-8 py-4 rounded-xl font-inter font-semibold flex items-center justify-center gap-3 hover:bg-tertiary-container transition-all shadow-lg shadow-tertiary/20 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Menyiapkan PDF...
          </>
        ) : (
          <>
            <Download size={20} />
            Download Surat Keterangan Lulus (SKL)
          </>
        )}
      </motion.button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-outline text-outline px-6 py-4 rounded-xl font-inter font-semibold flex items-center justify-center gap-3 hover:bg-surface-container-high transition-all"
      >
        <MessageCircle size={20} />
        Bagikan ke WhatsApp
      </a>

      {error && (
        <p className="col-span-full text-center text-error text-sm font-lexend mt-2">
          {error}
        </p>
      )}
    </div>
  );
}
