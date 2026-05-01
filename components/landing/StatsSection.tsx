"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Stats {
  total: number;
  lulus: number;
  kuota: number;
}

export default function StatsSection({ stats }: { stats: Stats }) {
  const [counts, setCounts] = useState({ total: 0, lulus: 0, kuota: 0 });

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setCounts({
        total: Math.round(stats.total * eased),
        lulus: Math.round(stats.lulus * eased),
        kuota: Math.round(stats.kuota * eased),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [stats]);

  const items = [
    { label: "TOTAL PESERTA", value: counts.total },
    { label: "SISWA DITERIMA", value: counts.lulus },
    { label: "TOTAL KUOTA", value: counts.kuota },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-[#f9f9fc] py-12 relative z-20 -mt-20 mx-4 sm:mx-6 rounded-2xl border border-gray-100 shadow-sm max-w-5xl lg:mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {items.map(({ label, value }) => (
          <div key={label} className="px-8 py-4 text-center flex flex-col justify-center">
            <div className="text-[#005c55] font-inter text-5xl font-bold mb-3 tracking-tight">
              {value.toLocaleString("id-ID")}
            </div>
            <div className="text-gray-500 font-inter font-medium text-xs tracking-[0.15em] uppercase">
              {label}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
