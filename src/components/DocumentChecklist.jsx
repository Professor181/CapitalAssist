import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleCheck as CheckCircle2, ChevronDown } from 'lucide-react'
import { DOCUMENT_CHECKLISTS, SERVICES } from '../data/content.js'
import { Icon } from '../utils/icons.jsx'

// Dynamic Document Checklist — tabbed for selecting a loan type, and
// the selected loan type renders its checklist. Tabs collapse into
// an accordion on small screens for usability.
const KEYS = Object.keys(DOCUMENT_CHECKLISTS)

export default function DocumentChecklist() {
  const [active, setActive] = useState(KEYS[0])

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      {/* Tabs */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
        {SERVICES
          .filter((s) => DOCUMENT_CHECKLISTS[s.slug])
          .map((s) => {
            const isActive = active === s.slug
            return (
              <button
                key={s.slug}
                onClick={() => setActive(s.slug)}
                className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all whitespace-nowrap lg:whitespace-normal ${
                  isActive
                    ? 'border-navy-700 bg-navy-gradient text-white shadow-nav'
                    : 'border-slate2-200 bg-white text-navy-700 hover:border-navy-300 hover:bg-navy-50'
                }`}
              >
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${isActive ? 'bg-white/10 text-gold-400' : 'bg-navy-50 text-navy-600'}`}>
                  <Icon name={s.icon} size={18} />
                </span>
                <span className="text-sm font-semibold">{s.title}</span>
              </button>
            )
          })}
      </div>

      {/* Checklist panel */}
      <div className="card p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block h-1.5 w-8 rounded-full bg-gold-400" />
              <h4 className="font-display text-lg font-bold text-navy-900">
                {DOCUMENT_CHECKLISTS[active].label}
              </h4>
            </div>
            <p className="text-sm text-slate2-500 mb-5">
              Keep these documents ready to accelerate your sanction:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {DOCUMENT_CHECKLISTS[active].documents.map((doc, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 rounded-lg border border-slate2-100 bg-slate2-50/60 px-3.5 py-3"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-gold-500" size={18} />
                  <span className="text-sm text-navy-800 leading-snug">{doc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-slate2-400">
              Additional documents may be requested based on lender policy / business profile.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
