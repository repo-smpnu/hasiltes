"use client";

import { useEffect, useState } from "react";
import { ANNOUNCEMENT_DATE } from "@/lib/constants";
import { getTimeUntil } from "@/lib/utils";

export default function CountdownSection() {
  // Start with null to prevent SSR/client mismatch (hydration fix)
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeUntil> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeUntil(ANNOUNCEMENT_DATE));

    const timer = setInterval(() => {
      setTimeLeft(getTimeUntil(ANNOUNCEMENT_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Don't render anything on server (prevents hydration mismatch)
  if (!mounted || !timeLeft || timeLeft.isExpired) return null;

  const items = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest font-inter mb-6 text-white/80">
          Pengumuman akan dibuka dalam
        </p>
        <div className="flex justify-center gap-4 sm:gap-8">
          {items.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center mb-2">
                <span className="text-2xl sm:text-3xl font-black font-inter" suppressHydrationWarning>
                  {String(value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs uppercase tracking-wider font-inter text-white/70">
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-white/60 font-inter">
          12 Juni 2026 pukul 08:00 WIB
        </p>
      </div>
    </section>
  );
}
