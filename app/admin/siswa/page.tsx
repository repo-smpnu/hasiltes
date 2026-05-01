"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Applicant, ApplicantStatus } from "@/lib/types";
import { getInitials } from "@/lib/utils";
import {
  Search, Plus, Edit2, Trash2, Download, FileX,
  ChevronLeft, ChevronRight, Filter, Loader2, X, Check,
  Users, CheckCircle, XCircle, MoreHorizontal, CloudDownload, DownloadCloud
} from "lucide-react";

const PAGE_SIZE = 10;

function StatusBadge({ status }: { status: ApplicantStatus }) {
  if (status === "LULUS") {
    return (
      <span className="px-4 py-1.5 rounded-full text-[11px] font-inter font-bold uppercase tracking-widest bg-[#005c55] text-white">
        LULUS
      </span>
    );
  }
  if (status === "TIDAK LULUS") {
    return (
      <span className="px-4 py-1.5 rounded-full text-[11px] font-inter font-bold uppercase tracking-widest bg-[#546071] text-white text-center leading-tight">
        <div className="flex flex-col items-center">
          <span>TIDAK</span>
          <span>LULUS</span>
        </div>
      </span>
    );
  }
  return (
    <span className="px-4 py-1.5 rounded-full text-[11px] font-inter font-bold uppercase tracking-widest bg-orange-100 text-orange-700">
      PENDING
    </span>
  );
}

interface FormState {
  full_name: string;
  nisn: string;
  registration_number: string;
  school_origin: string;
  status: ApplicantStatus;
  gender: string;
  birth_place: string;
  birth_date: string;
  parent_name: string;
}

const defaultForm: FormState = {
  full_name: "",
  nisn: "",
  registration_number: "",
  school_origin: "",
  status: "PENDING",
  gender: "",
  birth_place: "",
  birth_date: "",
  parent_name: "",
};

