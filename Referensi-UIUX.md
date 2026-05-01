Berikut adalah beberapa referensi kode design UI UX untuk web hasil tes akademik SMP NU Assalafie.


## Kode Halaman Landing Page
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&amp;family=Lexend:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>.islamic-pattern {
    background-color: #005c55;
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDdqJU9GRCIpM-aPe8G3aWum31ywY1tgcX39FnYR_BdJkKJewU3KGD7fYvQeKkvdpsDwV21dCSNKTFPvHXvKFpEI0rw16FXSV0ABhqCeOFDwHjL6zlEZQZ8JvC5997CCKdDtaGD93RKu1Yi8W5PmkRtZPHyzfqZfs354MPiQusZP1rQSMapCNspN0-J67hs6Hba7PVlwPpGGT7nEMT0yq6xxYQ5RVtdnvruUy2jdkJCbaI0pSviT5Ld81cCu5ed8KfDffC1PG53d13g);
    background-blend-mode: overlay
    }
.geometric-overlay {
    mask-image: radial-gradient(circle at center, black, transparent);
    opacity: 0.1
    }
.diamond-bullet {
    width: 8px;
    height: 8px;
    background-color: #7f4025;
    /* tertiary/gold color */
    transform: rotate(45deg);
    display: inline-block;
    margin-right: 12px
    }</style>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
                "error": "#ba1a1a",
                "outline": "#6e7977",
                "surface-container-lowest": "#ffffff",
                "secondary": "#2b6954",
                "on-surface": "#151c27",
                "inverse-on-surface": "#ebf1ff",
                "tertiary": "#7f4025",
                "on-tertiary": "#ffffff",
                "surface-dim": "#d3daea",
                "surface": "#f9f9ff",
                "secondary-fixed-dim": "#95d3ba",
                "primary-fixed": "#9cf2e8",
                "surface-container-high": "#e2e8f8",
                "inverse-primary": "#80d5cb",
                "on-secondary": "#ffffff",
                "background": "#f9f9ff",
                "on-tertiary-fixed-variant": "#72361b",
                "on-primary-fixed": "#00201d",
                "on-surface-variant": "#3e4947",
                "surface-container-low": "#f0f3ff",
                "on-background": "#151c27",
                "on-tertiary-fixed": "#370e00",
                "secondary-fixed": "#b0f0d6",
                "outline-variant": "#bdc9c6",
                "primary-fixed-dim": "#80d5cb",
                "on-secondary-fixed-variant": "#0b513d",
                "on-tertiary-container": "#ffe5db",
                "surface-container-highest": "#dce2f3",
                "surface-tint": "#006a63",
                "on-primary-container": "#a3faef",
                "surface-container": "#e7eefe",
                "on-primary": "#ffffff",
                "tertiary-container": "#9c573a",
                "on-secondary-fixed": "#002117",
                "tertiary-fixed": "#ffdbce",
                "secondary-container": "#adedd3",
                "on-error": "#ffffff",
                "surface-bright": "#f9f9ff",
                "tertiary-fixed-dim": "#ffb598",
                "on-secondary-container": "#306d58",
                "on-primary-fixed-variant": "#00504a",
                "primary-container": "#0f766e",
                "error-container": "#ffdad6",
                "inverse-surface": "#2a313d",
                "on-error-container": "#93000a",
                "surface-variant": "#dce2f3",
                "primary": "#005c55"
        },
        "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
        },
        "spacing": {
                "lg": "48px",
                "xl": "80px",
                "grid-margin": "24px",
                "md": "24px",
                "grid-gutter": "16px",
                "sm": "12px",
                "base": "8px",
                "xs": "4px"
        },
        "fontFamily": {
                "h2": ["Inter"],
                "status-badge": ["Inter"],
                "h3": ["Inter"],
                "body-sm": ["Lexend"],
                "h1": ["Inter"],
                "body-lg": ["Lexend"],
                "body-md": ["Lexend"],
                "label-bold": ["Inter"]
        },
        "fontSize": {
                "h2": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                "status-badge": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
                "h3": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "h1": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "600"}]
        }
      }
    }
  }
</script>
</head>
<body class="bg-background font-body-md text-on-background">
<!-- TopNavBar -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 shadow-sm shadow-teal-900/5 h-20">
<div class="flex justify-between items-center h-full max-w-7xl mx-auto px-6 w-full">
<div class="flex items-center gap-2">
<span class="text-xl font-bold tracking-tight text-teal-700 dark:text-teal-400 font-h2">SMP NU Assalafie</span>
</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-teal-700 dark:text-teal-400 font-bold border-b-2 border-teal-700 pb-1 font-label-bold transition-colors duration-200" href="#">Beranda</a>
<a class="text-slate-600 dark:text-slate-400 font-medium font-label-bold hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Cek Kelulusan</a>
<a class="text-slate-600 dark:text-slate-400 font-medium font-label-bold hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Informasi</a>
<a class="text-slate-600 dark:text-slate-400 font-medium font-label-bold hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Kontak</a>
</div>
<button class="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-bold transition-all active:opacity-80 active:scale-95">Admin Portal</button>
</div>
</nav>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative min-h-[600px] flex items-center overflow-hidden islamic-pattern text-white"><div class="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-transparent z-0"></div>
<div class="absolute inset-0 opacity-40">
<img alt="School Background" class="w-full h-full object-cover" data-alt="A serene architectural view of a modern Islamic educational facility with clean white walls and elegant emerald green accents. The scene is bathed in bright, natural morning sunlight, highlighting a minimalist and premium academic atmosphere. Subtle geometric patterns are integrated into the structure, evoking a sense of traditional Islamic art meeting contemporary design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIsltlO6cvI9eC3_hnoWF6zrZQhdLaJHP6tZcl2F1IJGnsJvI885dqUrTHdAVcfd0fdNT3Mjd5MBLSWQrKI0H0oS0SpeN0KM62Ujn_efFIFUGxewkPO8PH1PiHColraTESUzRIoN-6SBengF8jaYVNVv_v8gTIBDPmaEMnGQrgZNtkYhjB2057BLK4Cr-N9uQSdUTo9QNcLRB3qVGG6rfwH0FcnFMUGYUCVYJ1RgtzQZRAVOmNeyMp2mLnM1-aqD5p9KHxOrWqfAwA"/>
</div>
<div class="relative max-w-7xl mx-auto px-6 w-full py-xl z-10">
<div class="max-w-3xl">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
<span class="material-symbols-outlined text-sm" style='font-variation-settings: "FILL" 1;'>verified</span>
<span class="text-xs font-bold uppercase tracking-widest font-status-badge">Hasil Seleksi Akademik</span>
</div>
<h1 class="font-h1 text-h1 mb-4">Pengumuman Hasil Seleksi Akademik</h1>
<p class="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl">Selamat datang calon peserta didik baru. Hasil seleksi Penerimaan Peserta Didik Baru (PPDB) SMP NU Assalafie Tahun Ajaran 2026/2027 kini telah tersedia.</p>
<div class="flex flex-col sm:flex-row gap-4">
<button class="bg-tertiary text-on-tertiary px-8 py-4 rounded-xl font-label-bold text-lg shadow-lg shadow-black/20 hover:bg-tertiary-container transition-all active:scale-95 flex items-center justify-center gap-3">
                            Cek Hasil Seleksi
                            <span class="material-symbols-outlined">arrow_forward</span>
</button>
<button class="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-label-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                            Unduh Panduan
                            <span class="material-symbols-outlined">download</span>
</button>
</div>
</div>
</div>
<!-- Decorative Islamic Geometric element -->
<div class="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:flex items-center justify-center pointer-events-none opacity-10">
<span class="material-symbols-outlined text-[400px]">filter_vintage</span>
</div>
</section>
<!-- Statistics Section -->
<section class="bg-surface-container-low py-lg relative z-20 -mt-12 mx-6 rounded-3xl border border-outline-variant shadow-sm max-w-7xl lg:mx-auto">
<div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
<div class="px-8 py-6 text-center">
<div class="text-primary font-h1 text-h1 mb-1">1,248</div>
<div class="text-on-surface-variant font-label-bold uppercase tracking-wider text-xs">Total Peserta</div>
</div>
<div class="px-8 py-6 text-center">
<div class="text-primary font-h1 text-h1 mb-1">320</div>
<div class="text-on-surface-variant font-label-bold uppercase tracking-wider text-xs">Siswa Diterima</div>
</div>
<div class="px-8 py-6 text-center">
<div class="text-primary font-h1 text-h1 mb-1">350</div>
<div class="text-on-surface-variant font-label-bold uppercase tracking-wider text-xs">Total Kuota</div>
</div>
</div>
</section>
<!-- Info Section (Bento Grid Style) -->
<section class="max-w-7xl mx-auto px-6 py-xl">
<div class="text-center mb-16">
<h2 class="font-h2 text-h2 text-primary mb-4">Informasi Penting</h2>
<div class="w-16 h-1 bg-tertiary mx-auto"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
<!-- Card 1: Jadwal Daftar Ulang -->
<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow group">
<div>
<div class="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">calendar_today</span>
</div>
<h3 class="font-h3 text-h3 mb-4">Jadwal Daftar Ulang</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-6">Proses administrasi ulang bagi siswa yang dinyatakan Lulus seleksi.</p>
<div class="space-y-3">
<div class="flex items-start">
<span class="diamond-bullet mt-1.5"></span>
<span class="font-body-sm text-on-surface">15 - 20 Juli 2026</span>
</div>
<div class="flex items-start">
<span class="diamond-bullet mt-1.5"></span>
<span class="font-body-sm text-on-surface">08:00 - 14:00 WIB</span>
</div>
</div>
</div>
</div>
<!-- Card 2: Persyaratan -->
<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow group">
<div>
<div class="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">assignment</span>
</div>
<h3 class="font-h3 text-h3 mb-4">Persyaratan</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-6">Dokumen wajib dibawa saat melakukan proses daftar ulang tatap muka.</p>
<ul class="space-y-3">
<li class="flex items-start">
<span class="diamond-bullet mt-1.5"></span>
<span class="font-body-sm text-on-surface">Kartu Ujian Asli</span>
</li>
<li class="flex items-start">
<span class="diamond-bullet mt-1.5"></span>
<span class="font-body-sm text-on-surface">SKL/Ijazah Legalitas</span>
</li>
</ul>
</div>
</div>
<!-- Card 3: Kontak Sekolah -->
<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow group">
<div>
<div class="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">headset_mic</span>
</div>
<h3 class="font-h3 text-h3 mb-4">Kontak Sekolah</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-6">Hubungi kami jika mengalami kendala dalam pengecekan atau pendaftaran.</p>
<div class="space-y-3">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-base">phone</span>
<span class="font-body-sm text-on-surface">(021) 555-0123</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-base">mail</span>
<span class="font-body-sm text-on-surface">info@assalafie.sch.id</span>
</div>
</div>
</div>
</div>
<!-- Card 4: Lokasi -->
<div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
<div class="h-40 overflow-hidden">
<img alt="Location Map" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A clean, professional map representation of an urban school location in Indonesia. The visual style is minimalist and bright, featuring a high-contrast layout with emerald green markers indicating the campus position. The surrounding neighborhood is rendered in soft greys and whites, maintaining a premium corporate aesthetic with clear typography and organized spatial elements." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAe6Z7xKoVNI5xleod5MxjspQElkE_aTiYbu6Npj5TVwB6CAC9ts0md6-Now29GSWw3ddTgyC3UmjPqRwuM2puopAyliT9nTboZQAvwTGpIQ51gQyruVJ3CKxL4KC-7RwMZoIe8HLJoVPYj-zAPtQZEysvjta_bwgEgWicm1y7vOY5UMTyUzzkGlBpuiQ7N1ZoXhRpCERPgfJrqtCtFXUzlfwXKVchVUuRdETyvBIR0ksrsye-A94HkMRSzxVgMkGdgGyf1HhSb2v2"/>
</div>
<div class="p-6">
<h3 class="font-h3 text-h3 mb-2">Lokasi</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4">Kampus Pusat SMP NU Assalafie, Jl. Pendidikan No. 45.</p>
<a class="text-primary font-label-bold flex items-center gap-2 hover:underline" href="#">
                            Petunjuk Arah
                            <span class="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="bg-primary text-on-primary py-xl">
