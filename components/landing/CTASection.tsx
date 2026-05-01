import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[#005c55] text-white py-24" id="kontak">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-inter font-bold text-3xl mb-6">
          Sudah Menyiapkan Dokumen Anda?
        </h2>
        <p className="font-lexend text-base text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Pastikan Anda memiliki nomor ujian dan identitas diri yang valid sebelum
          melakukan pengecekan hasil seleksi.
        </p>
        <div className="flex justify-center">
          <Link
            href="/cek-kelulusan"
            className="bg-[#944424] text-white px-8 py-3.5 rounded-lg font-inter font-semibold text-base shadow-lg shadow-black/20 hover:bg-[#7a371c] transition-all active:scale-95"
          >
            Mulai Cek Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
