
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface WaitlistEntry {
  id: string
  email: string
  created_at: string
  notified: boolean
}

export interface BetaApplication {
  id: string
  name: string
  email: string
  company?: string
  role: string
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  user_id?: string
}

export interface User {
  id: string
  email: string
  name?: string
  created_at: string
  is_beta_user: boolean
}
