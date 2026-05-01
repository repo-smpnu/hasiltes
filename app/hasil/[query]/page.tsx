import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PassResultCard from "@/components/result/PassResultCard";
import FailResultCard from "@/components/result/FailResultCard";
import { SCHOOL_INFO, ACADEMIC_YEAR } from "@/lib/constants";
import { PublicApplicantData } from "@/lib/types";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Props {
  params: Promise<{ query: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { query } = await params;
  return {
    title: `Hasil Seleksi - ${decodeURIComponent(query)}`,
    description: `Hasil seleksi akademik ${SCHOOL_INFO.name} untuk ${decodeURIComponent(query)}`,
  };
}

async function getApplicantData(query: string): Promise<PublicApplicantData | null> {
  try {
    const supabase = await createClient();
    const cleanQuery = decodeURIComponent(query).trim();

    const { data, error } = await supabase
      .from("applicants")
      .select("full_name, nisn, registration_number, school_origin, status")
      .or(`nisn.eq.${cleanQuery},registration_number.ilike.${cleanQuery}`)
      .single();

    if (error || !data) return null;
    return data as PublicApplicantData;
  } catch {
    return null;
  }
}

export default async function HasilPage({ params }: Props) {
  const { query } = await params;
  const applicant = await getApplicantData(query);

  if (!applicant) {
    return (
      <div className="min-h-screen flex flex-col islamic-pattern-bg">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-24 pb-xl px-6">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-outline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h1 className="font-inter font-bold text-h2 text-on-surface mb-4">
              Data Tidak Ditemukan
            </h1>
            <p className="font-lexend text-body-md text-outline mb-8 leading-relaxed">
              Data dengan nomor <strong>{decodeURIComponent(query)}</strong> tidak ditemukan dalam sistem kami.
              Periksa kembali nomor yang Anda masukkan.
            </p>
            <Link
              href="/cek-kelulusan"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-inter font-semibold hover:opacity-90 transition-all"
            >
              Coba Lagi
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-xl relative">
        <div className="absolute inset-0 islamic-pattern-bg opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-outline text-sm font-inter">
            <Link href="/" className="hover:text-primary transition-colors">
              <Home size={16} />
            </Link>
            <ChevronRight size={14} />
            <Link href="/cek-kelulusan" className="hover:text-primary transition-colors">
              Cek Kelulusan
            </Link>
            <ChevronRight size={14} />
            <span className="text-primary font-semibold">Hasil Pencarian</span>
          </nav>

          {/* Status Header */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-inter font-bold text-xs uppercase tracking-widest mb-3">
              Hasil Seleksi Akhir
            </span>
            <h1 className="font-inter font-black text-h1 text-on-surface mb-1">
              Pengumuman Kelulusan
            </h1>
            <p className="font-lexend text-body-lg text-outline">
              Tahun Pelajaran {ACADEMIC_YEAR}
            </p>
          </div>

          {/* Result Card */}
          {applicant.status === "LULUS" ? (
            <PassResultCard applicant={applicant} />
          ) : (
            <FailResultCard applicant={applicant} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
