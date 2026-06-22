import { motion } from 'framer-motion'

// Framer Motion scroll-reveal wrapper — drop-in for any block.
// `delay` lets you stagger children; accepts arbitrary motion props.
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
  ...rest
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
