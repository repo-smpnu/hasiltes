import { createClient } from "@/lib/supabase/server";
import { StatsData } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { Users, CheckCircle, Clock, Upload, MoreHorizontal } from "lucide-react";

async function getDashboardStats(): Promise<StatsData> {
  try {
    const supabase = await createClient();
    const { count: total } = await supabase.from("applicants").select("*", { count: "exact", head: true });
    const { count: lulus } = await supabase.from("applicants").select("*", { count: "exact", head: true }).eq("status", "LULUS");
    const { count: tidak_lulus } = await supabase.from("applicants").select("*", { count: "exact", head: true }).eq("status", "TIDAK LULUS");
    const { count: pending } = await supabase.from("applicants").select("*", { count: "exact", head: true }).eq("status", "PENDING");
    return { total: total || 0, lulus: lulus || 0, tidak_lulus: tidak_lulus || 0, pending: pending || 0 };
  } catch {
    return { total: 0, lulus: 0, tidak_lulus: 0, pending: 0 };
  }
}

async function getRecentApplicants() {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("applicants")
      .select("id, full_name, nisn, status, created_at")
      .order("created_at", { ascending: false })
      .limit(4);
    return data || [];
  } catch {
    return [];
  }
}

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (days > 0) return `${days} hari yang lalu`;
  if (hours > 0) return `${hours} jam yang lalu`;
  if (minutes > 0) return `${minutes} menit yang lalu`;
  return "Baru saja";
}

