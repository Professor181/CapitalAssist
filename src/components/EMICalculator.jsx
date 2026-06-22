import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, RotateCcw } from 'lucide-react'
import { calculateEMI, formatINR, formatINRCompact } from '../utils/emi.js'

// ─── Range limits ──────────────────────────────────────────────────
const LIMITS = {
  amount: { min: 100000, max: 50000000, step: 50000, default: 2500000 },
  rate:   { min: 7,      max: 22,       step: 0.1,   default: 10.5 },
  years:  { min: 1,      max: 25,       step: 1,     default: 7 },
}

// ─── Slider component (reused 3×) ───────────────────────────────────
function Slider({ label, value, min, max, step, onChange, format }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-navy-700">{label}</label>
        <span className="text-sm font-bold text-navy-900 bg-gold-50 px-2.5 py-1 rounded-md">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 cursor-pointer appearance-none rounded-full outline-none
          bg-gradient-to-r from-gold-400 to-gold-500
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-navy-900 [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab
          [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2
          [&::-moz-range-thumb]:border-navy-900 [&::-moz-range-thumb]:bg-white
          [&::-moz-range-thumb]:cursor-grab"
        style={{ background: `linear-gradient(to right, #d9b23e ${pct}%, #e2e8f0 ${pct}%)` }}
      />
      <div className="mt-1.5 flex justify-between text-xs text-slate2-400">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

// ─── Main calculator ────────────────────────────────────────────────
export default function EMICalculator({ className = '' }) {
  const [amount, setAmount] = useState(LIMITS.amount.default)
  const [rate, setRate]     = useState(LIMITS.rate.default)
  const [years, setYears]   = useState(LIMITS.years.default)

  const { emi, totalInterest, totalPayable, months } = useMemo(
    () => calculateEMI(amount, rate, years),
    [amount, rate, years]
  )

  const reset = () => {
    setAmount(LIMITS.amount.default)
    setRate(LIMITS.rate.default)
    setYears(LIMITS.years.default)
  }

  const principal = amount
  const total = principal + totalInterest || 1
  const principalRatio = principal / total
  const R = 60
  const C = 2 * Math.PI * R
  const principalArc = C * principalRatio

  return (
    <div className={`card p-6 md:p-8 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-gradient text-gold-400">
            <Calculator className="h-5 w-5" />
          </span>
          <h3 className="font-display text-xl font-bold text-navy-900">EMI Calculator</h3>
        </div>
        <button onClick={reset} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate2-500 hover:text-navy-700">
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <Slider
            label="Loan Amount"
            value={amount}
            min={LIMITS.amount.min}
            max={LIMITS.amount.max}
            step={LIMITS.amount.step}
            onChange={setAmount}
            format={formatINRCompact}
          />
          <Slider
            label="Interest Rate (p.a.)"
            value={rate}
            min={LIMITS.rate.min}
            max={LIMITS.rate.max}
            step={LIMITS.rate.step}
            onChange={setRate}
            format={(v) => `${v.toFixed(1)}%`}
          />
          <Slider
            label="Tenure"
            value={years}
            min={LIMITS.years.min}
            max={LIMITS.years.max}
            step={LIMITS.years.step}
            onChange={setYears}
            format={(v) => `${v} yr`}
          />
        </div>

        {/* Outputs */}
        <div className="flex flex-col items-center justify-center">
          {/* Donut */}
          <div className="relative grid place-items-center">
            <svg viewBox="0 0 160 160" className="w-44 h-44 -rotate-90">
              <circle cx="80" cy="80" r={R} fill="none" stroke="#e2e8f0" strokeWidth="14" />
              <motion.circle
                cx="80" cy="80" r={R} fill="none" stroke="#172748" strokeWidth="14"
                strokeLinecap="round"
                animate={{ strokeDasharray: `${principalArc} ${C - principalArc}` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <motion.circle
                cx="80" cy="80" r={R} fill="none" stroke="#d9b23e" strokeWidth="14"
                strokeLinecap="round"
                animate={{ strokeDasharray: `${C - principalArc} ${principalArc}`, strokeDashoffset: -principalArc }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate2-500">Monthly EMI</p>
                <p className="font-display text-2xl font-extrabold text-navy-900">{formatINR(emi)}</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate2-500 mt-1">for {months} months</p>

          {/* Legend + breakdown */}
          <div className="mt-6 w-full space-y-2.5">
            <div className="flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-2 text-navy-700">
                <span className="h-2.5 w-2.5 rounded-full bg-navy-800" /> Principal
              </span>
              <span className="font-semibold text-navy-900">{formatINR(principal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-2 text-gold-700">
                <span className="h-2.5 w-2.5 rounded-full bg-gold-400" /> Total Interest
              </span>
              <span className="font-semibold text-navy-900">{formatINR(totalInterest)}</span>
            </div>
            <div className="h-px bg-slate2-200" />
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-navy-700">Total Payable</span>
              <span className="font-bold text-navy-900 text-base">{formatINR(totalPayable)}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-slate2-400">
        * Indicative only. Final EMI depends on lender sanctions, processing fees, and prevailing rates.
      </p>
    </div>
  )
}
