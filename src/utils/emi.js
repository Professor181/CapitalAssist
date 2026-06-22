// =====================================================================
// EMI calculation helper
// Standard reducing-balance EMI formula:
//   EMI = P * r * (1+r)^n / ((1+r)^n - 1)
// where P = principal, r = monthly interest rate, n = months.
// =====================================================================

export function calculateEMI(principal, annualRate, years) {
  const n = Math.round(years * 12)
  const r = annualRate / 12 / 100
  if (principal <= 0 || n <= 0) return { emi: 0, totalInterest: 0, totalPayable: 0, months: n }
  const emi = r === 0
    ? principal / n
    : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  const totalPayable = emi * n
  const totalInterest = totalPayable - principal
  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayable: Math.round(totalPayable),
    months: n,
  }
}

// Indian currency formatting (lakh-friendly).
export function formatINR(value) {
  if (!Number.isFinite(value)) return '₹0'
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

// Compact formatted value for slider labels (e.g. ₹15.0 L, ₹1.2 Cr).
export function formatINRCompact(value) {
  if (value >= 1e7) return `₹${(value / 1e7).toFixed(2)} Cr`
  if (value >= 1e5)  return `₹${(value / 1e5).toFixed(2)} L`
  return formatINR(value)
}
