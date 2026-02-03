-- 0. ENABLE UUID EXTENSION
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ADD NEW COLUMNS TO THE PROPERTIES TABLE
ALTER TABLE properties 
ADD COLUMN IF NOT EXISTS bedrooms INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS bathrooms INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS area INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Active',
ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT '{}';

-- 2. ENABLE RLS POLICIES (RESILIENT)
-- We drop first to avoid "already exists" errors
DROP POLICY IF EXISTS "Allow public insert" ON properties;
DROP POLICY IF EXISTS "Allow public update" ON properties;
DROP POLICY IF EXISTS "Allow public delete" ON properties;

CREATE POLICY "Allow public insert" ON properties FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON properties FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON properties FOR DELETE USING (true);

-- 3. STORAGE SETUP (CRITICAL FOR IMAGES)
INSERT INTO storage.buckets (id, name, public) VALUES ('properties', 'properties', true) ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Allow public uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow public select" ON storage.objects;
DROP POLICY IF EXISTS "Allow public delete assets" ON storage.objects;

CREATE POLICY "Allow public uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'properties');
CREATE POLICY "Allow public select" ON storage.objects FOR SELECT USING (bucket_id = 'properties');
CREATE POLICY "Allow public delete assets" ON storage.objects FOR DELETE USING (bucket_id = 'properties');

-- 4. INQUIRIES SYSTEM
CREATE TABLE IF NOT EXISTS inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    property_id TEXT,
    property_title TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'New',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS for Inquiries
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public insert inquiries" ON inquiries;
DROP POLICY IF EXISTS "Allow authenticated select inquiries" ON inquiries;
DROP POLICY IF EXISTS "Allow authenticated delete inquiries" ON inquiries;

CREATE POLICY "Allow public insert inquiries" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated select inquiries" ON inquiries FOR SELECT USING (true);
CREATE POLICY "Allow authenticated delete inquiries" ON inquiries FOR DELETE USING (true);