<div class="max-w-7xl mx-auto px-6 text-center">
<h2 class="font-h2 text-h2 mb-6">Sudah Menyiapkan Dokumen Anda?</h2>
<p class="font-body-lg text-body-lg opacity-90 mb-10 max-w-2xl mx-auto">Pastikan Anda memiliki nomor ujian dan identitas diri yang valid sebelum melakukan pengecekan hasil seleksi.</p>
<div class="flex flex-col sm:flex-row justify-center gap-6">
<button class="bg-tertiary text-on-tertiary px-10 py-5 rounded-full font-label-bold text-lg shadow-xl shadow-black/10 hover:bg-tertiary-container transition-all">Mulai Cek Sekarang</button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
<div class="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8 w-full">
<div class="flex flex-col gap-2 items-center md:items-start">
<span class="text-base font-bold text-slate-800 dark:text-slate-200 font-brand-logo">SMP NU Assalafie</span>
<p class="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-typography">© 2024 SMP NU Assalafie. Academic Excellence &amp; Islamic Values.</p>
</div>
<div class="flex gap-8">
<a class="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-typography hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Facebook</a>
<a class="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-typography hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Instagram</a>
<a class="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-typography hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">YouTube</a>
<a class="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-typography hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Maps</a>
</div>
</div>
</footer>
</body></html>


## Halaman Cek Kelulusan
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Cek Kelulusan - SMP NU Assalafie</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&amp;family=Lexend:wght@300;400;500;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error": "#ba1a1a",
                        "outline": "#6e7977",
                        "surface-container-lowest": "#ffffff",
                        "secondary": "#2b6954",
                        "on-surface": "#151c27",
                        "inverse-on-surface": "#ebf1ff",
                        "tertiary": "#7f4025",
                        "on-tertiary": "#ffffff",
                        "surface-dim": "#d3daea",
                        "surface": "#f9f9ff",
                        "secondary-fixed-dim": "#95d3ba",
                        "primary-fixed": "#9cf2e8",
                        "surface-container-high": "#e2e8f8",
                        "inverse-primary": "#80d5cb",
                        "on-secondary": "#ffffff",
                        "background": "#f9f9ff",
                        "on-tertiary-fixed-variant": "#72361b",
                        "on-primary-fixed": "#00201d",
                        "on-surface-variant": "#3e4947",
                        "surface-container-low": "#f0f3ff",
                        "on-background": "#151c27",
                        "on-tertiary-fixed": "#370e00",
                        "secondary-fixed": "#b0f0d6",
                        "outline-variant": "#bdc9c6",
                        "primary-fixed-dim": "#80d5cb",
                        "on-secondary-fixed-variant": "#0b513d",
                        "on-tertiary-container": "#ffe5db",
                        "surface-container-highest": "#dce2f3",
                        "surface-tint": "#006a63",
                        "on-primary-container": "#a3faef",
                        "surface-container": "#e7eefe",
                        "on-primary": "#ffffff",
                        "tertiary-container": "#9c573a",
                        "on-secondary-fixed": "#002117",
                        "tertiary-fixed": "#ffdbce",
                        "secondary-container": "#adedd3",
                        "on-error": "#ffffff",
                        "surface-bright": "#f9f9ff",
                        "tertiary-fixed-dim": "#ffb598",
                        "on-secondary-container": "#306d58",
                        "on-primary-fixed-variant": "#00504a",
                        "primary-container": "#0f766e",
                        "error-container": "#ffdad6",
                        "inverse-surface": "#2a313d",
                        "on-error-container": "#93000a",
                        "surface-variant": "#dce2f3",
                        "primary": "#005c55"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "48px",
                        "xl": "80px",
                        "grid-margin": "24px",
                        "md": "24px",
                        "grid-gutter": "16px",
                        "sm": "12px",
                        "base": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "h2": ["Inter"],
                        "status-badge": ["Inter"],
                        "h3": ["Inter"],
                        "body-sm": ["Lexend"],
                        "h1": ["Inter"],
                        "body-lg": ["Lexend"],
                        "body-md": ["Lexend"],
                        "label-bold": ["Inter"]
                    },
                    "fontSize": {
                        "h2": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "status-badge": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "h3": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "h1": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "600"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .islamic-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.5 12.5L45 15l-12.5 2.5L30 30l-2.5-12.5L15 15l12.5-2.5zM0 30l2.5 12.5L15 45l-12.5 2.5L0 60l-2.5-12.5L-15 45l12.5-2.5z' fill='%230f766e' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        .ambient-glow {
            box-shadow: 0 10px 40px -10px rgba(15, 118, 110, 0.1);
        }
    </style>
</head>
<body class="bg-surface font-body-md text-on-surface antialiased islamic-pattern min-h-screen flex flex-col">
<!-- TopNavBar -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 shadow-sm shadow-teal-900/5 h-20">
<div class="flex justify-between items-center h-full max-w-7xl mx-auto px-6 w-full font-['Inter'] antialiased">
<div class="text-xl font-bold tracking-tight text-teal-700 dark:text-teal-400">
                SMP NU Assalafie
            </div>
<div class="hidden md:flex items-center gap-8">
<a class="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Beranda</a>
<a class="text-teal-700 dark:text-teal-400 font-bold border-b-2 border-teal-700 pb-1" href="#">Cek Kelulusan</a>
<a class="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Informasi</a>
<a class="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Kontak</a>
</div>
<button class="bg-primary-container text-on-primary-container px-5 py-2.5 rounded-lg font-label-bold hover:opacity-90 active:scale-95 transition-all">
                Admin Portal
            </button>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="flex-grow flex items-center justify-center pt-24 pb-xl px-grid-margin">
<div class="w-full max-w-2xl">
<!-- Header Section -->
<div class="text-center mb-xl">
<h1 class="font-h1 text-h1 text-primary mb-md">Cek Status Kelulusan</h1>
<p class="font-body-lg text-body-lg text-outline max-w-lg mx-auto">
                    Masukkan Nomor Induk Siswa Nasional (NISN) atau Nomor Pendaftar Anda untuk melihat hasil kelulusan tahun akademik 2023/2024.
                </p>
</div>
<!-- Focused Search Card -->
<div class="bg-white border border-outline-variant/30 rounded-xl p-xl ambient-glow relative overflow-hidden">
<!-- Geometric Accent -->
<div class="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
<svg class="fill-tertiary" viewbox="0 0 100 100">
<polygon points="50,0 100,50 50,100 0,50"></polygon>
</svg>
</div>
<form class="space-y-md">
<div>
<label class="block font-label-bold text-label-bold text-primary mb-sm" for="search-input">NISN / Nomor Pendaftar</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                                search
                            </span>
<input autofocus="" class="w-full pl-12 pr-4 py-4 bg-surface rounded-lg border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-body-md placeholder:text-outline/50" id="search-input" name="query" placeholder="Contoh: 1234567890" type="text"/>
</div>
</div>
<button class="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-h3 text-h3 flex items-center justify-center gap-base hover:shadow-lg hover:shadow-primary-container/20 active:scale-[0.98] transition-all" type="submit">
                        Cari Data
                        <span class="material-symbols-outlined">arrow_forward</span>
</button>
</form>
<!-- Instructions Section -->
<div class="mt-xl pt-lg border-t border-outline-variant/30">
<h3 class="font-label-bold text-label-bold text-on-surface-variant mb-md uppercase tracking-wider">Petunjuk Pencarian:</h3>
<ul class="space-y-sm">
<li class="flex items-start gap-sm text-body-sm text-outline">
<span class="w-2 h-2 mt-1.5 rotate-45 bg-tertiary-fixed-dim flex-shrink-0"></span>
                            Pastikan format nomor yang dimasukkan sudah benar.
                        </li>
<li class="flex items-start gap-sm text-body-sm text-outline">
<span class="w-2 h-2 mt-1.5 rotate-45 bg-tertiary-fixed-dim flex-shrink-0"></span>
                            Hubungi panitia jika data tidak ditemukan atau terjadi kesalahan sistem.
                        </li>
<li class="flex items-start gap-sm text-body-sm text-outline">
<span class="w-2 h-2 mt-1.5 rotate-45 bg-tertiary-fixed-dim flex-shrink-0"></span>
                            Siapkan bukti pendaftaran untuk validasi data manual jika diperlukan.
                        </li>
</ul>
</div>
</div>
<!-- Secondary CTA Section -->
<div class="mt-lg grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
<div class="bg-secondary-container/30 border border-secondary-container p-md rounded-xl flex items-center gap-md">
<div class="bg-secondary text-on-secondary w-12 h-12 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined">help</span>
</div>
<div>
<h4 class="font-label-bold text-secondary">Bantuan Teknis</h4>
<p class="text-body-sm text-on-secondary-container">Hubungi kami via WhatsApp</p>
</div>
</div>
<div class="bg-tertiary-fixed/30 border border-tertiary-fixed p-md rounded-xl flex items-center gap-md">
<div class="bg-tertiary text-on-tertiary w-12 h-12 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined">download</span>
</div>
<div>
<h4 class="font-label-bold text-tertiary">Panduan SKL</h4>
<p class="text-body-sm text-on-tertiary-fixed-variant">Download file prosedur</p>
</div>
</div>
</div>
</div>
</main>
<!-- Visual Background Element -->
<div class="fixed bottom-20 right-0 pointer-events-none opacity-20 -z-10 overflow-hidden hidden lg:block">
<img alt="" class="w-96 grayscale contrast-125" data-alt="An intricate Islamic geometric pattern etched into a pristine white marble surface, illuminated by soft natural morning light that creates gentle shadows and highlights the precision of the design. The aesthetic is clean, minimalist, and serene, perfectly aligning with the corporate modern and elegant Islamic UI style. The lighting is high-key and airy, emphasizing a professional educational institution's sophisticated and organized atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIsvzYqQBFpqh8s-6TFLJYwo-ta78dtyDGJQvaMgH_GRJ_EQdqQL1JHRRIr27ldFN85qVlebAgWEyWc-NIBw0JQRiCa2s4JFSiPkai7kJxvnkXo6Zzwlr0QF7atzuvDUyjgFoJy8aslBMwzt3CVz9ThgNzJ4SnayPxoxRh-IN0fBUKwZ9uNOAZrYel_7b8H4UnFUlbgyxO34cw12i-yH3sPFTQuFtYRwKBc-HIB4dfWBXEWHQIJx3890NA8IpQghIcM0rMwcWls4Hc"/>
</div>
<!-- Footer -->
<footer class="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
<div class="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8 w-full">
<div class="flex flex-col gap-sm text-center md:text-left">
<span class="text-base font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest font-['Inter']">SMP NU Assalafie</span>
<p class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    © 2026 SMP NU Assalafie. Academic Excellence &amp; Islamic Values.
                </p>
