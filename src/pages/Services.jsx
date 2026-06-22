import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import DocumentChecklist from '../components/DocumentChecklist.jsx'
import EMICalculator from '../components/EMICalculator.jsx'
import { Icon } from '../utils/icons.jsx'
import { SERVICES } from '../data/content.js'

export default function Services() {
  return (
    <Page>
      <PageHero
        eyebrow="Finance Engine"
        title="Specialist financing across asset classes"
        subtitle="Construction equipment, commercial vehicles, real estate, and working capital — each routed to lenders who understand the underlying cashflow."
        cta={{ to: '/contact', label: 'Talk to an advisor' }}
      />

      {/* ─── Services grid ───────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.slug} delay={(i % 3) * 0.08}>
                <div className="group card p-7 h-full flex flex-col transition-all hover:-translate-y-1 hover:shadow-nav">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-gradient text-gold-400 transition-transform group-hover:scale-105">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm font-semibold text-slate2-300">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate2-600 leading-relaxed">{s.blurb}</p>

                  {/* highlights */}
                  <ul className="mt-5 space-y-2 flex-1">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-navy-700">
                        <Check className="h-4 w-4 text-gold-500" /> {p}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-600"
                  >
                    Apply now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Document checklist ──────────────────────────── */}
      <section className="section-pad bg-navy-50/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Documentation"
            title="Know what to bring — for every loan type"
            subtitle="Pick a service to see the checklist. Have these ready and sanctions move faster."
            align="center"
          />
          <div className="mt-12">
            <DocumentChecklist />
          </div>
        </div>
      </section>

      {/* ─── EMI calculator ──────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Numbers First"
              title="See your monthly outflow"
              subtitle="Estimate before you apply — adjust the sliders to see how tenure and rate affect your EMI."
            />
            <Link to="/contact" className="btn-navy mt-6">Get a custom quote <ChevronRight className="h-4 w-4" /></Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <EMICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gold-400 to-gold-500 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-navy-900">
                Not sure which service fits?
              </h3>
              <p className="mt-2 text-navy-800/80">Our advisors will map your requirement to the right lender — no obligation.</p>
            </div>
            <Link to="/contact" className="btn-navy shrink-0">
              Speak to an advisor <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
