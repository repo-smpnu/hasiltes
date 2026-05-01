import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchForm from "@/components/search/SearchForm";
import { SCHOOL_INFO, ACADEMIC_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cek Hasil Kelulusan",
  description: `Cek hasil seleksi akademik ${SCHOOL_INFO.name} Tahun Ajaran ${ACADEMIC_YEAR}`,
};

export default function CekKelulusanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-54.627 54.627-.83-.83L54.627 0zM0 54.627l.83.83L0 55.457v-.83zM54.627 60l.83-.83L60 54.627v.83L55.457 60h-.83zM0 0h.83L0 .83V0zm60 0v.83L59.17 0H60z\' fill=\'%23005c55\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] pointer-events-none opacity-50" />
        
        <div className="w-full max-w-2xl relative z-10">
          <SearchForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
