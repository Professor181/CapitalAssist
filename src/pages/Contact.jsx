import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, MessageCircle, MapPin } from 'lucide-react'
import Page from '../components/Page.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import CallbackForm from '../components/CallbackForm.jsx'
import { COMPANY } from '../data/content.js'

const CHANNELS = [
  {
    icon: Phone,
    label: 'Phone',
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
    desc: 'Mon–Sat, 10 am to 7 pm IST',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi Capital Assist, I'd like to explore financing options.")}`,
    external: true,
    desc: 'Quick replies during business hours',
  },
  {
    icon: Mail,
    label: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    desc: 'We reply within one business day',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Capital Assist',
    href: COMPANY.linkedin,
    external: true,
    desc: 'Updates + company news',
  },
]

const OFFICES = [
  {
    city: 'Pune Office',
    addr: COMPANY.address,
  },
]

export default function Contact() {
  return (
    <Page>
      <PageHero
        eyebrow="Get in Touch"
        title="We’re one call away"
        subtitle="Call, WhatsApp, or leave your details below — an advisor will respond within one business hour."
      />

      {/* ─── Channel cards ───────────────────────────────── */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="Channels" title="Pick what works for you" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 0.08}>
                <motion.a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noreferrer' : undefined}
                  whileHover={{ y: -4 }}
                  className="card p-7 flex flex-col h-full transition-shadow hover:shadow-nav"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-gradient text-gold-400">
                    <c.icon size={22} />
                  </span>
                  <p className="mt-4 text-xs uppercase tracking-wider text-slate2-400">{c.label}</p>
                  <p className="mt-1 font-display text-lg font-bold text-navy-900 break-words">{c.value}</p>
                  <p className="mt-1 text-sm text-slate2-500">{c.desc}</p>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Request callback form ─────────────────────────── */}
      <section className="pb-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          {/* left: copy + offices */}
          <ScrollReveal>
            <SectionHeading
              eyebrow="Request a Call Back"
              title="Tell us how we can help"
              subtitle="Share your contact details and a short note about what you’re financing. Our advisor will come back with the next best step."
            />

            <div className="mt-8 space-y-5">
              {OFFICES.map((o) => (
                <div key={o.city} className="flex gap-3">
                  <MapPin className="h-5 w-5 text-gold-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-900">{o.city}</p>
                    <p className="text-sm text-slate2-600">{o.addr}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="mt-6 overflow-hidden rounded-xl border border-slate2-200 shadow-card">
              <iframe
                title="Capital Assist Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.8367!3d18.5089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzMyLjAiTiA3M8KwNTAnMTIuMSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/Office+No+3+Third+floor+Maher+Building+opp+Modi+Baug+Modibaug+Model+Colony+Shivajinagar+Pune+Maharashtra+411005"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
            >
              <MapPin className="h-4 w-4" /> View on Google Maps
            </a>
          </ScrollReveal>

          {/* right: form (full version) */}
          <ScrollReveal delay={0.1}>
            <CallbackForm showEmail showMessage />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Final CTA back to services ──────────────────── */}
      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-2xl border border-slate2-200 bg-navy-50/40 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-800 font-medium">
              Not sure which financing fits? Browse our services first.
            </p>
            <Link to="/services" className="btn-navy shrink-0">Explore services</Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
