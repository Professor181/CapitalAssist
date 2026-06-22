import { motion } from 'framer-motion'

// Page-level wrapper — fade/slide in on mount; used by every route.
const variants = {
  initial: { opacity: 0, y: 8 },
  enter:   { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
}

export default function Page({ children, className = '' }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
