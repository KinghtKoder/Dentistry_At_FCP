import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'Services',      href: '#services' },
  { label: 'Our Team',      href: '#team' },
  { label: 'Why Us',        href: '#why-choose-us' },
  { label: 'Contact',       href: '#contact' },
]

const services = [
  'General Dentistry',
  'Clear Aligners',
  'Teeth Whitening',
  'Dental Implants',
  'Emergency Care',
  "Children's Dentistry",
]

const socials = [
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter,   href: '#', label: 'Twitter / X' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Youtube,   href: '#', label: 'YouTube' },
]

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-dental-dark text-white">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2C8.5 2 5 5 5 9c0 2 .5 3.5 1.5 5L12 22l5.5-8C18.5 12.5 19 11 19 9c0-4-3.5-7-7-7z" fill="currentColor" opacity="0.9"/>
                  <circle cx="12" cy="9" r="2.5" fill="white"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg leading-none">PureSmile</span>
                <p className="text-[10px] text-white/50 tracking-widest uppercase">Dental Clinic</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Toronto's premier dental clinic. Combining artistry, science, and genuine care to
              help you achieve the smile you deserve.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="text-white/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Contact Us
            </h4>
            <div className="space-y-3.5">
              <div className="flex gap-3">
                <MapPin size={15} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  150 King St West, Suite 200<br />Toronto, ON M5H 1J9
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={15} className="text-teal-400 flex-shrink-0" />
                <a href="tel:+14168681066" className="text-white/70 text-sm hover:text-white transition-colors">
                  (416) 868-1066
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={15} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:hello@puresmile.ca" className="text-white/70 text-sm hover:text-white transition-colors">
                  hello@puresmile.ca
                </a>
              </div>
            </div>

            {/* Hours summary */}
            <div className="mt-5 bg-white/5 rounded-xl p-4 space-y-1.5">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">Hours</p>
              <p className="text-xs text-white/70">Mon–Thu: 8:00 AM – 6:00 PM</p>
              <p className="text-xs text-white/70">Fri: 8:00 AM – 5:00 PM</p>
              <p className="text-xs text-white/70">Sat: 9:00 AM – 3:00 PM</p>
              <p className="text-xs text-white/50">Sun: Emergency only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} PureSmile Dental Clinic. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
