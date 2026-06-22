import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, ShieldCheck, Clock, Users, TrendingUp, ChevronRight, FileText,
} from 'lucide-react'
import Page from '../components/Page.jsx'
import { Icon } from '../utils/icons.jsx'
import { BANKS, PIPELINE, SERVICES } from '../data/content.js'
import CallbackForm from '../components/CallbackForm.jsx'
import TrustMarquee from '../components/TrustMarquee.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import EMICalculator from '../components/EMICalculator.jsx'

// ─── Quick "How it works" summary (3 condensed steps) ──────────────
const QUICK_STEPS = [
  { icon: FileText,      title: 'Share Your Requirement', desc: 'Tell us what you need in under 2 minutes.' },
  { icon: ShieldCheck,    title: 'We Match Lenders', desc: 'Your file goes to 14+ banks competing for your business.' },
  { icon: TrendingUp,    title: 'Get Funded',       desc: 'Sanction, paperwork, disbursal, all handled start to finish.' },
]

const STATS = [
  { value: '14+', label: 'Partner Banks & NBFCs' },
  { value: '₹500Cr+', label: 'Finance Facilitated' },
  { value: '9+ Yrs',  label: 'Avg. Advisory Experience' },
  { value: '48 hrs',  label: 'Avg. Response Time' },
]

export default function Home() {
  return (
    <Page>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-gradient text-white">
        <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-60" />
        <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-navy-400/30 blur-3xl" />

        <div className="container-x relative pt-32 md:pt-40 pb-20 md:pb-28 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="eyebrow !text-gold-300"
            >
              <ShieldCheck className="h-3.5 w-3.5" /> Bridging clients and India’s top banks
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight"
            >
              Finance Your Next <span className="text-gradient-gold">Big Project.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100"
            >
              From construction equipment to commercial vehicles, working capital, and home loans, we put 14+ leading banks and NBFCs to work for you.
              One application. Better rates. Faster sanctions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/contact" className="btn-gold">
                Request a Callback <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn border border-white/25 bg-white/5 text-white hover:bg-white/10">
                How It Works <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl md:text-3xl font-extrabold text-gold-400">{s.value}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-navy-300">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero side: floating EMI card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative"
          >
            <div className="card p-6 md:p-7 animate-float">
              <CallbackForm variant="card" />
            </div>
          </motion.div>
        </div>

        {/* Trust marquee anchored to bottom of hero */}
        <TrustMarquee />
      </section>

      {/* ─── How It Works (quick summary) ──────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title="Three simple steps from application to disbursal"
            subtitle="We take care of the lender-side paperwork and rate negotiation, so you can focus on closing your deal."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {QUICK_STEPS.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="card p-7 h-full transition-shadow hover:shadow-nav">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-gradient text-gold-400">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-4xl font-extrabold text-slate2-100">{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate2-600 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/how-it-works" className="btn-outline">
              See the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Services preview ──────────────────────────────── */}
      <section className="section-pad bg-navy-50/50">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Finance Engine"
              title="Specialist financing for every stage"
              subtitle="We move large-ticket loans faster because we know exactly which lender fits each asset class."
            />
            <Link to="/services" className="btn-outline shrink-0">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.08}>
                <Link
                  to="/services"
                  className="group card p-7 h-full flex flex-col transition-all hover:-translate-y-1 hover:shadow-nav"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-gradient text-gold-400 transition-transform group-hover:scale-105">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate2-600 leading-relaxed flex-1">{s.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600">
                    Learn more <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EMI Calculator ────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Plan Ahead"
              title="Estimate your EMI in seconds"
              subtitle="Sliders for loan amount, interest rate, and tenure. Outputs update live. These are indicative only; final rates are set at sanction."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">Get a custom quote <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/services" className="btn-outline">Explore services</Link>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate2-500">
              <Users className="h-4 w-4 text-gold-500" /> Backed by {BANKS.length}+ partner institutions
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <EMICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Pipeline strip ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-gradient text-white">
        <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-50" />
        <div className="container-x section-pad relative">
          <SectionHeading
            eyebrow="The Pipeline"
            title="From your application to your bank account"
            subtitle="One streamlined flow designed around clarity."
            align="center"
            light
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {PIPELINE.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient text-navy-900 font-display font-bold">
                    {item.step}
                  </span>
                  <Icon name={item.icon} className="mt-4 h-7 w-7 text-gold-300" />
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/how-it-works" className="btn-gold">
              See the full journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] opacity-40" />
            <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative">
              <Clock className="mx-auto h-8 w-8 text-gold-400" />
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-white">
                Ready to move on your next project?
              </h2>
              <p className="mt-3 max-w-xl mx-auto text-navy-100">
                Get a free consultation today. We'll show you exactly where you stand with our lender network.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn-gold">Request Callback <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/services" className="btn border border-white/25 bg-white/5 text-white hover:bg-white/10">
                  Explore finance options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
