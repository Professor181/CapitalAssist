import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, HardHat, Truck, Target, Eye, Users, Award, Building2,
} from 'lucide-react'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import TrustMarquee from '../components/TrustMarquee.jsx'
import { COMPANY, BANKS } from '../data/content.js'

// Core values — three columns.
const VALUES = [
  { icon: Award,   title: 'Integrity first',     desc: 'Rates, fees, and conditions disclosed before you sign. No hidden cuts, no surprises.' },
  { icon: Users,   title: 'Client ownership',     desc: 'One advisor who knows your file end-to-end — not a rotating ticket queue.' },
  { icon: Target,  title: 'Outcome-driven',      desc: 'We measure ourselves on sanctions, not on how many forms you filled out.' },
]

// Placeholder client logos grid — swap with real logos before launch.
const CLIENTS = [
  'VRL Logistics', 'Mahindra Group', 'Tata Motors', 'Ashok Leyland',
  'JCB India', 'L&T Construction', 'Shapoorji Pallonji', 'DLF',
]

export default function About() {
  return (
    <Page>
      <PageHero
        eyebrow="About Capital Assist"
        title="Built for India’s builders, fleet owners, and businesses"
        subtitle="We sit between your ambition and the bank — translating paperwork into sanctions, and sanctions into capital."
        cta={{ to: '/contact', label: 'Talk to us' }}
      />

      {/* ─── Story ────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 section-title">Specialists, not generalists</h2>
            <div className="mt-5 space-y-4 text-slate2-600 leading-relaxed">
              <p>
                Capital Assist was founded on a simple observation — that the hardest part of getting a loan
                isn’t qualifying for it. It’s navigating the paperwork, the right desk, and the right lender
                for the asset you’re financing.
              </p>
              <p>
                We chose depth over breadth: a sharp focus on
                <strong className="text-navy-800"> construction equipment</strong> and
                <strong className="text-navy-800"> commercial vehicle finance</strong>, alongside home loans,
                working capital, and protection & wealth products. It’s a focus that lets us speak the
                language of lenders — and structure files they understand.
              </p>
              <p>
                Today, we’re an authorised channel partner of {BANKS.length}+ leading banks and NBFCs, with
                a track record measured in sanctioned crores, not just enquiries.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2">
              <Stat icon={HardHat} value="Construction" label="Equipment finance specialists" />
              <Stat icon={Truck} value="Fleet & CV" label="New + used refinance" />
              <Stat icon={Building2} value={`${BANKS.length}+`} label="Bank & NBFC partners" />
              <Stat icon={Award} value="Advisory" label="End-to-end ownership" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Mission / Vision ──────────────────────────────── */}
      <section className="section-pad bg-navy-50/50">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: 'Our Mission', body: 'To make large-ticket finance frictionless — by being the bridge between businesses and the banks that fund them.' },
            { icon: Eye, title: 'Our Vision', body: 'A lending landscape where every application reaches the desks most likely to sanction it — at the best available rate.' },
          ].map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="card p-8 h-full">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-gradient text-gold-400">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{b.title}</h3>
                <p className="mt-2 text-slate2-600 leading-relaxed">{b.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Three principles, every file we touch"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="card p-7 h-full text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gold-50 text-gold-600">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate2-600 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Clients (placeholder logo grid) ───────────────── */}
      <section className="section-pad bg-navy-gradient text-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Clients"
            title="Trusted by India’s builders"
            subtitle="A representative sample of the businesses we’ve helped finance. Detailed case studies available on request."
            align="center"
            light
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {CLIENTS.map((c, i) => (
              <ScrollReveal key={c} delay={(i % 4) * 0.06}>
                <div className="h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur grid place-items-center px-4 text-center">
                  <span className="font-display text-base font-semibold text-navy-100">{c}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-navy-300">
            Logos shown for illustration. Replace with verified client artwork before launch.
          </p>
        </div>
      </section>

      <TrustMarquee light />

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl bg-gold-gradient p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-navy-900">
                Let’s build something — and finance it right.
              </h3>
              <p className="mt-2 text-navy-800/80 max-w-lg">{COMPANY.shortBio}</p>
            </div>
            <Link to="/contact" className="btn-navy shrink-0">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Page>
  )
}

function Stat({ icon: IconComp, value, label }) {
  return (
    <div className="card p-6">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-50 text-navy-700">
        <IconComp className="h-5 w-5" />
      </span>
      <p className="mt-4 font-display text-2xl font-extrabold text-navy-900">{value}</p>
      <p className="mt-1 text-sm text-slate2-500">{label}</p>
    </div>
  )
}
