
import { supabase } from './supabase'
import { WaitlistEntry, BetaApplication } from './supabase'

export const addToWaitlist = async (email: string): Promise<{ error: any }> => {
  try {
    const { error } = await supabase
      .from('waitlist')
      .insert({ email, notified: false })
    
    if (error) throw error

    // Send welcome email via Edge Function
    await supabase.functions.invoke('send-waitlist-email', {
      body: { email }
    })

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

    // Send application confirmation email
    await supabase.functions.invoke('send-beta-confirmation', {
      body: { email: applicationData.email, name: applicationData.name }
    })

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
      .single()
    
    return { exists: !!data, error }
  } catch (error) {
    return { exists: false, error }
  }
}
