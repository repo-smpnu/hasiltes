"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SCHOOL_INFO } from "@/lib/constants";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/cek-kelulusan", label: "Cek Kelulusan" },
  { href: "#informasi", label: "Informasi" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm h-20">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-6 w-full">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative overflow-hidden rounded-lg flex-shrink-0">
            <Image
              src="/logosmpnu.svg"
              alt={`Logo ${SCHOOL_INFO.name}`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#005c55] font-inter group-hover:opacity-80 transition-opacity">
            {SCHOOL_INFO.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "#informasi" &&
              link.href !== "#kontak" &&
              (link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium font-inter transition-colors duration-200",
                  isActive
                    ? "text-[#005c55] font-bold border-b-2 border-[#005c55] pb-1"
                    : "text-gray-600 hover:text-[#005c55]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Admin Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/admin/login"
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold font-inter hover:bg-primary-container transition-all active:scale-95"
          >
            Admin Portal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-lg px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "#informasi" &&
              link.href !== "#kontak" &&
              (link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block text-sm font-medium font-inter py-2 transition-colors",
                  isActive
                    ? "text-[#005c55] font-bold"
                    : "text-gray-600 hover:text-[#005c55]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/admin/login"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold font-inter hover:bg-primary-container transition-all mt-2"
          >
            Admin Portal
          </Link>
        </div>
      )}
    </nav>
  );
}
