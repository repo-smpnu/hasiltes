// Informasi sekolah
export const SCHOOL_INFO = {
  name: "SMP NU Assalafie",
  fullName: "SMP NU Assalafie",
  foundation: "Yayasan Pendidikan Islam NU",
  address: "Jl. Pesantren No. 12, Jawa Barat, Indonesia",
  phone: "(0231) 555-0123",
  email: "info@smpnu-assalafie.sch.id",
  website: "https://smpnu-assalafie.sch.id",
  nss: "202021501003",
  npsn: "20214300",
  accreditation: "Terakreditasi A (Unggul)",
  maps: "https://maps.google.com",
  whatsapp: "6281234567890",
  instagram: "https://instagram.com/smpnu_assalafie",
  facebook: "https://facebook.com/smpnu.assalafie",
  youtube: "https://youtube.com/@smpnu_assalafie",
} as const;

// Kepala Sekolah
export const PRINCIPAL_INFO = {
  name: "H. ABDURRAHMAN, S.Pd.I., M.Pd.",
  nip: "19780512 200501 1 002",
  city: "Cirebon",
} as const;

// Tahun ajaran
export const ACADEMIC_YEAR = "2025/2026";
export const ANNOUNCEMENT_DATE = new Date("2026-06-12T08:00:00+07:00");
export const REGISTRATION_DEADLINE = new Date("2026-06-20T14:00:00+07:00");
export const RE_REGISTRATION_DATE = "15 - 20 Juni 2026";
export const RE_REGISTRATION_HOURS = "08:00 - 14:00 WIB";

// Nomor surat prefix
export const LETTER_NUMBER_PREFIX = "421/SKL-SMPNU/VI/2026";

// Pengaturan pencarian
export const SEARCH_RATE_LIMIT = {
  maxRequests: 10,
  windowMs: 60 * 1000, // 1 menit
} as const;

// Status siswa
export const APPLICANT_STATUS = {
  LULUS: "LULUS",
  TIDAK_LULUS: "TIDAK LULUS",
  PENDING: "PENDING",
} as const;

export type ApplicantStatus = typeof APPLICANT_STATUS[keyof typeof APPLICANT_STATUS];
