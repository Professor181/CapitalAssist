import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { COMPANY } from '../data/content.js'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/partners', label: 'Partners' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Toggle glass/solid state once user scrolls past hero threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile drawer on route change.
  useEffect(() => { setOpen(false) }, [location.pathname])

  // Lock body scroll when drawer open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-nav' : 'bg-transparent'}`}>
      <nav className="container-x flex h-16 md:h-20 items-center justify-between">
        {/* Logo + brand name */}
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Capital Assist home">
          {/* Drop your logo file as public/logo.jpeg */}
          <img
            src="/logo.jpeg"
            alt="Capital Assist"
            className="h-9 md:h-10 w-auto object-contain"
          />
          <span className={`font-display text-lg font-extrabold tracking-tight transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}>
            Capital<span className="text-gold-500">Assist</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-gold-600'
                    : scrolled
                    ? 'text-navy-700 hover:text-navy-900'
                    : 'text-white/80 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={COMPANY.phoneHref} className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-navy-700 hover:text-navy-900' : 'text-white/80 hover:text-white'}`}>
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          <Link to="/contact" className="btn-gold">Request Callback</Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden inline-grid h-10 w-10 place-items-center rounded-lg transition-colors ${scrolled ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'}`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate2-100"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? 'bg-gold-50 text-gold-700' : 'text-navy-700 hover:bg-navy-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-gold mt-2 w-full">Request Callback</Link>
              <a href={COMPANY.phoneHref} className="mt-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-navy-600">
                <Phone className="h-4 w-4" /> {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

