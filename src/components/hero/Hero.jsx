import { motion } from 'framer-motion'
import { ArrowRight, Phone, Shield, Star, Clock } from 'lucide-react'

const trustBadges = [
  { icon: Shield, label: '20+ Years Experience' },
  { icon: Star,   label: '4.9★ Patient Rating' },
  { icon: Clock,  label: 'Same-Day Appointments' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-teal-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2Nmg2di02aC02em0tNiAwaDB2LTZoLTZ2NmgNnptLTYgMGgtNnY2aDZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />

      <div className="relative container-custom w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                Now Welcoming New Patients
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.08] mb-6"
            >
              Your Smile Deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-300">
                World-Class
              </span>{' '}
              Care
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Experience premium dental care in the heart of downtown. From routine
              check-ups to complete smile transformations — we combine advanced
              technology with a gentle, patient-first approach.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Appointment
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href="tel:+14168681066"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                <Phone size={16} />
                (416) 868-1066
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/15"
                >
                  <Icon size={14} className="text-teal-300" />
                  <span className="text-white/80 text-xs font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80&auto=format"
                alt="Smiling patient at dental clinic"
                className="w-full h-[560px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -left-10 top-1/4 bg-white rounded-2xl shadow-card p-4 min-w-[150px]"
            >
              <p className="text-3xl font-bold text-primary-700">5,000+</p>
              <p className="text-xs text-dental-gray font-medium mt-0.5">Happy Patients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -right-6 bottom-1/4 bg-white rounded-2xl shadow-card p-4 min-w-[160px]"
            >
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-dental-dark">4.9 / 5 Rating</p>
              <p className="text-[11px] text-dental-gray">Based on 1,200+ reviews</p>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-teal-400/30" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-primary-400/20" />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" />
        </svg>
      </div>
    </section>
  )
}
