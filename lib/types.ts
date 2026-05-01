export type ApplicantStatus = "LULUS" | "TIDAK LULUS" | "PENDING";

export interface Applicant {
  id: string;
  full_name: string;
  nisn: string;
  registration_number: string;
  school_origin: string;
  status: ApplicantStatus;
  graduation_letter_number: string | null;
  gender: string | null;
  birth_place: string | null;
  birth_date: string | null;
  parent_name: string | null;
  created_at: string;
  updated_at: string;
}

// Public data (tidak expose semua field)
export interface PublicApplicantData {
  full_name: string;
  nisn: string;
  registration_number: string;
  school_origin: string;
  status: ApplicantStatus;
}

export interface SearchResult {
  found: boolean;
  data: PublicApplicantData | null;
}

export interface AdminApplicantData extends Applicant {}

export interface ImportRow {
  full_name: string;
  nisn: string;
  registration_number: string;
  school_origin: string;
  status: ApplicantStatus;
  gender?: string;
  birth_place?: string;
  birth_date?: string;
  parent_name?: string;
}

export interface ImportResult {
  success: number;
  errors: number;
  duplicates: number;
  errorDetails: string[];
}

export interface StatsData {
  total: number;
  lulus: number;
  tidak_lulus: number;
  pending: number;
}

export interface Setting {
  key: string;
  value: string;
  updated_at: string;
}