export default async function AdminDashboardPage() {
  const [stats, recentApplicants] = await Promise.all([
    getDashboardStats(),
    getRecentApplicants(),
  ]);

  const lulusRate = stats.total > 0 ? ((stats.lulus / stats.total) * 100).toFixed(1) : "0";
  const belumLulus = stats.tidak_lulus + stats.pending;

  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-gray-100">
        <div>
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-1">Overview</h1>
          <p className="font-lexend text-sm text-gray-500">
            Selamat datang kembali, Administrator.
          </p>
        </div>
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          <Link
            href="/admin/import"
            className="flex items-center gap-2 bg-[#a3f0d0] text-[#005c55] px-4 py-2.5 rounded-lg font-inter font-semibold text-sm hover:opacity-90 transition-all"
          >
            <Upload size={16} />
            Import Data Excel
          </Link>
          <div className="h-10 w-px bg-gray-200 hidden sm:block" />
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="font-inter font-semibold text-sm text-gray-900">Ustadz Ahmad</p>
              <p className="font-lexend text-xs text-gray-500">Super Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center flex-shrink-0">
              <span className="font-inter font-bold text-gray-500 text-sm">UA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-[#a3f0d0]/40 flex items-center justify-center text-[#005c55] flex-shrink-0">
            <Users size={28} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-inter font-bold uppercase tracking-widest mb-1">Total Pendaftar</p>
            <h3 className="font-inter font-black text-4xl text-gray-900 leading-none mb-2">{stats.total.toLocaleString("id-ID")}</h3>
            <p className="text-xs text-[#005c55] font-lexend font-semibold flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              12% dari tahun lalu
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
            <CheckCircle size={28} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-inter font-bold uppercase tracking-widest mb-1">Lulus</p>
            <h3 className="font-inter font-black text-4xl text-gray-900 leading-none mb-2">{stats.lulus.toLocaleString("id-ID")}</h3>
            <p className="text-xs text-green-600 font-lexend font-semibold flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              {lulusRate}% Rasio Kelulusan
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
            <MoreHorizontal size={28} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-inter font-bold uppercase tracking-widest mb-1">Belum Lulus</p>
            <h3 className="font-inter font-black text-4xl text-gray-900 leading-none mb-2">{belumLulus.toLocaleString("id-ID")}</h3>
            <p className="text-xs text-orange-600 font-lexend font-semibold flex items-center gap-1">
              <Clock size={14} />
              Menunggu Review
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-inter font-bold text-xl text-gray-900 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#005c55] rounded-full" />
              Aktivitas Terbaru
            </h2>
            <Link href="/admin/siswa" className="text-[#005c55] font-lexend font-medium text-sm hover:underline">
              Lihat Semua
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50 border-b border-gray-100">
                  <tr>
                    {["Nama Siswa", "NISN", "Status", "Waktu"].map((h) => (
                      <th key={h} className="px-6 py-4 text-xs font-inter font-bold text-gray-500 uppercase tracking-widest">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentApplicants.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-gray-500 font-lexend text-sm">
                        Belum ada aktivitas.
                      </td>
                    </tr>
                  ) : (
                    recentApplicants.map((applicant) => (
                      <tr key={applicant.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#005c55]/10 flex items-center justify-center text-[#005c55] font-inter font-bold text-xs flex-shrink-0">
                              {getInitials(applicant.full_name)}
                            </div>
                            <span className="font-inter font-semibold text-gray-900 text-sm">
                              {applicant.full_name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-lexend text-sm text-gray-600">
                          {applicant.nisn}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1.5 rounded-lg text-xs font-inter font-bold uppercase tracking-widest inline-block ${
                              applicant.status === "LULUS"
                                ? "bg-[#005c55] text-white"
                                : applicant.status === "TIDAK LULUS"
                                ? "bg-[#546071] text-white"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {applicant.status === "TIDAK LULUS" ? (
                              <div className="flex flex-col items-center leading-tight">
                                <span>TIDAK</span>
                                <span>LULUS</span>
                              </div>
                            ) : (
                              applicant.status
                            )}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-gray-500 font-lexend">
                          {timeAgo(applicant.created_at)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Announcements */}
          <div>
            <h2 className="font-inter font-bold text-xl text-gray-900 flex items-center gap-3 mb-5">
              <div className="w-1.5 h-6 bg-[#7f4025] rounded-full" />
              Pengumuman
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="bg-[#ffdccf] p-4 rounded-xl border border-[#ffb598]">
                <h4 className="font-inter font-bold text-sm text-[#7f4025] mb-1">Update SKL v2.1</h4>
                <p className="font-lexend text-xs text-[#7f4025]/80 leading-relaxed">Pastikan format nomor surat sudah sesuai dengan regulasi terbaru tahun 2026.</p>
              </div>
              <div className="bg-[#a3f0d0] p-4 rounded-xl border border-[#71d9b3]">
                <h4 className="font-inter font-bold text-sm text-[#005c55] mb-1">Maintenance Malam Ini</h4>
                <p className="font-lexend text-xs text-[#005c55]/80 leading-relaxed">Sistem akan dinonaktifkan pada pukul 23:00 WIB untuk pembersihan cache database.</p>
              </div>
            </div>
          </div>

          {/* Daily Log */}
          <div>
            <h2 className="font-inter font-bold text-xl text-gray-900 flex items-center gap-3 mb-5">
              <div className="w-1.5 h-6 bg-[#005c55] rounded-full" />
              Log Harian
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="relative pl-6 space-y-6">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />
                
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#005c55] border-2 border-white" />
                  <p className="font-inter font-bold text-sm text-gray-900">Import Selesai</p>
                  <p className="font-lexend text-xs text-gray-500 italic">Oleh Admin 2 • 09:12 AM</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#005c55] border-2 border-white" />
                  <p className="font-inter font-bold text-sm text-gray-900">Perubahan Status Massal</p>
                  <p className="font-lexend text-xs text-gray-500 italic">Oleh System • 08:45 AM</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white" />
                  <p className="font-inter font-bold text-sm text-gray-900">Login Berhasil</p>
                  <p className="font-lexend text-xs text-gray-500 italic">Oleh Ustadz Ahmad • 07:30 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-inter font-bold text-sm text-gray-900">SMP NU Assalafie</h3>
          <p className="font-lexend text-xs text-gray-500 mt-1 uppercase tracking-widest">© 2026 SMP NU ASSALAFIE. ACADEMIC EXCELLENCE & ISLAMIC VALUES.</p>
        </div>
        <div className="flex items-center gap-6 text-xs font-inter font-bold text-gray-500 tracking-widest uppercase">
          <Link href="#" className="hover:text-[#005c55] transition-colors">Facebook</Link>
          <Link href="#" className="hover:text-[#005c55] transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-[#005c55] transition-colors">Youtube</Link>
          <Link href="#" className="hover:text-[#005c55] transition-colors">Maps</Link>
        </div>
      </footer>
    </div>
  );
}