</div>
<div class="flex gap-6">
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Facebook</a>
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Instagram</a>
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">YouTube</a>
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Maps</a>
</div>
</div>
</footer>
</body></html>


## Hasil Seleksi Lulus
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&amp;family=Lexend:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error": "#ba1a1a",
                        "outline": "#6e7977",
                        "surface-container-lowest": "#ffffff",
                        "secondary": "#2b6954",
                        "on-surface": "#151c27",
                        "inverse-on-surface": "#ebf1ff",
                        "tertiary": "#7f4025",
                        "on-tertiary": "#ffffff",
                        "surface-dim": "#d3daea",
                        "surface": "#f9f9ff",
                        "secondary-fixed-dim": "#95d3ba",
                        "primary-fixed": "#9cf2e8",
                        "surface-container-high": "#e2e8f8",
                        "inverse-primary": "#80d5cb",
                        "on-secondary": "#ffffff",
                        "background": "#f9f9ff",
                        "on-tertiary-fixed-variant": "#72361b",
                        "on-primary-fixed": "#00201d",
                        "on-surface-variant": "#3e4947",
                        "surface-container-low": "#f0f3ff",
                        "on-background": "#151c27",
                        "on-tertiary-fixed": "#370e00",
                        "secondary-fixed": "#b0f0d6",
                        "outline-variant": "#bdc9c6",
                        "primary-fixed-dim": "#80d5cb",
                        "on-secondary-fixed-variant": "#0b513d",
                        "on-tertiary-container": "#ffe5db",
                        "surface-container-highest": "#dce2f3",
                        "surface-tint": "#006a63",
                        "on-primary-container": "#a3faef",
                        "surface-container": "#e7eefe",
                        "on-primary": "#ffffff",
                        "tertiary-container": "#9c573a",
                        "on-secondary-fixed": "#002117",
                        "tertiary-fixed": "#ffdbce",
                        "secondary-container": "#adedd3",
                        "on-error": "#ffffff",
                        "surface-bright": "#f9f9ff",
                        "tertiary-fixed-dim": "#ffb598",
                        "on-secondary-container": "#306d58",
                        "on-primary-fixed-variant": "#00504a",
                        "primary-container": "#0f766e",
                        "error-container": "#ffdad6",
                        "inverse-surface": "#2a313d",
                        "on-error-container": "#93000a",
                        "surface-variant": "#dce2f3",
                        "primary": "#005c55"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "48px",
                        "xl": "80px",
                        "grid-margin": "24px",
                        "md": "24px",
                        "grid-gutter": "16px",
                        "sm": "12px",
                        "base": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "h2": ["Inter"],
                        "status-badge": ["Inter"],
                        "h3": ["Inter"],
                        "body-sm": ["Lexend"],
                        "h1": ["Inter"],
                        "body-lg": ["Lexend"],
                        "body-md": ["Lexend"],
                        "label-bold": ["Inter"]
                    },
                    "fontSize": {
                        "h2": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "status-badge": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "h3": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "h1": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "600"}]
                    }
                },
            },
        }
    </script>
<style>.islamic-pattern {
    background-color: transparent;
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDjDhDW1BPvK_nLmxY2SmTA-KSJZC6ll97KL6bcZZCjGC5I2wgT4Jn8cBxSwiEP2q_BSFgpFWXPjqcYCV4NYHr2x60jX-TJysGlZRpYJCg7ZpF1frG8-_cBXs1FiT-8ohmHNPytI0yD_9Ium-IcAEl2GRlnxy_m0OUpCFsoMwQi32bCy6Wj8QnFm4qmY0SODf-8_NP_v2KgcCkkzfOf9mxbHFFgnODE5Y-9ajas2wvSPNqF-rFXRsHu2LxYLSMQeIe28O4wQdmw0EAY);
    opacity: 0.04
    }</style>
</head>
<body class="font-body-md bg-background text-on-background min-h-screen flex flex-col">
<!-- TopNavBar -->
<nav class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm docked full-width top-0 border-b border-slate-100 dark:border-slate-800 shadow-sm shadow-teal-900/5 sticky z-50">
<div class="flex justify-between items-center h-20 max-w-7xl mx-auto px-6 w-full font-['Inter'] antialiased">
<div class="text-xl font-bold tracking-tight text-teal-700 dark:text-teal-400">
                SMP NU Assalafie
            </div>
<div class="hidden md:flex items-center gap-8">
<a class="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Beranda</a>
<a class="text-teal-700 dark:text-teal-400 font-bold border-b-2 border-teal-700 pb-1" href="#">Cek Kelulusan</a>
<a class="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Informasi</a>
<a class="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Kontak</a>
</div>
<button class="bg-primary text-white px-6 py-2 rounded-full font-label-bold hover:bg-primary-container transition-all active:scale-95">
                Admin Portal
            </button>
</div>
</nav>
<!-- Main Content -->
<main class="flex-grow hero-gradient relative">
<div class="absolute inset-0 islamic-pattern pointer-events-none"></div>
<div class="max-w-7xl mx-auto px-6 py-xl relative">
<div class="flex flex-col items-center">
<!-- Status Header -->
<div class="text-center mb-md">
<span class="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-status-badge text-status-badge mb-base">
                        HASIL SELEKSI AKHIR
                    </span>
<h1 class="font-h1 text-h1 text-on-surface mb-xs">Pengumuman Kelulusan</h1>
<p class="font-body-lg text-body-lg text-outline max-w-2xl mx-auto">Tahun Pelajaran 2023/2024</p>
</div>
<!-- Main Result Card (Bento Layout Style) -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter w-full max-w-5xl mt-md">
<!-- Student Info Card -->
<div class="lg:col-span-7 bg-white dark:bg-slate-900 rounded-xl border border-outline-variant shadow-sm p-md flex flex-col justify-between">
<div>
<div class="flex items-center gap-base mb-md">
<div class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="person">person</span>
</div>
<div>
<p class="font-label-bold text-label-bold text-outline uppercase tracking-wider">Informasi Peserta</p>
<h3 class="font-h3 text-h3 text-on-surface">Ahmad</h3>
</div>
</div>
<div class="space-y-sm">
<div class="flex justify-between border-b border-slate-50 pb-xs">
<span class="text-outline font-body-md">Nomor Registrasi</span>
<span class="font-label-bold text-on-surface">REG001</span>
</div>
<div class="flex justify-between border-b border-slate-50 pb-xs">
<span class="text-outline font-body-md">Asal Sekolah</span>
<span class="font-label-bold text-on-surface">SD IT AL-AMANAH</span>
</div>
<div class="flex justify-between border-b border-slate-50 pb-xs">
<span class="text-outline font-body-md">Tanggal Pengumuman</span>
<span class="font-label-bold text-on-surface">15 Juni 2024</span>
</div>
</div>
</div>
<div class="mt-md p-sm bg-surface-container-low rounded-lg border border-dashed border-outline-variant">
<p class="font-body-sm text-body-sm text-on-surface-variant flex gap-base">
<span class="material-symbols-outlined text-primary text-[20px]" data-icon="info">info</span>
                                Data di atas telah diverifikasi oleh Panitia Penerimaan Peserta Didik Baru SMP NU Assalafie.
                            </p>
</div>
</div>
<!-- Status Badge Card -->
<div class="lg:col-span-5 bg-primary-container text-on-primary-container rounded-xl shadow-xl p-md flex flex-col items-center justify-center text-center relative overflow-hidden group">
<!-- Decorative Pattern -->
<div class="absolute top-0 right-0 p-xs opacity-20 transform translate-x-4 -translate-y-4">
<span class="material-symbols-outlined text-[120px]" data-icon="auto_awesome">auto_awesome</span>
</div>
<div class="relative z-10">
<div class="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-md mx-auto border-4 border-white/30">
<span class="material-symbols-outlined text-[48px] text-white" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>
<h2 class="font-h2 text-[48px] font-black tracking-widest mb-xs">LULUS</h2>
<p class="font-body-lg text-white/90">Alhamdulillah, Selamat!</p>
</div>
<div class="mt-md bg-white/10 w-full py-base rounded-lg border border-white/20">
<p class="font-label-bold uppercase tracking-widest text-[12px]">Peringkat: 12 dari 450</p>
</div>
</div>
<!-- Celebration & Action Section -->
<div class="lg:col-span-12 bg-white dark:bg-slate-900 rounded-xl border border-outline-variant shadow-sm p-md text-center mt-base">
<div class="max-w-2xl mx-auto">
<h3 class="font-h3 text-h3 text-primary mb-base">Baarakallahu Fiikum!</h3>
<p class="font-body-md text-body-md text-outline mb-md">
                                Anda dinyatakan memenuhi kriteria kelulusan akademik dan akhlak di SMP NU Assalafie. Langkah selanjutnya adalah mengunduh Surat Keterangan Lulus (SKL) sebagai syarat daftar ulang.
                            </p>
<div class="flex flex-col sm:flex-row gap-base justify-center">
<button class="bg-tertiary text-on-tertiary px-xl py-md rounded-lg font-label-bold flex items-center justify-center gap-base hover:bg-tertiary-container transition-all shadow-lg shadow-tertiary/20">
<span class="material-symbols-outlined" data-icon="download">download</span>
                                    Download Surat Keterangan Lulus (SKL)
                                </button>
<button class="border-2 border-outline text-outline px-xl py-md rounded-lg font-label-bold flex items-center justify-center gap-base hover:bg-surface-container-high transition-all">
<span class="material-symbols-outlined" data-icon="print">print</span>
                                    Cetak Bukti
                                </button>
</div>
<p class="mt-md font-body-sm text-body-sm text-outline">
                                Batas akhir pendaftaran ulang: <span class="font-label-bold text-error">20 Juni 2024</span>
</p>
</div>
</div>
</div>
<!-- Support Image/Banner -->
<div class="mt-xl w-full max-w-5xl rounded-xl overflow-hidden relative h-64 shadow-lg">
<img alt="Islamic Graduation" class="w-full h-full object-cover" data-alt="A cinematic, low-angle shot of a group of diverse middle-school students in professional school uniforms celebrating their graduation under a bright blue sky. The lighting is golden hour sun, casting a warm and hopeful glow on their faces. The background features modern Islamic school architecture with elegant geometric patterns. The overall mood is triumphant, serene, and academic, perfectly aligning with the Corporate Modern and minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIsltlO6cvI9eC3_hnoWF6zrZQhdLaJHP6tZcl2F1IJGnsJvI885dqUrTHdAVcfd0fdNT3Mjd5MBLSWQrKI0H0oS0SpeN0KM62Ujn_efFIFUGxewkPO8PH1PiHColraTESUzRIoN-6SBengF8jaYVNVv_v8gTIBDPmaEMnGQrgZNtkYhjB2057BLK4Cr-N9uQSdUTo9QNcLRB3qVGG6rfwH0FcnFMUGYUCVYJ1RgtzQZRAVOmNeyMp2mLnM1-aqD5p9KHxOrWqfAwA"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-md">
<p class="text-white font-h3 text-h3">Mencetak Generasi Qur'ani yang Unggul di Era Digital.</p>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-auto">
<div class="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8">
<div class="flex flex-col gap-xs text-center md:text-left">
<span class="text-base font-bold text-slate-800 dark:text-slate-200">SMP NU Assalafie</span>
<span class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">© 2024 SMP NU Assalafie. Academic Excellence &amp; Islamic Values.</span>
</div>
<div class="flex gap-8">
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Facebook</a>
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Instagram</a>
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">YouTube</a>
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Maps</a>
</div>
</div>
</footer>
</body></html>

