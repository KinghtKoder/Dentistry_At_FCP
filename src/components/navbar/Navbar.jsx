import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#why-choose-us' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    setActiveLink(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path
                  d="M12 2C8.5 2 5 5 5 9c0 2 .5 3.5 1.5 5L12 22l5.5-8C18.5 12.5 19 11 19 9c0-4-3.5-7-7-7z"
                  fill="currentColor" opacity="0.9"
                />
                <circle cx="12" cy="9" r="2.5" fill="white" />
              </svg>
            </div>
            <div>
              <span className={cn(
                'font-display font-bold text-lg leading-none transition-colors',
                scrolled ? 'text-dental-dark' : 'text-white'
              )}>
                PureSmile
              </span>
              <p className={cn(
                'text-[10px] font-medium tracking-widest uppercase leading-none transition-colors',
                scrolled ? 'text-dental-gray' : 'text-white/70'
              )}>
                Dental Clinic
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  scrolled
                    ? activeLink === link.href.replace('#', '')
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-dental-gray hover:text-dental-dark hover:bg-gray-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+14168681066"
              className={cn(
                'flex items-center gap-1.5 text-sm font-medium transition-colors',
                scrolled ? 'text-dental-gray hover:text-primary-600' : 'text-white/90 hover:text-white'
              )}
            >
              <Phone size={15} />
              (416) 868-1066
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              scrolled ? 'text-dental-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
            )}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-4 right-4 z-40 bg-white rounded-2xl shadow-card border border-dental-border overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-dental-gray hover:text-primary-600 hover:bg-primary-50 transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-dental-border flex flex-col gap-2">
                <a href="tel:+14168681066" className="flex items-center gap-2 px-4 py-2.5 text-sm text-dental-gray">
                  <Phone size={15} /> (416) 868-1066
                </a>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary w-full"
                >
                  Book Appointment
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