export default function AdminSiswaPage() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [total, setTotal] = useState(0);
  const [stats, setStats] = useState({ total: 0, lulus: 0, tidak_lulus: 0, pending: 0 });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ApplicantStatus | "">("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(defaultForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const supabase = createClient();

  const fetchApplicants = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("applicants")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

      if (search.trim()) {
        query = query.or(
          `full_name.ilike.%${search}%,nisn.ilike.%${search}%,registration_number.ilike.%${search}%`
        );
      }
      if (statusFilter) {
        query = query.eq("status", statusFilter);
      }

      const { data, count } = await query;
      setApplicants(data || []);
      setTotal(count || 0);

      // Fetch global stats if page 1 or just occasionally
      const { data: allData } = await supabase.from("applicants").select("status");
      if (allData) {
        setStats({
          total: allData.length,
          lulus: allData.filter(a => a.status === "LULUS").length,
          tidak_lulus: allData.filter(a => a.status === "TIDAK LULUS").length,
          pending: allData.filter(a => a.status === "PENDING").length,
        });
      }

    } finally {
      setLoading(false);
    }
  }, [page, search, statusFilter]);

  useEffect(() => {
    fetchApplicants();
  }, [fetchApplicants]);

  const openAdd = () => {
    setForm(defaultForm);
    setEditingId(null);
    setError("");
    setShowModal(true);
  };

  const openEdit = (a: Applicant) => {
    setForm({
      full_name: a.full_name,
      nisn: a.nisn,
      registration_number: a.registration_number,
      school_origin: a.school_origin,
      status: a.status,
      gender: a.gender || "",
      birth_place: a.birth_place || "",
      birth_date: a.birth_date || "",
      parent_name: a.parent_name || "",
    });
    setEditingId(a.id);
    setError("");
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.full_name || !form.nisn || !form.registration_number || !form.school_origin) {
      setError("Nama, NISN, Nomor Pendaftar, dan Asal Sekolah wajib diisi.");
      return;
    }
    setSaving(true);
    setError("");

    const payload = {
      full_name: form.full_name.trim(),
      nisn: form.nisn.trim(),
      registration_number: form.registration_number.trim(),
      school_origin: form.school_origin.trim(),
      status: form.status,
      gender: form.gender || null,
      birth_place: form.birth_place || null,
      birth_date: form.birth_date || null,
      parent_name: form.parent_name || null,
      updated_at: new Date().toISOString(),
    };

    try {
      if (editingId) {
        const { error: err } = await supabase.from("applicants").update(payload).eq("id", editingId);
        if (err) throw err;
      } else {
        const { error: err } = await supabase.from("applicants").insert(payload);
        if (err) throw err;
      }
      setShowModal(false);
      fetchApplicants();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Gagal menyimpan data.";
      setError(msg.includes("duplicate") ? "NISN atau Nomor Pendaftar sudah ada." : msg);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Hapus data ${name}? Tindakan ini tidak dapat dibatalkan.`)) return;
    await supabase.from("applicants").delete().eq("id", id);
    fetchApplicants();
  };

  const handleDownloadSKL = (nisn: string) => {
    window.open(`/api/download-skl?nisn=${nisn}`, "_blank");
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-4">
        <div>
          <h1 className="font-inter font-bold text-3xl text-gray-900 mb-1">Manajemen Data Siswa</h1>
          <p className="font-lexend text-sm text-gray-500">Kelola data kelulusan dan administrasi siswa secara terpusat.</p>
        </div>
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button
            onClick={openAdd}
            className="flex items-center gap-2 bg-[#005c55] text-white px-5 py-2.5 rounded-lg font-inter font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            <Plus size={16} />
            Tambah Siswa
          </button>
          <a
            href="/api/admin/export"
            className="flex items-center gap-2 bg-[#e2e8f0] text-gray-700 px-5 py-2.5 rounded-lg font-inter font-semibold text-sm hover:bg-gray-300 transition-all"
          >
            <CloudDownload size={16} />
            Export CSV
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="space-y-6">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col md:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Cari Nama Siswa, NISN, atau No. Registrasi..."
              className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#005c55] focus:ring-1 focus:ring-[#005c55] outline-none font-lexend text-sm"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value as ApplicantStatus | ""); setPage(1); }}
              className="px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#005c55] outline-none font-lexend text-sm appearance-none bg-white md:w-44 w-full"
            >
              <option value="">Semua Status</option>
              <option value="LULUS">LULUS</option>
              <option value="TIDAK LULUS">TIDAK LULUS</option>
              <option value="PENDING">PENDING</option>
            </select>
            <button className="p-2.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Table Container */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  {["STUDENT NAME", "NISN", "REG. NUMBER", "ORIGIN SCHOOL", "STATUS", "ACTIONS"].map((h, i) => (
                    <th key={h} className={`px-6 py-4 font-inter font-bold text-gray-700 uppercase tracking-widest text-[11px] ${i === 5 ? "text-right" : ""}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <Loader2 className="animate-spin mx-auto text-[#005c55]" size={32} />
                    </td>
                  </tr>
                ) : applicants.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <FileX className="mx-auto text-gray-300 mb-3" size={40} />
                      <p className="font-lexend text-gray-500 text-sm">Data tidak ditemukan.</p>
                    </td>
                  </tr>
                ) : (
                  applicants.map((a) => (
                    <tr key={a.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-inter font-black text-[13px] flex-shrink-0 ${
                            a.status === "LULUS" ? "bg-[#a3f0d0] text-[#005c55]" : 
                            a.status === "TIDAK LULUS" ? "bg-gray-200 text-gray-600" : "bg-orange-100 text-orange-700"
                          }`}>
                            {getInitials(a.full_name)}
                          </div>
                          <div>
                            <span className="font-inter font-semibold text-gray-900 text-sm block">{a.full_name}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-lexend text-[13px] text-gray-600">{a.nisn}</td>
                      <td className="px-6 py-4 font-lexend text-[13px] text-gray-500">{a.registration_number}</td>
                      <td className="px-6 py-4 font-lexend text-[13px] text-gray-500 max-w-[180px] truncate">{a.school_origin}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={a.status} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          {a.status === "LULUS" ? (
                            <button
                              onClick={() => handleDownloadSKL(a.nisn)}
                              title="Download SKL"
                              className="p-1.5 hover:bg-green-50 text-[#005c55] rounded-md transition-colors"
                            >
                              <Download size={16} />
                            </button>
                          ) : (
                            <div title="SKL tidak tersedia" className="p-1.5 text-gray-300 cursor-not-allowed">
                              <FileX size={16} />
                            </div>
                          )}
                          <button
                            onClick={() => openEdit(a)}
                            title="Edit"
                            className="p-1.5 hover:bg-blue-50 text-[#005c55] rounded-md transition-colors"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(a.id, a.full_name)}
                            title="Hapus"
                            className="p-1.5 hover:bg-red-50 text-red-500 rounded-md transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-6 py-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-lexend text-[13px] text-gray-500">
              Menampilkan <span className="font-bold text-gray-900">{(page - 1) * PAGE_SIZE + 1}-{Math.min(page * PAGE_SIZE, total)}</span> dari <span className="font-bold text-gray-900">{total}</span> siswa
            </p>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const p = Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
                return (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-7 h-7 flex items-center justify-center text-[13px] font-inter font-bold rounded ${
                      p === page ? "bg-[#005c55] text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Stats Footer Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#a3f0d0]/40 flex items-center justify-center text-[#005c55] flex-shrink-0">
              <Users size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-[11px] font-inter font-bold uppercase tracking-widest mb-0.5">Total Siswa</p>
              <h3 className="font-inter font-black text-2xl text-gray-900">{stats.total.toLocaleString("id-ID")}</h3>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-[11px] font-inter font-bold uppercase tracking-widest mb-0.5">Lulus</p>
              <h3 className="font-inter font-black text-2xl text-gray-900">{stats.lulus.toLocaleString("id-ID")}</h3>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0">
              <XCircle size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-[11px] font-inter font-bold uppercase tracking-widest mb-0.5">Tidak Lulus</p>
              <h3 className="font-inter font-black text-2xl text-gray-900">{stats.tidak_lulus.toLocaleString("id-ID")}</h3>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
              <MoreHorizontal size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-[11px] font-inter font-bold uppercase tracking-widest mb-0.5">Tertunda</p>
              <h3 className="font-inter font-black text-2xl text-gray-900">{stats.pending.toLocaleString("id-ID")}</h3>
            </div>
          </div>
        </div>

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="font-inter font-bold text-lg text-gray-900">
                {editingId ? "Edit Data Siswa" : "Tambah Siswa Baru"}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Nama Lengkap *", key: "full_name", type: "text", placeholder: "Muhammad Fatih Al-Ayubi" },
                { label: "NISN *", key: "nisn", type: "text", placeholder: "0123456789" },
                { label: "Nomor Pendaftar *", key: "registration_number", type: "text", placeholder: "REG-2026-001" },
                { label: "Asal Sekolah *", key: "school_origin", type: "text", placeholder: "MI Al-Hikmah" },
                { label: "Nama Orang Tua/Wali", key: "parent_name", type: "text", placeholder: "Ahmad Shodiq" },
                { label: "Tempat Lahir", key: "birth_place", type: "text", placeholder: "Cirebon" },
                { label: "Tanggal Lahir", key: "birth_date", type: "date", placeholder: "" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label className="block font-inter font-semibold text-sm text-gray-700 mb-1.5">{label}</label>
                  <input
                    type={type}
                    value={(form as unknown as Record<string, string>)[key] || ""}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    placeholder={placeholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#005c55] focus:ring-1 focus:ring-[#005c55] outline-none font-lexend text-sm transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="block font-inter font-semibold text-sm text-gray-700 mb-1.5">Status Kelulusan *</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as ApplicantStatus }))}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#005c55] outline-none font-lexend text-sm bg-white"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="LULUS">LULUS</option>
                  <option value="TIDAK LULUS">TIDAK LULUS</option>
                </select>
              </div>

              {error && (
                <p className="text-red-600 text-sm font-lexend bg-red-50 px-4 py-3 rounded-lg border border-red-100">
                  {error}
                </p>
              )}
            </div>
            <div className="px-6 py-5 border-t border-gray-100 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-inter font-semibold text-sm hover:bg-gray-50 transition-all"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 py-2.5 rounded-lg bg-[#005c55] text-white font-inter font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#004d47] disabled:opacity-70 transition-all shadow-sm"
              >
                {saving ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
                {editingId ? "Simpan Perubahan" : "Tambah Siswa"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
