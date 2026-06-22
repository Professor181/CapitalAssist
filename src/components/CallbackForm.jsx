import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CircleCheck as CheckCircle2, Loader as Loader2, PhoneCall } from 'lucide-react'
import { LOAN_TYPES } from '../data/content.js'
import { submitCallback } from '../utils/api.js'

// Reusable "Request a Callback" lead form.
// Props:
//   - variant: 'card' (default, full card UI) | 'inline' (transparent bg)
//   - showEmail / showMessage / compact: render optional fields
// Submit is abstracted through src/utils/api.js#submitCallback.
export default function CallbackForm({
  variant = 'card',
  showEmail = false,
  showMessage = false,
  compact = false,
  className = '',
}) {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', loanType: LOAN_TYPES[0], message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Basic client-side guards; backend re-checks anyway.
  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!/^\+?[0-9\s-]{8,15}$/.test(form.phone.trim())) return 'Please enter a valid phone number.'
    if (showEmail && form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'Please enter a valid email address.'
    return ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const v = validate()
    if (v) { setError(v); return }

    setStatus('loading')
    try {
      await submitCallback({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        loanType: form.loanType,
        message: form.message.trim(),
        // source tag is useful once multiple lead sources land in the same backend
        source: 'website-callback-form',
      })
      setStatus('success')
      setForm({ name: '', phone: '', email: '', loanType: LOAN_TYPES[0], message: '' })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      setStatus('error')
      setError('Something went wrong. Please try again or call us directly.')
    }
  }

  const isCard = variant === 'card'
  const wrapper = isCard ? `card p-6 md:p-8 ${className}` : `${className}`

  return (
    <div className={wrapper}>
      {!compact && (
        <div className="mb-5">
          <p className="eyebrow"><PhoneCall className="h-3.5 w-3.5" /> Request a Callback</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-navy-900">Let us call you back</h3>
          <p className="mt-1 text-sm text-slate2-500">
            Share your details and we’ll get back within one business hour.
          </p>
        </div>
      )}

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-3 py-8 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.05 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-green-50 text-green-600"
            >
              <CheckCircle2 className="h-9 w-9" />
            </motion.span>
            <h4 className="font-display text-xl font-bold text-navy-900">Thank you!</h4>
            <p className="text-sm text-slate2-500 max-w-xs">
              Our advisory team will reach out shortly to discuss your requirement.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-2 text-sm font-semibold text-gold-600 hover:text-gold-700"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *">
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className="input-field"
                  disabled={status === 'loading'}
                  required
                />
              </Field>
              <Field label="Phone *">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+91 98765 43210"
                  className="input-field"
                  disabled={status === 'loading'}
                  required
                />
              </Field>
            </div>

            {showEmail && (
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@email.com"
                  className="input-field"
                  disabled={status === 'loading'}
                />
              </Field>
            )}

            {!compact && (
              <Field label="Loan Type">
                <select
                  value={form.loanType}
                  onChange={update('loanType')}
                  className="input-field appearance-none bg-white"
                  disabled={status === 'loading'}
                >
                  {LOAN_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
            )}

            {showMessage && (
              <Field label="How can we help?">
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  placeholder="Tell us about your requirement…"
                  className="input-field resize-none"
                  disabled={status === 'loading'}
                />
              </Field>
            )}

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-gold w-full disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Request Callback
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate2-400">
              By submitting you agree to be contacted regarding your enquiry.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-700">{label}</span>
      {children}
    </label>
  )
}
