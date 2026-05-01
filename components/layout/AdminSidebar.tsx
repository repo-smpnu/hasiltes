"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  CheckSquare,
  Settings,
  History,
  LogOut,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/siswa", label: "Data Siswa", icon: Users },
  { href: "/admin/input", label: "Input Kelulusan", icon: CheckSquare },
  { href: "/admin/pengaturan", label: "Pengaturan SKL", icon: Settings },
  { href: "/admin/log", label: "Log Aktivitas", icon: History },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <aside className="hidden lg:flex flex-col bg-white border-r border-gray-100 h-screen w-[260px] fixed left-0 top-0 z-50 shadow-sm">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-8 mb-4">
        <div className="w-10 h-10 bg-[#005c55] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
          <Image
            src="/logosmpnu.svg"
            alt="Logo"
            width={32}
            height={32}
            className="object-contain filter invert brightness-0"
          />
        </div>
        <div>
          <h2 className="text-[15px] font-bold text-[#005c55] leading-tight font-inter tracking-wide uppercase">Admin Panel</h2>
          <p className="text-[11px] font-semibold text-gray-500 font-lexend mt-0.5">
            SMP NU Assalafie
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1.5">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg font-lexend text-[13px] font-medium transition-all duration-200 relative group",
                isActive
                  ? "bg-[#005c55]/5 text-[#005c55]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon size={18} className={cn("transition-colors", isActive ? "text-[#005c55]" : "text-gray-400 group-hover:text-gray-600")} strokeWidth={isActive ? 2.5 : 2} />
              <span>{label}</span>
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#005c55] rounded-l-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto p-4 space-y-2">
        <div className="w-full h-[1px] bg-gray-100 mb-4" />
        <Link
          href="/"
          target="_blank"
          className="w-full flex items-center gap-2 justify-center bg-[#005c55] text-white py-2.5 px-4 rounded-lg font-inter font-semibold text-sm hover:bg-[#004d47] active:scale-[0.98] transition-all shadow-sm"
        >
          <ExternalLink size={16} />
          Buka Pengumuman
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 justify-center text-gray-500 py-2.5 px-4 rounded-lg font-inter text-sm hover:bg-red-50 hover:text-red-600 transition-all font-medium"
        >
          <LogOut size={16} />
          Keluar
        </button>
      </div>
    </aside>
  );
}
