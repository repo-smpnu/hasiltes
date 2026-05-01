"use client";

import { motion } from "framer-motion";
import { SCHOOL_INFO, RE_REGISTRATION_DATE, RE_REGISTRATION_HOURS } from "@/lib/constants";
import Image from "next/image";

const cards = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Jadwal Daftar Ulang",
    desc: "Proses administrasi ulang bagi siswa yang dinyatakan Lulus seleksi.",
    items: [
      { text: "15 - 20 Juli 2026", icon: "diamond" },
      { text: "08:00 - 14:00 WIB", icon: "diamond" }
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Persyaratan",
    desc: "Dokumen wajib dibawa saat melakukan proses daftar ulang tatap muka.",
    items: [
      { text: "Kartu Ujian Asli", icon: "diamond" },
      { text: "SKL / Ijazah Legalitas", icon: "diamond" }
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Kontak Sekolah",
    desc: "Hubungi kami jika mengalami kendala dalam pengecekan atau pendaftaran.",
    items: [
      { text: "(021) 555-0123", icon: "phone" },
      { text: "info@assalafie.sch.id", icon: "mail" }
    ],
  },
  {
    icon: null,
    title: "Lokasi",
    desc: "Kampus Pusat SMP NU Assalafie, Jl. Pendidikan No. 45.",
    items: [],
    isMap: true,
  },
];

export default function InfoSection() {
  return (
    <section id="informasi" className="max-w-7xl mx-auto px-6 py-20 pb-28">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter font-bold text-3xl text-[#005c55] mb-4"
        >
          Informasi Penting
        </motion.h2>
        <div className="w-12 h-1 bg-[#944424] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            {card.isMap && (
              <div className="h-32 relative w-full bg-green-50 border-b border-gray-100">
                <Image src="/map-bg.png" alt="Map Location" fill className="object-cover" />
              </div>
            )}
            
            <div className={`p-8 flex flex-col flex-grow ${card.isMap ? 'pt-6' : ''}`}>
              {!card.isMap && card.icon && (
                <div className="w-10 h-10 rounded-lg bg-[#005c55] text-white flex items-center justify-center mb-6">
                  {card.icon}
                </div>
              )}
              
              <h3 className="font-inter font-semibold text-lg mb-3 text-gray-900">
                {card.title}
              </h3>
              
              <p className="font-lexend text-sm text-gray-600 mb-6 leading-relaxed">
                {card.desc}
              </p>
              
              {card.items.length > 0 && (
                <ul className="space-y-3 mt-auto">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {item.icon === "diamond" ? (
                        <span
                          className="w-2 h-2 mt-1.5 flex-shrink-0 rotate-45"
                          style={{ backgroundColor: "#944424", display: "inline-block" }}
                        />
                      ) : item.icon === "phone" ? (
                        <svg className="w-4 h-4 text-[#005c55] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ) : item.icon === "mail" ? (
                        <svg className="w-4 h-4 text-[#005c55] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ) : null}
                      <span className="font-lexend text-sm text-gray-800">{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {card.isMap && (
                <a
                  href={SCHOOL_INFO.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-[#005c55] font-inter font-medium text-sm flex items-center gap-1.5 hover:underline pt-4"
                >
                  Petunjuk Arah
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
