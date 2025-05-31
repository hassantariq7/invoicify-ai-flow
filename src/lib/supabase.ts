
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fkhhlgdvergclvkdejkk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZraGhsZ2R2ZXJnY2x2a2RlamtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MDU1MzYsImV4cCI6MjA2NDI4MTUzNn0.Qc_RkX51k7MZeu16xVaenY3ogV9OSfOFxl1lR0kuBto'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return true // We're now using the actual Supabase instance
}

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
