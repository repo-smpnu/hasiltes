"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/constants";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (authError) {
        setError("Email atau password salah. Coba lagi.");
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-[#003d38] px-4 islamic-pattern-bg">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-elevated overflow-hidden">
          {/* Header */}
          <div className="bg-primary px-8 py-8 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 p-1">
              <Image src="/logosmpnu.svg" alt="Logo" width={56} height={56} className="object-contain" />
            </div>
            <h1 className="font-inter font-black text-2xl text-white mb-1">Admin Portal</h1>
            <p className="font-lexend text-sm text-white/70">{SCHOOL_INFO.name}</p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="email" className="block font-inter font-semibold text-sm text-on-surface mb-2">
                  Email Admin
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@smpnu-assalafie.sch.id"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-lexend text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="password" className="block font-inter font-semibold text-sm text-on-surface mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-lexend text-sm transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-error text-sm font-lexend text-center bg-error-container/30 px-4 py-3 rounded-lg">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3.5 rounded-xl font-inter font-bold text-base flex items-center justify-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Masuk...
                  </>
                ) : (
                  "Masuk ke Admin"
                )}
              </button>
            </form>

            <p className="mt-6 text-center font-lexend text-xs text-outline">
              Hanya untuk personel yang berwenang. <br />
              Hubungi administrator sistem jika lupa password.
            </p>
          </div>
        </div>

        <p className="text-center text-white/50 text-xs font-inter mt-6">
          © {new Date().getFullYear()} {SCHOOL_INFO.name}
        </p>
      </div>
    </div>
  );
}
