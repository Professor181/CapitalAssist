import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Inner-page banner with navy gradient + grid pattern background.
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
}) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient pt-28 md:pt-36 pb-16 md:pb-20">
      <div className="absolute inset-0 bg-grid-pattern [background-size:36px_36px] opacity-60" />
      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-navy-400/20 blur-3xl" />

      <div className="container-x relative">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow !text-gold-300"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-navy-100"
          >
            {subtitle}
          </motion.p>
        )}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-7"
          >
            <Link to={cta.to} className="btn-gold">
              {cta.label} <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
