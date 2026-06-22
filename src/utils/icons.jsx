// Icon registry — lets data files reference lucide icons by string name.
// Centralizing here keeps tree-shaking intact (only used icons are bundled).
import { HardHat, Truck, Car, Chrome as Home, Building2, Banknote, ShieldCheck, HeartPulse, TrendingUp, FileText, ClipboardCheck, Handshake, BadgeCheck } from 'lucide-react'

export const iconMap = {
  HardHat, Truck, Car, Home, Building2, Banknote,
  ShieldCheck, HeartPulse, TrendingUp,
  FileText, ClipboardCheck, Handshake, BadgeCheck,
}

export function Icon({ name, className, size = 24, strokeWidth = 2 }) {
  const Cmp = iconMap[name]
  return Cmp ? <Cmp className={className} size={size} strokeWidth={strokeWidth} /> : null
}