## Hasil Seleksi Tidak Lulus
<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&amp;family=Lexend:wght@300;400;500;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "error": "#ba1a1a",
                    "outline": "#6e7977",
                    "surface-container-lowest": "#ffffff",
                    "secondary": "#2b6954",
                    "on-surface": "#151c27",
                    "inverse-on-surface": "#ebf1ff",
                    "tertiary": "#7f4025",
                    "on-tertiary": "#ffffff",
                    "surface-dim": "#d3daea",
                    "surface": "#f9f9ff",
                    "secondary-fixed-dim": "#95d3ba",
                    "primary-fixed": "#9cf2e8",
                    "surface-container-high": "#e2e8f8",
                    "inverse-primary": "#80d5cb",
                    "on-secondary": "#ffffff",
                    "background": "#f9f9ff",
                    "on-tertiary-fixed-variant": "#72361b",
                    "on-primary-fixed": "#00201d",
                    "on-surface-variant": "#3e4947",
                    "surface-container-low": "#f0f3ff",
                    "on-background": "#151c27",
                    "on-tertiary-fixed": "#370e00",
                    "secondary-fixed": "#b0f0d6",
                    "outline-variant": "#bdc9c6",
                    "primary-fixed-dim": "#80d5cb",
                    "on-secondary-fixed-variant": "#0b513d",
                    "on-tertiary-container": "#ffe5db",
                    "surface-container-highest": "#dce2f3",
                    "surface-tint": "#006a63",
                    "on-primary-container": "#a3faef",
                    "surface-container": "#e7eefe",
                    "on-primary": "#ffffff",
                    "tertiary-container": "#9c573a",
                    "on-secondary-fixed": "#002117",
                    "tertiary-fixed": "#ffdbce",
                    "secondary-container": "#adedd3",
                    "on-error": "#ffffff",
                    "surface-bright": "#f9f9ff",
                    "tertiary-fixed-dim": "#ffb598",
                    "on-secondary-container": "#306d58",
                    "on-primary-fixed-variant": "#00504a",
                    "primary-container": "#0f766e",
                    "error-container": "#ffdad6",
                    "inverse-surface": "#2a313d",
                    "on-error-container": "#93000a",
                    "surface-variant": "#dce2f3",
                    "primary": "#005c55"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "lg": "48px",
                    "xl": "80px",
                    "grid-margin": "24px",
                    "md": "24px",
                    "grid-gutter": "16px",
                    "sm": "12px",
                    "base": "8px",
                    "xs": "4px"
            },
            "fontFamily": {
                    "h2": ["Inter"],
                    "status-badge": ["Inter"],
                    "h3": ["Inter"],
                    "body-sm": ["Lexend"],
                    "h1": ["Inter"],
                    "body-lg": ["Lexend"],
                    "body-md": ["Lexend"],
                    "label-bold": ["Inter"]
            },
            "fontSize": {
                    "h2": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                    "status-badge": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "h3": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                    "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "h1": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "600"}]
            }
          }
        }
      }
    </script>
<style>.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24
    }
.islamic-pattern {
    background-color: transparent;
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDsQdcw46vY1vjvDzaLRmb-jl20a3Va8yk_iOVs5t4cjEpAzL6wTJOLszDYPZ6ow4ihoLBSPAhdCD7Pcz5QmzuXO0V2ZO5VOOV32mOaWlzbsiOy43MJ5Fdp5AC6EY88ijAuOXirnHzf-TWTBLb3QHrWE5qZyJDT9SmlQbX8GW3_WvHBxQp-rTLvSBDAzm_ckkncVR7LjVRqMh3UlUVdmoHujBSJKH6tjRVlFxj618KsDaEZ9dA8cYvgYtayiWVL04o0OsLKViGP7BVJ);
    opacity: 0.03
    }</style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex flex-col relative overflow-x-hidden">
<!-- Islamic Pattern Background Layer -->
<div class="fixed inset-0 islamic-pattern pointer-events-none z-0"></div>
<!-- TopNavBar Component -->
<header class="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 shadow-sm shadow-teal-900/5">
<div class="flex justify-between items-center h-20 max-w-7xl mx-auto px-6 w-full font-['Inter'] antialiased">
<div class="text-xl font-bold tracking-tight text-teal-700 dark:text-teal-400">SMP NU Assalafie</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Beranda</a>
<a class="text-teal-700 dark:text-teal-400 font-bold border-b-2 border-teal-700 pb-1" href="#">Cek Kelulusan</a>
<a class="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Informasi</a>
<a class="text-slate-600 dark:text-slate-400 font-medium hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200" href="#">Kontak</a>
</nav>
<button class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-bold text-sm hover:opacity-90 active:scale-95 transition-all">Admin Portal</button>
</div>
</header>
<main class="flex-grow relative z-10 py-xl px-grid-margin">
<div class="max-w-4xl mx-auto">
<!-- Breadcrumb -->
<nav class="mb-md flex items-center gap-base text-outline">
<span class="material-symbols-outlined text-sm">home</span>
<span class="font-body-sm">Beranda</span>
<span class="material-symbols-outlined text-sm">chevron_right</span>
<span class="font-body-sm text-primary font-semibold">Hasil Pencarian</span>
</nav>
<div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
<!-- Left: Student Info Header Card -->
<div class="md:col-span-12 lg:col-span-12 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-[0_8px_30px_rgb(15,118,110,0.05)] relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 islamic-pattern opacity-10 -mr-8 -mt-8 rotate-12"></div>
<div class="flex flex-col md:flex-row items-center gap-md relative z-10">
<div class="w-24 h-24 rounded-full bg-surface-container-high border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
<img alt="Student Portrait" class="w-full h-full object-cover" data-alt="A dignified and professional studio portrait of a young student against a clean, neutral background. The lighting is soft and even, highlighting a focused and determined expression. The overall style is modern and institutional, using a bright and clean aesthetic to reflect the academic setting of SMP NU Assalafie." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKmOP1GssUyx0CFe7mUSA2C1WkU7BDULEPr2WmjIfPZjMeqdDDM-k0VBuTvA7Zg8fZhloeF8bqC-FKNurHp9nEkO_adfszWkIaEmv96sXATmfToSVIIhsDH_vaxJWmSnx_Au7mIx4cgRf3wlC8FKg-ajj19MD3yQBZ2Poxj6FO7qHoaRExKXkLeE5Y8U-TtATMs2dNMtKqfpvxq_OBsPCoM4t-GA04vVg5lPwF04vJzMeq2iDpyQSvRYrb1FYxstcPmDcLYm6y1UQo"/>
</div>
<div class="text-center md:text-left">
<h1 class="font-h1 text-h2 text-on-surface mb-xs">Budi Santoso</h1>
<div class="flex flex-wrap justify-center md:justify-start gap-sm">
<div class="flex items-center gap-xs px-sm py-xs bg-surface-container rounded-lg border border-outline-variant/20">
<span class="material-symbols-outlined text-[18px] text-primary">id_card</span>
<span class="font-label-bold text-body-sm text-on-surface-variant uppercase">REG002</span>
</div>
<div class="flex items-center gap-xs px-sm py-xs bg-surface-container rounded-lg border border-outline-variant/20">
<span class="material-symbols-outlined text-[18px] text-primary">school</span>
<span class="font-label-bold text-body-sm text-on-surface-variant">MI AS-SALAM</span>
</div>
</div>
</div>
</div>
</div>
<!-- Center: Status Badge Card (The Main Event) -->
<div class="md:col-span-12 flex flex-col items-center justify-center py-lg bg-surface-container-low border border-outline-variant/20 rounded-xl shadow-inner mt-base">
<div class="relative mb-md">
<div class="absolute inset-0 bg-inverse-surface opacity-10 blur-2xl rounded-full"></div>
<div class="w-32 h-32 rounded-full bg-inverse-surface text-white flex items-center justify-center relative z-10 shadow-lg border-4 border-surface-container-low">
<span class="material-symbols-outlined text-6xl" style="font-variation-settings: 'FILL' 1;">error</span>
</div>
</div>
<div class="text-center max-w-xl px-md">
<div class="inline-block px-8 py-3 bg-inverse-surface text-white font-status-badge text-h3 rounded-full mb-md shadow-md tracking-[0.1em]">
                            TIDAK LULUS
                        </div>
<p class="font-h3 text-on-surface mb-sm">Mohon Maaf, Budimu Belum Berhasil</p>
<p class="font-body-lg text-on-surface-variant leading-relaxed">
                            Jangan berkecil hati. Setiap perjalanan pendidikan memiliki jalannya masing-masing. Keputusan ini diambil berdasarkan hasil seleksi akademik yang sangat kompetitif tahun ini.
                        </p>
</div>
</div>
<!-- Bottom: Next Steps & Motivation -->
<div class="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-grid-gutter mt-base">
<div class="bg-white border border-outline-variant/30 rounded-xl p-md">
<div class="flex items-start gap-md">
<div class="w-10 h-10 rounded-lg bg-tertiary-container flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-white">support_agent</span>
</div>
<div>
<h3 class="font-h3 text-body-lg text-on-surface mb-xs">Langkah Selanjutnya</h3>
<p class="font-body-sm text-on-surface-variant mb-md">Anda dapat berkonsultasi dengan panitia PPDB mengenai hasil ini atau menanyakan status cadangan.</p>
<ul class="space-y-sm">
<li class="flex items-center gap-sm text-body-sm text-on-surface font-label-bold">
<span class="w-2 h-2 bg-primary rotate-45 shrink-0"></span>
                                        Hubungi Admin (WhatsApp): +62 812-3456-7890
                                    </li>
<li class="flex items-center gap-sm text-body-sm text-on-surface font-label-bold">
<span class="w-2 h-2 bg-primary rotate-45 shrink-0"></span>
                                        Kunjungi Sekretariat: Jam 08.00 - 14.00
                                    </li>
</ul>
</div>
</div>
</div>
<div class="bg-white border border-outline-variant/30 rounded-xl p-md">
<div class="flex items-start gap-md">
<div class="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-on-secondary-container">auto_stories</span>
</div>
<div>
<h3 class="font-h3 text-body-lg text-on-surface mb-xs">Motivasi Hari Ini</h3>
<p class="font-body-sm text-on-surface-variant italic mb-md">"Kesuksesan bukanlah akhir, kegagalan bukanlah hal yang fatal: keberanian untuk melanjutkanlah yang terpenting."</p>
<p class="font-label-bold text-body-sm text-primary">— Winston Churchill</p>
</div>
</div>
</div>
</div>
<div class="md:col-span-12 flex justify-center mt-md">
<button class="flex items-center gap-sm px-lg py-sm bg-white border border-outline-variant text-on-surface font-label-bold rounded-xl hover:bg-surface-container transition-all">
<span class="material-symbols-outlined">print</span>
                        Cetak Bukti Hasil
                    </button>
