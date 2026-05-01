import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import { SCHOOL_INFO, ACADEMIC_YEAR } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Pengumuman Hasil Seleksi Akademik ${ACADEMIC_YEAR} - ${SCHOOL_INFO.name}`,
    template: `%s | ${SCHOOL_INFO.name}`,
  },
  description: `Cek hasil seleksi akademik Penerimaan Peserta Didik Baru (PPDB) ${SCHOOL_INFO.name} Tahun Ajaran ${ACADEMIC_YEAR}. Masukkan NISN atau Nomor Pendaftar untuk melihat status kelulusan.`,
  keywords: [
    "SMP NU Assalafie",
    "pengumuman kelulusan",
    "PPDB",
    "hasil seleksi",
    "cek kelulusan",
    "surat keterangan lulus",
    "SKL",
    ACADEMIC_YEAR,
  ],
  authors: [{ name: SCHOOL_INFO.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: SCHOOL_INFO.name,
    title: `Pengumuman Hasil Seleksi Akademik ${ACADEMIC_YEAR} - ${SCHOOL_INFO.name}`,
    description: `Cek hasil seleksi akademik PPDB ${SCHOOL_INFO.name} Tahun Ajaran ${ACADEMIC_YEAR}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Pengumuman Hasil Seleksi Akademik ${ACADEMIC_YEAR} - ${SCHOOL_INFO.name}`,
    description: `Cek hasil seleksi akademik PPDB ${SCHOOL_INFO.name} Tahun Ajaran ${ACADEMIC_YEAR}.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${lexend.variable} font-sans antialiased bg-background text-on-background`}>
        {children}
      </body>
    </html>
  );
}
