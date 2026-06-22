import { Link } from 'react-router-dom'
import { Phone, Mail, Linkedin, Building2 } from 'lucide-react'
import { COMPANY, BANKS } from '../data/content.js'

const FOOTER_LINKS = [
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Partners', to: '/partners' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Finance',
    links: [
      { label: 'Construction Equipment', to: '/services' },
      { label: 'Commercial Vehicles', to: '/services' },
      { label: 'Home Loans', to: '/services' },
      { label: 'Working Capital', to: '/services' },
    ],
  },
  {
    heading: 'Advisory',
    links: [
      { label: 'General Insurance', to: '/products' },
      { label: 'Mediclaim', to: '/products' },
      { label: 'Mutual Fund SIP', to: '/products' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 text-navy-100">
      {/* Bank strip */}
      <div className="border-b border-white/5">
        <div className="container-x py-6">
          <p className="text-xs uppercase tracking-[0.18em] text-navy-300 mb-3">Authorised channel partners</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-200">
            {BANKS.map((b) => (
              <span key={b.name} className="font-medium">{b.name}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-gold-400">
              <Building2 className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-extrabold text-white">
              Capital<span className="text-gold-400">Assist</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy-300 max-w-sm">{COMPANY.shortBio}</p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 text-navy-200 hover:text-gold-400">
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 text-navy-200 hover:text-gold-400">
              <Mail className="h-4 w-4" /> {COMPANY.email}
            </a>
            <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-navy-200 hover:text-gold-400">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Link groups */}
        {FOOTER_LINKS.map((group) => (
          <div key={group.heading}>
            <h4 className="text-sm font-semibold text-white">{group.heading}</h4>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((l, i) => (
                <li key={`${group.heading}-${i}`}>
                  <Link to={l.to} className="text-sm text-navy-300 hover:text-gold-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-relaxed text-navy-400 max-w-3xl">
            <strong className="text-navy-200">Disclaimer:</strong> Capital Assist is a finance advisory and
            channel partner. Loans, interest rates, sanctions, and products are at the sole discretion of
            the respective banks / NBFCs / insurers. All figures shown are indicative. Mutual fund
            investments are subject to market risks; read all scheme documents carefully.
          </p>
          <p className="text-xs text-navy-400 whitespace-nowrap">© {year} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