</div>
</div>
</div>
</main>
<!-- Footer Component -->
<footer class="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 font-['Inter'] text-xs uppercase tracking-widest mt-xl">
<div class="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8">
<div class="flex flex-col items-center md:items-start gap-2">
<div class="text-base font-bold text-slate-800 dark:text-slate-200">SMP NU Assalafie</div>
<div class="text-slate-500 dark:text-slate-400 text-[10px] text-center md:text-left">© 2024 SMP NU Assalafie. Academic Excellence &amp; Islamic Values.</div>
</div>
<div class="flex gap-8">
<a class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Facebook</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Instagram</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">YouTube</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Maps</a>
</div>
</div>
</footer>
</body></html>


## Manajemen Data SIswa - Admin
<!DOCTYPE html>

<html class="light" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&amp;family=Lexend:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .islamic-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.5 7.5L40 10l-7.5 2.5L30 20l-2.5-7.5L20 10l7.5-2.5L30 0zm0 40l2.5 7.5L40 50l-7.5 2.5L30 60l-2.5-7.5L20 50l7.5-2.5L30 40zM0 30l7.5-2.5L10 20l2.5 7.5L20 30l-7.5 2.5L10 40l-2.5-7.5L0 30zm40 0l7.5-2.5L50 20l2.5 7.5L60 30l-7.5 2.5L50 40l-2.5-7.5L40 30z' fill='%230f766e' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error": "#ba1a1a",
                        "outline": "#6e7977",
                        "surface-container-lowest": "#ffffff",
                        "secondary": "#2b6954",
                        "on-surface": "#151c27",
                        "inverse-on-surface": "#ebf1ff",
                        "tertiary": "#7f4025",
                        "on-tertiary": "#ffffff",
                        "surface-dim": "#d3daea",
                        "surface": "#f9f9ff",
                        "secondary-fixed-dim": "#95d3ba",
                        "primary-fixed": "#9cf2e8",
                        "surface-container-high": "#e2e8f8",
                        "inverse-primary": "#80d5cb",
                        "on-secondary": "#ffffff",
                        "background": "#f9f9ff",
                        "on-tertiary-fixed-variant": "#72361b",
                        "on-primary-fixed": "#00201d",
                        "on-surface-variant": "#3e4947",
                        "surface-container-low": "#f0f3ff",
                        "on-background": "#151c27",
                        "on-tertiary-fixed": "#370e00",
                        "secondary-fixed": "#b0f0d6",
                        "outline-variant": "#bdc9c6",
                        "primary-fixed-dim": "#80d5cb",
                        "on-secondary-fixed-variant": "#0b513d",
                        "on-tertiary-container": "#ffe5db",
                        "surface-container-highest": "#dce2f3",
                        "surface-tint": "#006a63",
                        "on-primary-container": "#a3faef",
                        "surface-container": "#e7eefe",
                        "on-primary": "#ffffff",
                        "tertiary-container": "#9c573a",
                        "on-secondary-fixed": "#002117",
                        "tertiary-fixed": "#ffdbce",
                        "secondary-container": "#adedd3",
                        "on-error": "#ffffff",
                        "surface-bright": "#f9f9ff",
                        "tertiary-fixed-dim": "#ffb598",
                        "on-secondary-container": "#306d58",
                        "on-primary-fixed-variant": "#00504a",
                        "primary-container": "#0f766e",
                        "error-container": "#ffdad6",
                        "inverse-surface": "#2a313d",
                        "on-error-container": "#93000a",
                        "surface-variant": "#dce2f3",
                        "primary": "#005c55"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "48px",
                        "xl": "80px",
                        "grid-margin": "24px",
                        "md": "24px",
                        "grid-gutter": "16px",
                        "sm": "12px",
                        "base": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "h2": ["Inter"],
                        "status-badge": ["Inter"],
                        "h3": ["Inter"],
                        "body-sm": ["Lexend"],
                        "h1": ["Inter"],
                        "body-lg": ["Lexend"],
                        "body-md": ["Lexend"],
                        "label-bold": ["Inter"]
                    },
                    "fontSize": {
                        "h2": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "status-badge": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "h3": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "h1": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "600"}]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background font-body-md text-on-background min-h-screen flex islamic-pattern">
<!-- Sidebar Component (SideNavBar) -->
<aside class="hidden lg:flex flex-col p-4 gap-2 bg-slate-50 border-r border-slate-200 h-screen w-64 fixed left-0 top-0 z-50">
<div class="flex items-center gap-3 px-4 py-6 mb-4">
<div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">school</span>
</div>
<div>
<h2 class="text-lg font-black text-teal-800 uppercase tracking-tight">Admin Panel</h2>
<p class="text-xs text-slate-500 font-medium">SMP NU Assalafie</p>
</div>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-['Inter'] text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 bg-teal-50 text-teal-700 rounded-lg px-4 py-3 border-r-4 border-teal-700 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="group" style="font-variation-settings: 'FILL' 1;">group</span>
<span class="font-['Inter'] text-sm font-medium">Data Siswa</span>
</a>
<a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="fact_check">fact_check</span>
<span class="font-['Inter'] text-sm font-medium">Input Kelulusan</span>
</a>
<a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="description">description</span>
<span class="font-['Inter'] text-sm font-medium">Pengaturan SKL</span>
</a>
<a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
<span class="font-['Inter'] text-sm font-medium">Log Aktivitas</span>
</a>
</nav>
<div class="mt-auto p-4 bg-teal-900 rounded-xl text-white">
<p class="text-xs font-medium opacity-80 mb-2">Sistem Informasi</p>
<button class="w-full bg-white text-teal-900 py-2 rounded-lg font-bold text-sm hover:bg-opacity-90 transition-all">Buka Pengumuman</button>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 lg:ml-64 p-8 min-h-screen">
<!-- Header Section -->
<header class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h1 class="font-h1 text-h1 text-on-surface">Manajemen Data Siswa</h1>
<p class="font-body-md text-outline">Kelola data kelulusan dan administrasi siswa secara terpusat.</p>
</div>
<div class="flex items-center gap-3">
<button class="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-label-bold transition-all shadow-sm">
<span class="material-symbols-outlined">add</span>
                    Tambah Siswa
                </button>
<button class="bg-surface-container-highest hover:bg-surface-container-high text-on-surface px-6 py-2.5 rounded-lg flex items-center gap-2 font-label-bold transition-all border border-outline-variant">
<span class="material-symbols-outlined">cloud_download</span>
                    Export CSV
                </button>
</div>
</header>
<!-- Search & Filter Bar -->
<section class="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 flex flex-col md:flex-row gap-4 items-center">
<div class="relative flex-1 w-full">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md" placeholder="Cari Nama Siswa, NISN, atau No. Registrasi..." type="text"/>
</div>
<div class="flex items-center gap-2 w-full md:w-auto">
<select class="w-full md:w-48 px-4 py-2.5 rounded-lg border border-outline-variant focus:border-primary outline-none font-body-md appearance-none bg-white">
<option>Semua Status</option>
<option>LULUS</option>
<option>TIDAK LULUS</option>
</select>
<button class="p-2.5 bg-surface-container-low border border-outline-variant rounded-lg hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">filter_list</span>
</button>
</div>
</section>
<!-- Data Table Container -->
<section class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-slate-50 border-b border-slate-200">
<th class="px-6 py-4 font-label-bold text-on-surface-variant uppercase tracking-wider text-xs">Student Name</th>
<th class="px-6 py-4 font-label-bold text-on-surface-variant uppercase tracking-wider text-xs">NISN</th>
<th class="px-6 py-4 font-label-bold text-on-surface-variant uppercase tracking-wider text-xs">Reg. Number</th>
<th class="px-6 py-4 font-label-bold text-on-surface-variant uppercase tracking-wider text-xs">Origin School</th>
<th class="px-6 py-4 font-label-bold text-on-surface-variant uppercase tracking-wider text-xs">Status</th>
<th class="px-6 py-4 font-label-bold text-on-surface-variant uppercase tracking-wider text-xs text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100">
<!-- Row 1 -->
<tr class="hover:bg-slate-50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-primary-fixed-dim flex items-center justify-center text-on-primary-fixed font-bold text-xs">AH</div>
<span class="font-label-bold text-on-surface">Ahmad Hidayat</span>
</div>
</td>
<td class="px-6 py-4 text-body-sm text-outline">0082716354</td>
<td class="px-6 py-4 text-body-sm text-outline">REG-2024-001</td>
<td class="px-6 py-4 text-body-sm text-outline">SDN 01 Sumber</td>
<td class="px-6 py-4">
<span class="bg-primary text-white text-status-badge px-3 py-1.5 rounded-full inline-block uppercase tracking-widest">LULUS</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center justify-end gap-2">
<button class="p-2 hover:bg-secondary-container text-secondary rounded-lg transition-colors" title="Download SKL">
<span class="material-symbols-outlined text-[20px]">download</span>
</button>
<button class="p-2 hover:bg-primary-fixed text-primary rounded-lg transition-colors" title="Edit">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-2 hover:bg-error-container text-error rounded-lg transition-colors" title="Hapus">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-slate-50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed font-bold text-xs">SN</div>
<span class="font-label-bold text-on-surface">Siti Nurhaliza</span>
</div>
</td>
<td class="px-6 py-4 text-body-sm text-outline">0083948576</td>
<td class="px-6 py-4 text-body-sm text-outline">REG-2024-002</td>
<td class="px-6 py-4 text-body-sm text-outline">MI Al-Hikmah</td>
<td class="px-6 py-4">
<span class="bg-primary text-white text-status-badge px-3 py-1.5 rounded-full inline-block uppercase tracking-widest">LULUS</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center justify-end gap-2">
<button class="p-2 hover:bg-secondary-container text-secondary rounded-lg transition-colors" title="Download SKL">
<span class="material-symbols-outlined text-[20px]">download</span>
</button>
<button class="p-2 hover:bg-primary-fixed text-primary rounded-lg transition-colors" title="Edit">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-2 hover:bg-error-container text-error rounded-lg transition-colors" title="Hapus">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-slate-50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold text-xs">RR</div>
<span class="font-label-bold text-on-surface">Rizky Ramadhan</span>
</div>
</td>
<td class="px-6 py-4 text-body-sm text-outline">0081122334</td>
<td class="px-6 py-4 text-body-sm text-outline">REG-2024-003</td>
<td class="px-6 py-4 text-body-sm text-outline">SDN 02 Babakan</td>
<td class="px-6 py-4">
<span class="bg-slate-600 text-white text-status-badge px-3 py-1.5 rounded-full inline-block uppercase tracking-widest">TIDAK LULUS</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center justify-end gap-2">
<button class="p-2 text-slate-300 cursor-not-allowed rounded-lg" title="SKL Belum Tersedia">
<span class="material-symbols-outlined text-[20px]">file_download_off</span>
</button>
<button class="p-2 hover:bg-primary-fixed text-primary rounded-lg transition-colors" title="Edit">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-2 hover:bg-error-container text-error rounded-lg transition-colors" title="Hapus">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-slate-50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-bold text-xs">FA</div>
<span class="font-label-bold text-on-surface">Farhan Azmi</span>
</div>
</td>
<td class="px-6 py-4 text-body-sm text-outline">0085566778</td>
<td class="px-6 py-4 text-body-sm text-outline">REG-2024-004</td>
<td class="px-6 py-4 text-body-sm text-outline">SDN 05 Gegesik</td>
<td class="px-6 py-4">
<span class="bg-primary text-white text-status-badge px-3 py-1.5 rounded-full inline-block uppercase tracking-widest">LULUS</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center justify-end gap-2">
<button class="p-2 hover:bg-secondary-container text-secondary rounded-lg transition-colors" title="Download SKL">
<span class="material-symbols-outlined text-[20px]">download</span>
</button>
<button class="p-2 hover:bg-primary-fixed text-primary rounded-lg transition-colors" title="Edit">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-2 hover:bg-error-container text-error rounded-lg transition-colors" title="Hapus">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<footer class="bg-white px-6 py-4 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p class="text-body-sm text-outline">Menampilkan <span class="font-bold text-on-surface">1-4</span> dari <span class="font-bold text-on-surface">128</span> siswa</p>
<div class="flex items-center gap-1">
<button class="p-2 text-outline hover:bg-surface-container-low rounded-lg transition-colors">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg text-sm font-bold shadow-md shadow-teal-900/10">1</button>
<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low rounded-lg text-sm font-medium">2</button>
<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low rounded-lg text-sm font-medium">3</button>
<span class="px-2 text-outline">...</span>
<button class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low rounded-lg text-sm font-medium">32</button>
<button class="p-2 text-outline hover:bg-surface-container-low rounded-lg transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</footer>
</section>
<!-- Stats Overview Widgets (Bento style) -->
<section class="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
<div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
<div class="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">groups</span>
</div>
<div>
<p class="text-xs font-label-bold text-outline uppercase tracking-wider">Total Siswa</p>
<p class="text-2xl font-h2 text-on-surface">1,240</p>
</div>
</div>
<div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
<div class="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
<div>
<p class="text-xs font-label-bold text-outline uppercase tracking-wider">Lulus</p>
<p class="text-2xl font-h2 text-primary">1,195</p>
</div>
</div>
<div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
<div class="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">cancel</span>
</div>
<div>
<p class="text-xs font-label-bold text-outline uppercase tracking-wider">Tidak Lulus</p>
<p class="text-2xl font-h2 text-on-surface">45</p>
</div>
</div>
<div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
<div class="w-12 h-12 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">pending</span>
</div>
<div>
<p class="text-xs font-label-bold text-outline uppercase tracking-wider">Tertunda</p>
<p class="text-2xl font-h2 text-tertiary">0</p>
</div>
</div>
</section>
<!-- Background Pattern Decorations -->
<div class="fixed bottom-0 right-0 p-8 pointer-events-none opacity-5 hidden xl:block">
<svg height="200" viewbox="0 0 100 100" width="200">
<path class="text-teal-900" d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor"></path>
</svg>
</div>
</main>
<!-- Footer Component -->
<footer class="fixed bottom-0 right-0 left-0 lg:left-64 bg-slate-50 border-t border-slate-200 px-8 py-4 z-40 hidden md:block">
<div class="max-w-7xl mx-auto flex justify-between items-center">
<p class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500">© 2024 SMP NU Assalafie. Academic Excellence &amp; Islamic Values.</p>
<div class="flex gap-4">
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors" href="#">Facebook</a>
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors" href="#">Instagram</a>
<a class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors" href="#">YouTube</a>
</div>
</div>
</footer>
</body></html>


