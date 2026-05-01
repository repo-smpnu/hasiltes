-- ============================================================
-- Supabase Migration: SMP NU Assalafie Hasil Seleksi Akademik
-- ============================================================

-- 1. Table: applicants
CREATE TABLE IF NOT EXISTS public.applicants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  nisn VARCHAR(20) NOT NULL,
  registration_number VARCHAR(100) NOT NULL,
  school_origin VARCHAR(255) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'PENDING' CHECK (status IN ('LULUS', 'TIDAK LULUS', 'PENDING')),
  graduation_letter_number VARCHAR(150),
  gender VARCHAR(10),
  birth_place VARCHAR(100),
  birth_date DATE,
  parent_name VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Unique Constraints
ALTER TABLE public.applicants
  ADD CONSTRAINT unique_nisn UNIQUE (nisn),
  ADD CONSTRAINT unique_registration_number UNIQUE (registration_number);

-- 3. Indexes for fast search
CREATE INDEX IF NOT EXISTS idx_applicants_nisn ON public.applicants(nisn);
CREATE INDEX IF NOT EXISTS idx_applicants_reg_number ON public.applicants(registration_number);
CREATE INDEX IF NOT EXISTS idx_applicants_status ON public.applicants(status);
CREATE INDEX IF NOT EXISTS idx_applicants_letter ON public.applicants(graduation_letter_number);

-- 4. Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER applicants_updated_at
  BEFORE UPDATE ON public.applicants
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 5. Settings table
CREATE TABLE IF NOT EXISTS public.settings (
  key VARCHAR(100) PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Default settings
INSERT INTO public.settings (key, value) VALUES
  ('announcement_open', 'false'),
  ('letter_prefix', '421/SKL-SMPNU/VI/2026'),
  ('announcement_date', '2026-06-12T08:00:00+07:00'),
  ('academic_year', '2025/2026')
ON CONFLICT (key) DO NOTHING;

-- 6. Row Level Security
ALTER TABLE public.applicants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Policy: Public can only read limited fields (for search by NISN/reg_number)
-- Done via API route (not direct RLS policy for simplicity)

-- Policy: Authenticated users (admin) have full access
CREATE POLICY "Admin full access applicants"
  ON public.applicants
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin full access settings"
  ON public.settings
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Service role bypass RLS (for API routes)
CREATE POLICY "Service role bypass"
  ON public.applicants
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy: Anon can read (but we limit fields in API)
CREATE POLICY "Anon read applicants"
  ON public.applicants
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anon read settings"
  ON public.settings
  FOR SELECT
  TO anon
  USING (true);

-- ============================================================
-- Sample Data (hapus sebelum production)
-- ============================================================
-- INSERT INTO public.applicants (full_name, nisn, registration_number, school_origin, status, gender, birth_place, birth_date, parent_name)
-- VALUES
--   ('Muhammad Fatih Al-Ayubi', '0123456789', 'REG-2026-001', 'MI As-Salam', 'LULUS', 'L', 'Cirebon', '2012-03-12', 'Ahmad Shodiq'),
--   ('Siti Aisyah Ramadhani', '0234567890', 'REG-2026-002', 'SDN 01 Sumber', 'LULUS', 'P', 'Cirebon', '2012-07-20', 'Ridwan Fadil'),
--   ('Ahmad Rizky Pratama', '0345678901', 'REG-2026-003', 'MI Al-Hikmah', 'TIDAK LULUS', 'L', 'Indramayu', '2012-05-15', 'Hasan Ali');
