// =====================================================================
// API abstraction layer — Firebase Firestore
// ---------------------------------------------------------------------
// This single module is the ONLY place that talks to the backend.
// All UI components consume `submitCallback` and never need to change
// when the data layer changes.
// =====================================================================

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.js'

/**
 * Persists a "Request a Callback" / contact lead to the `leads` collection.
 *
 * @param {{
 *   name: string,
 *   phone: string,
 *   email?: string,
 *   loanType?: string,
 *   message?: string,
 *   source?: string,
 * }} payload
 * @returns {Promise<{ok: true, id: string}>}
 */
export async function submitCallback(payload) {
  const docRef = await addDoc(collection(db, 'leads'), {
    name:      payload.name,
    phone:     payload.phone,
    email:     payload.email || '',
    loanType:  payload.loanType || '',
    message:   payload.message || '',
    source:    payload.source || 'Website',
    timestamp: serverTimestamp(),
  })

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[submitCallback] lead created:', { id: docRef.id, payload })
  }

  return { ok: true, id: docRef.id }
}
