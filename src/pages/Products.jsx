import { Link } from 'react-router-dom'
import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import TrustMarquee from '../components/TrustMarquee.jsx'
import { Icon } from '../utils/icons.jsx'
import { PRODUCTS } from '../data/content.js'

// Advisory-style value props common to insurance + wealth products.
const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Curated, not commissioned',
    desc: 'We propose what fits your risk profile — not what pays the most commission.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted insurers & AMCs',
    desc: 'Only established partners — regulated by IRDAI and SEBI.',
  },
  {
    icon: ShieldCheck,
    title: 'Lifecycle support',
    desc: 'Claims assistance, portfolio rebalancing, and regular reviews.',
  },
]

export default function Products() {
  return (
    <Page>
      <PageHero
        eyebrow="Protection & Wealth"
        title="Advisory for what’s beyond the loan"
        subtitle="Insurance that protects the assets you just financed, and disciplined wealth-building that compounds alongside them."
        cta={{ to: '/contact', label: 'Get advice' }}
      />

      {/* ─── Product grid ─────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Products"
            title="Three pillars of protection & wealth"
            subtitle="Each product line is advisory-led: we understand your loan, your business, and your goals before recommending a solution."
            align="center"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.1}>
                <div className="group h-full card overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-nav">
                  {/* gradient header */}
                  <div className="relative bg-navy-gradient p-7 text-white overflow-hidden">
                    <div className="absolute -top-10 -right-8 h-28 w-28 rounded-full bg-gold-500/20 blur-2xl" />
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-gold-300">
                      <Icon name={p.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-sm text-slate2-600 leading-relaxed">{p.blurb}</p>
                    <ul className="mt-5 space-y-2 flex-1">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-sm text-navy-700">
                          <Check className="h-4 w-4 text-gold-500" /> {pt}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-600"
                    >
                      Request a plan <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why advisory ──────────────────────────────────── */}
      <section className="section-pad bg-navy-50/50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Advisory-Led"
            title="The difference between buying a policy and getting it right"
            subtitle="Off-the-shelf products rarely match the realities of running a fleet, a project, or a household. We bridge that gap."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="card p-7 h-full">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-50 text-gold-600">
                    <v.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate2-600 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TrustMarquee light />

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl bg-navy-gradient p-10 md:p-12 text-center text-white">
            <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] opacity-40" />
            <div className="absolute -top-20 -left-10 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold">
                Protect what you finance. Build what comes next.
              </h3>
              <p className="mt-3 text-navy-100 max-w-xl mx-auto">
                Book a no-obligation review of your insurance and investment portfolio today.
              </p>
              <Link to="/contact" className="btn-gold mt-6">Book a review <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
