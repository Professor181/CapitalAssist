import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import CallbackForm from '../components/CallbackForm.jsx'
import { Icon } from '../utils/icons.jsx'
import { PIPELINE } from '../data/content.js'

// Animated step card with scroll-triggered reveal + accent line.
function TimelineStep({ item, index }) {
  const isLast = index === PIPELINE.length - 1

  return (
    <div className="relative pl-12 md:pl-0">
      {/* Desktop: alternating layout */}
      <div
        className={`md:grid md:grid-cols-2 md:gap-12 md:items-center ${
          index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`md:px-2 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}
        >
          <span className="font-display text-5xl md:text-6xl font-extrabold text-slate2-100">
            0{item.step}
          </span>
          <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-navy-900">{item.title}</h3>
          <p className="mt-3 text-slate2-600 leading-relaxed max-w-md md:max-w-none">{item.desc}</p>
        </motion.div>

        {/* Visual side — icon disc */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: 'backOut' }}
          className="relative mt-6 md:mt-0"
        >
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-navy-gradient text-gold-400 shadow-card">
            <Icon name={item.icon} className="h-9 w-9" />
          </div>
        </motion.div>
      </div>

      {/* Vertical connecting line (mobile only) */}
      {!isLast && (
        <span className="md:hidden absolute left-5 top-20 bottom-0 w-px bg-gradient-to-b from-navy-300 to-transparent" />
      )}
    </div>
  )
}

export default function HowItWorks() {
  // Progress bar for the timeline section.
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <Page>
      <PageHero
        eyebrow="The Process"
        title="One pipeline — from application to funding"
        subtitle="Four steps, each with a clear owner and a clear deliverable. You stay informed; we handle the chaos behind the scenes."
        cta={{ to: '/contact', label: 'Start your application' }}
      />

      {/* ─── Pipeline timeline ────────────────────────────── */}
      <section className="section-pad" ref={timelineRef}>
        {/* progress rail (desktop, between columns) */}
        <div className="container-x relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate2-200">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold-400 to-gold-500"
            />
          </div>

          <SectionHeading
            eyebrow="Step-by-step"
            title="Built around clarity"
            subtitle="Every arrow below stands for a real handoff — tracked end-to-end by your dedicated advisor."
            align="center"
          />

          <div className="mt-16 flex flex-col gap-16 md:gap-24">
            {PIPELINE.map((item, i) => (
              <TimelineStep key={item.step} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Guarantees strip ─────────────────────────────── */}
      <section className="bg-navy-gradient text-white">
        <div className="container-x section-pad">
          <SectionHeading
            eyebrow="Our Commitment"
            title="What you can count on, every step of the way"
            align="center"
            light
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: 'Single point of contact', d: 'One advisor from first call to disbursal — no being bounced between teams.' },
              { t: 'Transparent pricing', d: 'Rate sheets and processing fees disclosed before you sign anything.' },
              { t: 'Faster turnaround', d: 'Pre-checked files mean lenders see a complete submission the first time.' },
            ].map((g, i) => (
              <ScrollReveal key={g.t} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <ArrowDown className="h-5 w-5 text-gold-300" />
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{g.t}</h3>
                  <p className="mt-2 text-sm text-navy-200 leading-relaxed">{g.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Apply CTA with form ──────────────────────────── */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Start Here"
              title="It begins with one short form"
              subtitle="No documents needed yet — just tell us what you’re financing and a good number to reach you. We’ll take it from there."
            />
            <div className="mt-6 flex items-center gap-3 text-sm text-slate2-500">
              <ArrowRight className="h-4 w-4 text-gold-500" /> Avg. response within one business hour.
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <CallbackForm />
          </ScrollReveal>
        </div>
      </section>
    </Page>
  )
}
