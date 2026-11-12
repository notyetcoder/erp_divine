import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client, used only inside the /api/contact route.
 * It uses the public anon key. Row Level Security (see supabase/schema.sql)
 * limits that key to inserting contact submissions.
 */
export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Supabase environment variables are not set.");
  }

  return createClient(url, key, { auth: { persistSession: false } });
}
