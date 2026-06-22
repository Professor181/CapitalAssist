import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingDown, Layers, ShieldCheck, Handshake } from 'lucide-react'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TrustMarquee from '../components/TrustMarquee.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { BANKS } from '../data/content.js'

const VALUES = [
  {
    icon: TrendingDown,
    title: 'Better rates',
    desc: 'When 14+ banks compete for your file, you don\'t have to accept the first offer. You pick the best one.',
  },
  {
    icon: Layers,
    title: 'Higher approval odds',
    desc: 'Every lender has a different risk appetite. We route your profile to the one most likely to say yes.',
  },
  {
    icon: ShieldCheck,
    title: 'Diversified lenders',
    desc: 'Banks, NBFCs, and specialist financiers. No single institution can block your funding.',
  },
  {
    icon: Handshake,
    title: 'Negotiated terms',
    desc: 'Our volume across thousands of files means we can negotiate rate concessions you wouldn\'t get on your own.',
  },
]

// Bank logo placeholder URLs (via ui-avatars.com for clean, modern placeholders).
// Replace these with actual bank logo files once available.
const BANK_LOGOS = {
  'HDFC Bank':              'https://ui-avatars.com/api/?name=HDFC&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'ICICI Bank':             'https://ui-avatars.com/api/?name=ICICI&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.33',
  'Kotak Mahindra Bank':    'https://ui-avatars.com/api/?name=Kotak&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.33',
  'Axis Bank':              'https://ui-avatars.com/api/?name=Axis&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'Yes Bank':               'https://ui-avatars.com/api/?name=YES&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'Federal Bank':           'https://ui-avatars.com/api/?name=FB&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'IDFC First Bank':        'https://ui-avatars.com/api/?name=IDFC&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'Bandhan Bank':           'https://ui-avatars.com/api/?name=BB&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'AU Small Finance Bank':  'https://ui-avatars.com/api/?name=AU&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'Sundaram Finance':       'https://ui-avatars.com/api/?name=SF&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'HDB Financial Services': 'https://ui-avatars.com/api/?name=HDB&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'Bajaj Finance':          'https://ui-avatars.com/api/?name=BF&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'Tata Capital':           'https://ui-avatars.com/api/?name=TC&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.4',
  'Cholamandalam Finance':  'https://ui-avatars.com/api/?name=Chola&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.33',
}

// Reusable bank card with logo image + name.
function BankCard({ name, tag, index }) {
  const logoSrc = BANK_LOGOS[name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0f1b33&color=d9b23e&size=96&bold=true&font-size=0.33`
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: (index % 7) * 0.04 }}
      className="group card p-6 flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-nav"
    >
      {/* Bank logo — replace src with actual logo files when available */}
      <img
        src={logoSrc}
        alt={`${name} logo`}
        className="h-12 w-12 shrink-0 rounded-xl object-contain"
      />
      <div className="min-w-0">
        <p className="font-semibold text-navy-900 truncate">{name}</p>
        <p className="text-xs uppercase tracking-wider text-slate2-400">
          {tag === 'NBFC' ? 'NBFC' : 'Bank'}
        </p>
      </div>
    </motion.div>
  )
}

export default function Partners() {
  const banks = BANKS.filter((b) => b.tag === 'Bank')
  const nbfcs = BANKS.filter((b) => b.tag === 'NBFC')

  return (
    <Page>
      <PageHero
        eyebrow="Our Lender Network"
        title="14+ banks and NBFCs working to get you the best deal"
        subtitle="We're an authorised channel partner, so your file reaches desks that most individuals can't approach directly."
        cta={{ to: '/contact', label: 'Get matched with a lender' }}
      />

      {/* ─── Value proposition ────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why It Matters"
            title="One application, multiple lenders, the best outcome"
            subtitle="The gap between an okay rate and the best rate often comes down to which desk sees your file. We make sure many do."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="card p-7 h-full">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-50 text-gold-600">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate2-600 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Marquee ──────────────────────────────────────── */}
      <TrustMarquee light />

      {/* ─── Bank grid ────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="eyebrow">Associated Banks</p>
              <h2 className="mt-2 section-title">Scheduled commercial banks</h2>
            </div>
            <span className="text-sm text-slate2-500">{banks.length} partner banks</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {banks.map((b, i) => (
              <BankCard key={b.name} {...b} index={i} />
            ))}
          </div>

          <div className="mt-14 flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="eyebrow">Associated NBFCs</p>
              <h2 className="mt-2 section-title">Non-banking financial companies</h2>
            </div>
            <span className="text-sm text-slate2-500">{nbfcs.length} partner NBFCs</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nbfcs.map((b, i) => (
              <BankCard key={b.name} {...b} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-10 md:p-14 text-center text-white">
            <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] opacity-40" />
            <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-3xl md:text-4xl font-extrabold">
                Your file deserves every desk.
              </h3>
              <p className="mt-3 max-w-xl mx-auto text-navy-100">
                Submit once — we route it to the right lenders, and bring you the best sanction on the table.
              </p>
              <Link to="/contact" className="btn-gold mt-7">
                Submit your requirement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
