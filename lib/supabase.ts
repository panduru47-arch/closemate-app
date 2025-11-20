import { createClient } from '@supabase/supabase-js'

// Acestea vor fi populate automat de Vercel din Secrets
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
