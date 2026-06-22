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
    desc: 'When 14+ banks compete for your file, you don’t accept the first quote — you pick the best.',
  },
  {
    icon: Layers,
    title: 'Higher approval odds',
    desc: 'Each lender has a different risk appetite. We route your profile where it’s most likely to sanction.',
  },
  {
    icon: ShieldCheck,
    title: 'Diversified lenders',
    desc: 'Banks, NBFCs, and specialist financiers — no single institution can veto your raise.',
  },
  {
    icon: Handshake,
    title: 'Negotiated terms',
    desc: 'Leverage across thousands of files means we get rate concessions individuals can’t unlock alone.',
  },
]

// Reusable bank card — initial of name on a branded chip.
function BankCard({ name, tag, index }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: (index % 7) * 0.04 }}
      className="group card p-6 flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-nav"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-gradient text-gold-400 font-display font-bold transition-transform group-hover:scale-105">
        {initials}
      </span>
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
        title="14+ banks & NBFCs competing for your business"
        subtitle="Capital Assist is an authorised channel partner — meaning your file reaches desks most individuals can’t even approach directly."
        cta={{ to: '/contact', label: 'Get matched with a lender' }}
      />

      {/* ─── Value proposition ────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why It Matters"
            title="One application, multiple lenders, best outcome"
            subtitle="The difference between an acceptable rate and the best available rate often comes down to which desk sees your file. We send it to many."
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
