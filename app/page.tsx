import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import InfoSection from "@/components/landing/InfoSection";
import CTASection from "@/components/landing/CTASection";
import CountdownSection from "@/components/landing/CountdownSection";
import { createClient } from "@/lib/supabase/server";
import { SCHOOL_INFO, ACADEMIC_YEAR, ANNOUNCEMENT_DATE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Pengumuman Hasil Seleksi Akademik ${ACADEMIC_YEAR} | ${SCHOOL_INFO.name}`,
  description: `Cek hasil seleksi PPDB ${SCHOOL_INFO.name} Tahun Ajaran ${ACADEMIC_YEAR}. Masukkan NISN atau Nomor Pendaftar.`,
};

async function getStats() {
  try {
    const supabase = await createClient();
    const { count: total } = await supabase
      .from("applicants")
      .select("*", { count: "exact", head: true });
    const { count: lulus } = await supabase
      .from("applicants")
      .select("*", { count: "exact", head: true })
      .eq("status", "LULUS");
    return {
      total: total || 0,
      lulus: lulus || 0,
      kuota: 350,
    };
  } catch {
    return { total: 0, lulus: 0, kuota: 350 };
  }
}

export default async function HomePage() {
  const stats = await getStats();
  const isAnnouncementOpen = new Date() >= ANNOUNCEMENT_DATE;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero */}
        <HeroSection />

        {/* Countdown (only if not open yet) */}
        {!isAnnouncementOpen && <CountdownSection />}

        {/* Stats */}
        <StatsSection stats={stats} />

        {/* Info Section */}
        <InfoSection />

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