## Template SKL 
<!DOCTYPE html>

<html lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&amp;family=Lexend:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "error": "#ba1a1a",
                    "outline": "#6e7977",
                    "surface-container-lowest": "#ffffff",
                    "secondary": "#2b6954",
                    "on-surface": "#151c27",
                    "inverse-on-surface": "#ebf1ff",
                    "tertiary": "#7f4025",
                    "on-tertiary": "#ffffff",
                    "surface-dim": "#d3daea",
                    "surface": "#f9f9ff",
                    "secondary-fixed-dim": "#95d3ba",
                    "primary-fixed": "#9cf2e8",
                    "surface-container-high": "#e2e8f8",
                    "inverse-primary": "#80d5cb",
                    "on-secondary": "#ffffff",
                    "background": "#f9f9ff",
                    "on-tertiary-fixed-variant": "#72361b",
                    "on-primary-fixed": "#00201d",
                    "on-surface-variant": "#3e4947",
                    "surface-container-low": "#f0f3ff",
                    "on-background": "#151c27",
                    "on-tertiary-fixed": "#370e00",
                    "secondary-fixed": "#b0f0d6",
                    "outline-variant": "#bdc9c6",
                    "primary-fixed-dim": "#80d5cb",
                    "on-secondary-fixed-variant": "#0b513d",
                    "on-tertiary-container": "#ffe5db",
                    "surface-container-highest": "#dce2f3",
                    "surface-tint": "#006a63",
                    "on-primary-container": "#a3faef",
                    "surface-container": "#e7eefe",
                    "on-primary": "#ffffff",
                    "tertiary-container": "#9c573a",
                    "on-secondary-fixed": "#002117",
                    "tertiary-fixed": "#ffdbce",
                    "secondary-container": "#adedd3",
                    "on-error": "#ffffff",
                    "surface-bright": "#f9f9ff",
                    "tertiary-fixed-dim": "#ffb598",
                    "on-secondary-container": "#306d58",
                    "on-primary-fixed-variant": "#00504a",
                    "primary-container": "#0f766e",
                    "error-container": "#ffdad6",
                    "inverse-surface": "#2a313d",
                    "on-error-container": "#93000a",
                    "surface-variant": "#dce2f3",
                    "primary": "#005c55"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "lg": "48px",
                    "xl": "80px",
                    "grid-margin": "24px",
                    "md": "24px",
                    "grid-gutter": "16px",
                    "sm": "12px",
                    "base": "8px",
                    "xs": "4px"
            },
            "fontFamily": {
                    "h2": ["Inter"],
                    "status-badge": ["Inter"],
                    "h3": ["Inter"],
                    "body-sm": ["Lexend"],
                    "h1": ["Inter"],
                    "body-lg": ["Lexend"],
                    "body-md": ["Lexend"],
                    "label-bold": ["Inter"]
            },
            "fontSize": {
                    "h2": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                    "status-badge": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
                    "h3": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                    "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "h1": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }
        .islamic-pattern {
            background-color: transparent;
            background-image: radial-gradient(#0f766e 0.5px, transparent 0.5px), radial-gradient(#0f766e 0.5px, #ffffff 0.5px);
            background-size: 20px 20px;
            background-position: 0 0, 10px 10px;
            opacity: 0.03;
        }
    </style>
</head>
<body class="bg-surface font-body-md text-on-surface">
<header class="bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm shadow-teal-900/5 sticky top-0 z-50">
<div class="flex justify-between items-center h-20 max-w-7xl mx-auto px-6 w-full">
<div class="flex items-center gap-4">
<div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container">school</span>
</div>
<span class="text-xl font-bold tracking-tight text-teal-700 font-h2">SMP NU Assalafie</span>
</div>
<nav class="hidden md:flex gap-8">
<a class="text-teal-700 font-bold border-b-2 border-teal-700 pb-1 font-label-bold" href="#">Beranda</a>
<a class="text-slate-600 font-medium hover:text-teal-600 transition-colors duration-200 font-label-bold" href="#">Cek Kelulusan</a>
<a class="text-slate-600 font-medium hover:text-teal-600 transition-colors duration-200 font-label-bold" href="#">Informasi</a>
<a class="text-slate-600 font-medium hover:text-teal-600 transition-colors duration-200 font-label-bold" href="#">Kontak</a>
</nav>
<button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-bold hover:bg-primary-fixed-variant transition-all active:scale-95">
                Admin Portal
            </button>
</div>
</header>
<main class="max-w-7xl mx-auto px-6 py-12 flex gap-8">
<aside class="hidden lg:flex flex-col w-64 h-fit sticky top-28 bg-white border border-slate-200 rounded-xl p-4 gap-2 shadow-sm">
<div class="p-4 border-b border-slate-100 mb-2">
<p class="text-lg font-black text-teal-800 font-h3">Admin Panel</p>
<p class="text-xs text-slate-500 font-body-sm">SMP NU Assalafie</p>
</div>
<a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-lg font-label-bold transition-all hover:translate-x-1" href="#">
<span class="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-lg font-label-bold transition-all hover:translate-x-1" href="#">
<span class="material-symbols-outlined">group</span>
                Data Siswa
            </a>
<a class="flex items-center gap-3 bg-teal-50 text-teal-700 rounded-lg px-4 py-3 border-r-4 border-teal-700 font-label-bold shadow-sm" href="#">
<span class="material-symbols-outlined">fact_check</span>
                Input Kelulusan
            </a>
<a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-lg font-label-bold transition-all hover:translate-x-1" href="#">
<span class="material-symbols-outlined">description</span>
                Pengaturan SKL
            </a>
<a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-lg font-label-bold transition-all hover:translate-x-1" href="#">
<span class="material-symbols-outlined">history</span>
                Log Aktivitas
            </a>
</aside>
<section class="flex-1">
<div class="mb-8 flex justify-between items-end">
<div>
<h1 class="font-h1 text-on-surface mb-2">Pratinjau SKL</h1>
<p class="text-body-lg text-outline">Template Surat Keterangan Lulus Tahun Ajaran 2026/2027</p>
</div>
<div class="flex gap-4">
<button class="flex items-center gap-2 px-6 py-2 border border-outline text-outline rounded-xl font-label-bold hover:bg-surface-container transition-all">
<span class="material-symbols-outlined">edit</span> Edit Konten
                    </button>
<button class="flex items-center gap-2 px-6 py-2 bg-secondary text-on-secondary rounded-xl font-label-bold hover:shadow-lg transition-all">
<span class="material-symbols-outlined">picture_as_pdf</span> Unduh PDF
                    </button>
</div>
</div>
<div class="bg-white shadow-xl border border-slate-200 rounded-sm relative overflow-hidden mx-auto max-w-[800px]" style="min-height: 1130px; padding: 2.5rem;">
<div class="absolute inset-0 islamic-pattern pointer-events-none"></div>
<div class="relative border-b-4 border-double border-teal-900 pb-6 mb-8 flex items-center justify-between">
<div class="w-24 h-24 flex-shrink-0 bg-teal-50 rounded-full flex items-center justify-center p-2">
<img class="w-full h-full object-contain" data-alt="A clean, professional circular school crest or logo for an Islamic middle school. The design features traditional green and gold accents with a stylized open book and a crescent moon, symbolizing academic and spiritual growth. The lighting is soft and corporate, presented against a pristine white background for a high-end educational institution's brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDdjEEneUaYy1C2MODkO0dEGNJ4z95geOYiFjhY2rehEwh6WPFcveBv0vnc1cDd4kSljNEc4zKFnrahhxt0naW7bsNz0wkz-kePahYO50899PPEXbhuRyGooqbD4bqnyf7o-zde3SfmNKMV15UVJI646XgvOjdt2k_lRqFHsLcYTsFN4oBzwqtSuM3lrSOqgCdbH31yCy9uKiSOT_Qj2aHiiwEcokfk17pvSYCCUnYCxgmB6wbaYVwjuV9GguQlv02m0cSwn5tkl4-"/>
</div>
<div class="text-center flex-1 px-4">
<h2 class="text-xl font-bold uppercase tracking-wide text-teal-900 font-h2">Yayasan Pendidikan Islam NU</h2>
<h2 class="text-2xl font-black uppercase text-teal-800 font-h1">SMP NU Assalafie</h2>
<p class="text-sm font-body-sm text-slate-600 italic">Terakreditasi A (Unggul) - NSS: 202021501003 NPSN: 20214300</p>
<p class="text-xs font-body-sm text-slate-500">Jl. Pesantren No. 12, Jawa Tengah, Indonesia | Telp: (021) 555-0123</p>
</div>
<div class="w-24 h-24 opacity-0"></div>
</div>
<div class="text-center mb-10">
<h3 class="font-h2 text-xl underline decoration-2 underline-offset-4 uppercase tracking-widest text-teal-900">Surat Keterangan Lulus</h3>
<p class="font-body-sm text-slate-700 mt-1">Nomor: 421/SKL-SMPNU/VI/2027</p>
</div>
<div class="mb-8 text-body-md text-slate-800 leading-relaxed">
<p class="mb-4">Kepala Sekolah Menengah Pertama (SMP) NU Assalafie dengan ini menerangkan bahwa:</p>
<div class="grid grid-cols-[200px_20px_1fr] gap-y-3 px-8 mb-8">
<div class="font-label-bold">Nama Lengkap</div>
<div>:</div>
<div class="font-body-md uppercase font-bold text-teal-950">Muhammad Fatih Al-Ayubi</div>
<div class="font-label-bold">Tempat, Tanggal Lahir</div>
<div>:</div>
<div class="font-body-md">Semarang, 12 Maret 2012</div>
<div class="font-label-bold">Nama Orang Tua/Wali</div>
<div>:</div>
<div class="font-body-md">Ahmad Shodiq</div>
<div class="font-label-bold">Nomor Induk Siswa (NIS)</div>
<div>:</div>
<div class="font-body-md">26270001</div>
<div class="font-label-bold">NISN</div>
<div>:</div>
<div class="font-body-md">0123456789</div>
<div class="font-label-bold">Sekolah Asal</div>
<div>:</div>
<div class="font-body-md">SMP NU Assalafie</div>
</div>
<p class="mb-6 indent-12">Berdasarkan hasil Rapat Pleno Dewan Guru Kelulusan Siswa Kelas IX Tahun Pelajaran 2026/2027 pada tanggal 10 Juni 2027, nama yang tersebut di atas dinyatakan:</p>
<div class="w-full py-6 flex justify-center">
<div class="px-12 py-4 bg-primary-container text-on-primary-container border-4 border-double border-teal-100 rounded-sm shadow-md">
<span class="text-4xl font-black uppercase tracking-[0.2em] font-h1">Lulus</span>
</div>
</div>
<p class="mt-8 indent-12 italic text-slate-600">Surat keterangan ini bersifat sementara sampai diterbitkannya Ijazah asli dari instansi terkait. Surat ini dapat dipergunakan untuk keperluan pendaftaran ke jenjang pendidikan selanjutnya.</p>
</div>
<div class="mt-16 flex justify-between items-start">
<div class="flex flex-col items-center">
<div class="w-28 h-28 border border-slate-200 p-2 bg-white flex items-center justify-center">
<img class="w-full h-full object-contain" data-alt="A clean, minimalist QR code displayed on a high-quality white paper texture. The QR code is professional and designed for digital verification, with subtle dark teal branding colors in the corner. The lighting is even and bright, mimicking a high-resolution scan of an official document in a light-mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASWX1wYaF7BpXK_OxOeMm793QjJnZRL_fa9Lj3b9HMAITcRuiL1TRhbm69Pcp-y1HXsSYKEoU-fdTnTCE-WLRdds0vECdWuVtK2ehxRjoiB_gnBbOxtfEtqkfFbUWGc6Gtc6eOTVEuKHcWCBelE65OoBuzA0kcb8u6wmb8q2sz3fU_kYYF7uQgQWSgvfxBkwIwHCOrl70RGVdccg51iRpEjU2pSVsMeO-BbrzAQx-IxjWXelbsy7SF5aNK0VOVTgXlHZ_UjZVSdao1"/>
</div>
<p class="text-[10px] mt-2 text-slate-500 font-body-sm">Scan untuk Verifikasi Online</p>
</div>
<div class="text-center w-64">
<p class="font-body-sm text-slate-800">Semarang, 15 Juni 2027</p>
<p class="font-body-sm text-slate-800 mb-20">Kepala Sekolah,</p>
<div class="relative inline-block">
<div class="absolute -top-16 -left-8 opacity-40 pointer-events-none">
<img class="w-40 h-20 object-contain grayscale" data-alt="An elegant and authentic handwritten fountain pen signature in dark blue ink on a clean white surface. The stroke is confident and professional, representing an official validation. The lighting is clear and bright, highlighting the ink texture against a minimalist corporate background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqypLsQyeRYEO-Gsi6uI_xLV19xd-Z6dsXGC_pGGfgKppX-4D0g04sJyug4KADnTLuOWnKw7oZmKnz9tCY651XN1VIVp7KCJsywrzIg1F4j2X4L2RQ76UTUDZDBuLlacpg63zZqa3IIrFYxKMGoD9zUQ4l-bVdvB8I0oV7kvdhCiaVP_ervSboO0jLarPpk1SRdjFWNKS7NX8cKiazyXYgvOz5s10ErYcvpBoDSyU-DZTQ2ZukSsPZhFbh_NgcH_RjFwsu4faE93oT"/>
</div>
<p class="font-bold underline decoration-1 text-teal-950 font-label-bold">H. ABDURRAHMAN, S.Pd.I., M.Pd.</p>
<p class="text-sm font-body-sm text-slate-600">NIP. 19780512 200501 1 002</p>
</div>
</div>
</div>
<div class="absolute bottom-4 left-0 right-0 px-10 flex justify-between">
<div class="h-1 bg-tertiary-container flex-1 mr-4"></div>
<div class="flex gap-1">
<div class="w-2 h-2 bg-primary rotate-45"></div>
<div class="w-2 h-2 bg-tertiary rotate-45"></div>
</div>
</div>
</div>
</section>
</main>
<footer class="bg-slate-50 border-t border-slate-200 mt-20">
<div class="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8">
<div class="flex flex-col gap-2">
<span class="text-base font-bold text-slate-800 font-h3">SMP NU Assalafie</span>
<p class="text-xs uppercase tracking-widest text-slate-500 font-body-sm">© 2024 SMP NU Assalafie. Academic Excellence &amp; Islamic Values.</p>
</div>
<div class="flex gap-6">
<a class="text-slate-500 hover:text-amber-600 transition-colors font-label-bold text-xs uppercase tracking-widest" href="#">Facebook</a>
<a class="text-slate-500 hover:text-amber-600 transition-colors font-label-bold text-xs uppercase tracking-widest" href="#">Instagram</a>
<a class="text-slate-500 hover:text-amber-600 transition-colors font-label-bold text-xs uppercase tracking-widest" href="#">YouTube</a>
<a class="text-slate-500 hover:text-amber-600 transition-colors font-label-bold text-xs uppercase tracking-widest" href="#">Maps</a>
</div>
</div>
</footer>
</body></html>


## Admin Dashboard
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&amp;family=Lexend:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error": "#ba1a1a",
                        "outline": "#6e7977",
                        "surface-container-lowest": "#ffffff",
                        "secondary": "#2b6954",
                        "on-surface": "#151c27",
                        "inverse-on-surface": "#ebf1ff",
                        "tertiary": "#7f4025",
                        "on-tertiary": "#ffffff",
                        "surface-dim": "#d3daea",
                        "surface": "#f9f9ff",
                        "secondary-fixed-dim": "#95d3ba",
                        "primary-fixed": "#9cf2e8",
                        "surface-container-high": "#e2e8f8",
                        "inverse-primary": "#80d5cb",
                        "on-secondary": "#ffffff",
                        "background": "#f9f9ff",
                        "on-tertiary-fixed-variant": "#72361b",
                        "on-primary-fixed": "#00201d",
                        "on-surface-variant": "#3e4947",
                        "surface-container-low": "#f0f3ff",
                        "on-background": "#151c27",
                        "on-tertiary-fixed": "#370e00",
                        "secondary-fixed": "#b0f0d6",
                        "outline-variant": "#bdc9c6",
                        "primary-fixed-dim": "#80d5cb",
                        "on-secondary-fixed-variant": "#0b513d",
                        "on-tertiary-container": "#ffe5db",
                        "surface-container-highest": "#dce2f3",
                        "surface-tint": "#006a63",
                        "on-primary-container": "#a3faef",
                        "surface-container": "#e7eefe",
                        "on-primary": "#ffffff",
                        "tertiary-container": "#9c573a",
                        "on-secondary-fixed": "#002117",
                        "tertiary-fixed": "#ffdbce",
                        "secondary-container": "#adedd3",
                        "on-error": "#ffffff",
                        "surface-bright": "#f9f9ff",
                        "tertiary-fixed-dim": "#ffb598",
                        "on-secondary-container": "#306d58",
                        "on-primary-fixed-variant": "#00504a",
                        "primary-container": "#0f766e",
                        "error-container": "#ffdad6",
                        "inverse-surface": "#2a313d",
                        "on-error-container": "#93000a",
                        "surface-variant": "#dce2f3",
                        "primary": "#005c55"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "48px",
                        "xl": "80px",
                        "grid-margin": "24px",
                        "md": "24px",
                        "grid-gutter": "16px",
                        "sm": "12px",
                        "base": "8px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "h2": ["Inter"],
                        "status-badge": ["Inter"],
                        "h3": ["Inter"],
                        "body-sm": ["Lexend"],
                        "h1": ["Inter"],
                        "body-lg": ["Lexend"],
                        "body-md": ["Lexend"],
                        "label-bold": ["Inter"]
                    },
                    "fontSize": {
                        "h2": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "status-badge": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "h3": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "h1": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "600"}]
                    }
                }
            }
        }
    </script>
