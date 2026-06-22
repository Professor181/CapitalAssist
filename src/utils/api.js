// =====================================================================
// API abstraction layer
// ---------------------------------------------------------------------
// This single module is the ONLY place that talks to a backend.
// Swap the simulated implementation below with Supabase / Firebase /
// a custom Node API — the UI components consume these async functions
// and never need to change when the backend changes.
//
// Example (Supabase):
//   import { createClient } from '@supabase/supabase-js'
//   const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
//   export async function submitCallback(payload) {
//     const { data, error } = await supabase.from('leads').insert(payload)
//     if (error) throw error
//     return data
//   }
// =====================================================================

const SIMULATED_LATENCY = 1400 // ms — mimics network round trip

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Persists a "Request a Callback" / contact lead.
 * @param {{name:string, phone:string, email?:string, loanType?:string, message?:string}} payload
 * @returns {Promise<{ok:true, id:string}>}
 */
export async function submitCallback(payload) {
  await delay(SIMULATED_LATENCY)

  // TODO: replace with real backend call — see header docs above.
  const id = `CA-${Date.now().toString(36).toUpperCase()}`
  // For dev visibility:
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[submitCallback] simulated lead created:', { id, payload })
  }

  return { ok: true, id }
}
