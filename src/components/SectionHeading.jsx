import { motion } from 'framer-motion'

// Reusable section heading (eyebrow + title + subtitle), centerable.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  light = false,
}) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${centered ? 'justify-center' : ''} ${light ? '!text-gold-300' : ''}`}>
          {eyebrow}
        </p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={`mt-3 section-title ${light ? '!text-white' : ''}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-navy-200' : 'text-slate2-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