<style>
        .islamic-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.5 12.5L45 15l-12.5 2.5L30 30l-2.5-12.5L15 15l12.5-2.5z' fill='%230f766e' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background font-body-md text-on-background min-h-screen flex">
<!-- SideNavBar (Shared Component) -->
<aside class="hidden lg:flex flex-col p-4 gap-2 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 h-screen w-64 fixed left-0 top-0 z-50">
<div class="flex items-center gap-3 px-4 py-6 mb-4">
<div class="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-white shadow-sm overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional school logo for SMP NU Assalafie featuring minimalist Islamic geometric symbols and academic icons. The design is rendered in deep teal and gold colors, reflecting a prestigious and values-driven educational institution. The background is a clean white to maintain a modern light-mode appearance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhCXmIQR-23rUMzZrwy0yFb-UXECZ2NNuFgt9n8pS1cpRfMTsgTCGL4FDA4ze6xMGDWpaZRsXaAFqOgnTB0y-y2_DTUy2sRW9VfQbJ7_THekBqyAIrWRO57mC2B8gNgFCnRvHonpCMDaTLiUwNqXiRhq50hB4EagJX3xneKV-tXoLVB0gEmWPU89DZt6PiIpDZJn0eDKRh2I6Y2FwlcO8s_VyITYyj3PEoya7vgbtDai3Ctq2LL-UlvFwq87JXBZUBSbs8ykQFqn4x"/>
</div>
<div>
<h2 class="text-lg font-black text-teal-800 dark:text-teal-200 leading-tight">Admin Panel</h2>
<p class="text-[10px] font-bold text-teal-700 uppercase tracking-tighter">SMP NU Assalafie</p>
</div>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-3 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 rounded-lg px-4 py-3 border-r-4 border-teal-700 font-['Inter'] text-sm font-medium transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg font-['Inter'] text-sm font-medium transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="group">group</span>
<span>Data Siswa</span>
</a>
<a class="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg font-['Inter'] text-sm font-medium transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="fact_check">fact_check</span>
<span>Input Kelulusan</span>
</a>
<a class="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg font-['Inter'] text-sm font-medium transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="description">description</span>
<span>Pengaturan SKL</span>
</a>
<a class="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg font-['Inter'] text-sm font-medium transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
<span>Log Aktivitas</span>
</a>
</nav>
<div class="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
<button class="w-full bg-primary text-white font-label-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm hover:opacity-90 active:scale-95 transition-all">
<span class="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
                Buka Pengumuman
            </button>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="flex-1 lg:ml-64 relative min-h-screen islamic-pattern">
