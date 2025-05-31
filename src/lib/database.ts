
import { supabase } from '@/integrations/supabase/client'
import { WaitlistEntry, BetaApplication } from './supabase'

export const addToWaitlist = async (email: string): Promise<{ error: any }> => {
  try {
    const { error } = await supabase
      .from('waitlist')
      .insert({ email, notified: false })
    
    if (error) throw error

    return { error: null }
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return { error }
  }
}

export const submitBetaApplication = async (applicationData: Omit<BetaApplication, 'id' | 'created_at' | 'status' | 'user_id'>): Promise<{ error: any }> => {
  try {
    const { error } = await supabase
      .from('beta_applications')
      .insert({
        ...applicationData,
        status: 'pending'
      })
    
    if (error) throw error

    return { error: null }
  } catch (error) {
    console.error('Error submitting beta application:', error)
    return { error }
  }
}

export const checkWaitlistStatus = async (email: string): Promise<{ exists: boolean, error: any }> => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .maybeSingle()
    
    return { exists: !!data, error }
  } catch (error) {
    return { exists: false, error }
  }
}