<!-- Header -->
<header class="h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-md lg:px-xl sticky top-0 z-40 border-b border-surface-container-high">
<div>
<h1 class="font-h2 text-h2 text-on-surface">Overview</h1>
<p class="font-body-sm text-on-surface-variant">Selamat datang kembali, Administrator.</p>
</div>
<div class="flex items-center gap-md">
<button class="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl font-label-bold hover:opacity-90 transition-all">
<span class="material-symbols-outlined" data-icon="upload_file">upload_file</span>
                    Import Data Excel
                </button>
<div class="flex items-center gap-3 border-l border-outline-variant pl-md">
<div class="text-right hidden sm:block">
<p class="font-label-bold text-on-surface">Ustadz Ahmad</p>
<p class="text-xs text-outline">Super Admin</p>
</div>
<div class="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-primary-container p-0.5">
<img class="w-full h-full rounded-full object-cover" data-alt="A portrait-style profile photo of a professional male administrator in his 40s. He is wearing a formal Islamic attire, a clean white shirt and a traditional black peci. The image is set against a soft, blurred background of a modern library, with warm and bright lighting creating a trustful and authoritative atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAugQbT0pzp-ajlgTwEMIcdDhtjIN0yVj2-JXDq2pQ_oeCJypADXsXMu0cW009Rk3jKIGHcOM4ZL-TbTxXjRidblPApXjbM3gHQhk0k4yHo_yGirzZeTezLSCJfQamow2Zkid4NdF0y8H1skahcFdO1cc_DA-NSZkTTWJmHr7Kol2JM50L3ZPDb63QeGNTR_eKwdy0IKLYhYB-_RzfuhZCtvHtGXzxNM24NsFCKPBUSM7YjnzVpeZwEeBgycwT99iv1_8ohqliVb7zT"/>
</div>
</div>
</div>
</header>
<!-- Page Content -->
<div class="p-md lg:p-xl max-w-7xl mx-auto space-y-lg">
<!-- Statistics Grid (Bento Style) -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
<!-- Total Pendaftar -->
<div class="bg-surface-container-lowest p-md rounded-full shadow-sm border border-surface-container-high relative overflow-hidden group hover:shadow-md transition-shadow">
<div class="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div class="flex items-center gap-md relative">
<div class="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl" data-icon="groups">groups</span>
</div>
<div>
<p class="text-outline text-xs uppercase tracking-widest font-bold">Total Pendaftar</p>
<h3 class="text-h1 font-h1 text-on-surface">1,248</h3>
<div class="flex items-center gap-1 text-secondary text-xs font-bold mt-1">
<span class="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
                                12% dari tahun lalu
                            </div>
</div>
</div>
</div>
<!-- Lulus -->
<div class="bg-surface-container-lowest p-md rounded-full shadow-sm border border-surface-container-high relative overflow-hidden group hover:shadow-md transition-shadow">
<div class="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
<div class="flex items-center gap-md relative">
<div class="w-14 h-14 rounded-xl bg-secondary-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-3xl" data-icon="verified">verified</span>
</div>
<div>
<p class="text-outline text-xs uppercase tracking-widest font-bold">Lulus</p>
<h3 class="text-h1 font-h1 text-on-surface">1,120</h3>
<div class="flex items-center gap-1 text-secondary text-xs font-bold mt-1">
<span class="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
                                89.7% Rasio Kelulusan
                            </div>
</div>
</div>
</div>
<!-- Belum Lulus -->
<div class="bg-surface-container-lowest p-md rounded-full shadow-sm border border-surface-container-high relative overflow-hidden group hover:shadow-md transition-shadow">
<div class="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
<div class="flex items-center gap-md relative">
<div class="w-14 h-14 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined text-3xl" data-icon="pending">pending</span>
</div>
<div>
<p class="text-outline text-xs uppercase tracking-widest font-bold">Belum Lulus</p>
<h3 class="text-h1 font-h1 text-on-surface">128</h3>
<div class="flex items-center gap-1 text-tertiary text-xs font-bold mt-1">
<span class="material-symbols-outlined text-sm" data-icon="timer">timer</span>
                                Menunggu Review
                            </div>
</div>
</div>
</div>
</section>
<div class="grid grid-cols-1 xl:grid-cols-3 gap-lg items-start">
<!-- Recent Activity List -->
<section class="xl:col-span-2 space-y-md">
<div class="flex items-center justify-between">
<h2 class="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span class="w-2 h-6 bg-primary rounded-full"></span>
                            Aktivitas Terbaru
                        </h2>
<button class="text-primary font-label-bold text-sm hover:underline">Lihat Semua</button>
</div>
<div class="bg-surface-container-lowest rounded-xl border border-surface-container-high overflow-hidden shadow-sm">
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-surface-container-low border-b border-surface-container-high">
<tr>
<th class="px-md py-4 text-xs font-bold text-outline uppercase tracking-wider">Nama Siswa</th>
<th class="px-md py-4 text-xs font-bold text-outline uppercase tracking-wider">NISN</th>
<th class="px-md py-4 text-xs font-bold text-outline uppercase tracking-wider">Status</th>
<th class="px-md py-4 text-xs font-bold text-outline uppercase tracking-wider">Waktu</th>
<th class="px-md py-4"></th>
</tr>
</thead>
<tbody class="divide-y divide-surface-container-high">
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-md py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">MA</div>
<span class="font-label-bold text-on-surface">Muhammad Al-Fatih</span>
</div>
</td>
<td class="px-md py-4 font-body-sm text-on-surface-variant">0092837411</td>
<td class="px-md py-4">
<span class="px-3 py-1 bg-secondary text-white rounded-full text-status-badge">LULUS</span>
</td>
<td class="px-md py-4 text-xs text-outline">2 menit yang lalu</td>
<td class="px-md py-4 text-right">
<button class="p-2 hover:bg-white rounded-lg text-outline opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-md py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary font-bold text-xs">SN</div>
<span class="font-label-bold text-on-surface">Siti Nurhaliza</span>
</div>
</td>
<td class="px-md py-4 font-body-sm text-on-surface-variant">0092837482</td>
<td class="px-md py-4">
<span class="px-3 py-1 bg-slate-500 text-white rounded-full text-status-badge uppercase">TIDAK LULUS</span>
</td>
<td class="px-md py-4 text-xs text-outline">15 menit yang lalu</td>
<td class="px-md py-4 text-right">
<button class="p-2 hover:bg-white rounded-lg text-outline opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-md py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">AR</div>
<span class="font-label-bold text-on-surface">Ahmad Rizky</span>
</div>
</td>
<td class="px-md py-4 font-body-sm text-on-surface-variant">0092837455</td>
<td class="px-md py-4">
<span class="px-3 py-1 bg-secondary text-white rounded-full text-status-badge">LULUS</span>
</td>
<td class="px-md py-4 text-xs text-outline">1 jam yang lalu</td>
<td class="px-md py-4 text-right">
<button class="p-2 hover:bg-white rounded-lg text-outline opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-surface-container-low transition-colors group">
<td class="px-md py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">ZF</div>
<span class="font-label-bold text-on-surface">Zahra Fatimah</span>
</div>
</td>
<td class="px-md py-4 font-body-sm text-on-surface-variant">0092837402</td>
<td class="px-md py-4">
<span class="px-3 py-1 bg-secondary text-white rounded-full text-status-badge">LULUS</span>
</td>
<td class="px-md py-4 text-xs text-outline">3 jam yang lalu</td>
<td class="px-md py-4 text-right">
<button class="p-2 hover:bg-white rounded-lg text-outline opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<!-- Quick Actions / Notifications Sidebar -->
<aside class="space-y-lg">
<section class="space-y-md">
<h2 class="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span class="w-2 h-6 bg-tertiary rounded-full"></span>
                            Pengumuman
                        </h2>
<div class="bg-surface-container-lowest p-md rounded-xl border border-surface-container-high shadow-sm space-y-4">
<div class="p-3 bg-tertiary-fixed rounded-lg border-l-4 border-tertiary">
<h4 class="font-label-bold text-on-tertiary-fixed-variant mb-1">Update SKL v2.1</h4>
<p class="text-xs text-on-tertiary-fixed-variant/80">Pastikan format nomor surat sudah sesuai dengan regulasi terbaru tahun 2024.</p>
</div>
<div class="p-3 bg-secondary-fixed rounded-lg border-l-4 border-secondary">
<h4 class="font-label-bold text-on-secondary-fixed-variant mb-1">Maintenance Malam Ini</h4>
<p class="text-xs text-on-secondary-fixed-variant/80">Sistem akan dinonaktifkan pada pukul 23:00 WIB untuk pembersihan cache database.</p>
</div>
</div>
</section>
<section class="space-y-md">
<h2 class="font-h3 text-h3 text-on-surface flex items-center gap-2">
<span class="w-2 h-6 bg-secondary rounded-full"></span>
                            Log Harian
                        </h2>
<div class="bg-surface-container-lowest p-md rounded-xl border border-surface-container-high shadow-sm">
<div class="space-y-4">
<div class="flex gap-3">
<div class="relative">
<div class="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
<div class="absolute top-4 left-[3px] w-[2px] h-full bg-surface-container-highest"></div>
</div>
<div>
<p class="text-xs font-bold text-on-surface">Import Selesai</p>
<p class="text-[10px] text-outline italic">Oleh Admin 2 • 09:12 AM</p>
</div>
</div>
<div class="flex gap-3">
<div class="relative">
<div class="w-2 h-2 rounded-full bg-secondary mt-1.5"></div>
<div class="absolute top-4 left-[3px] w-[2px] h-full bg-surface-container-highest"></div>
</div>
<div>
<p class="text-xs font-bold text-on-surface">Perubahan Status Massal</p>
<p class="text-[10px] text-outline italic">Oleh System • 08:45 AM</p>
</div>
</div>
<div class="flex gap-3">
<div class="relative">
<div class="w-2 h-2 rounded-full bg-surface-variant mt-1.5"></div>
</div>
<div>
<p class="text-xs font-bold text-on-surface">Login Berhasil</p>
<p class="text-[10px] text-outline italic">Oleh Ustadz Ahmad • 07:30 AM</p>
</div>
</div>
</div>
</div>
</section>
</aside>
</div>
</div>
<!-- Footer (Shared Component) -->
<footer class="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-xl">
<div class="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8">
<div class="text-center md:text-left">
<h3 class="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">SMP NU Assalafie</h3>
<p class="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">© 2026 SMP NU Assalafie. Academic Excellence &amp; Islamic Values.</p>
</div>
<div class="flex gap-6">
<a class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-['Inter'] text-xs uppercase tracking-widest" href="#">Facebook</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-['Inter'] text-xs uppercase tracking-widest" href="#">Instagram</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-['Inter'] text-xs uppercase tracking-widest" href="#">YouTube</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-['Inter'] text-xs uppercase tracking-widest" href="#">Maps</a>
</div>
</div>
</footer>
</main>
</body></html>
