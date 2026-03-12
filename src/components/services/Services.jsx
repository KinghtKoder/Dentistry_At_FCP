import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Stethoscope, Smile, Sparkles, Layers, Zap, Baby, ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description:
      'Comprehensive exams, cleanings, fillings, and preventive care to keep your smile healthy year-round.',
    color: 'from-primary-500 to-primary-600',
    lightBg: 'bg-primary-50',
    iconColor: 'text-primary-600',
    href: '#contact',
  },
  {
    icon: Layers,
    title: 'Clear Aligners',
    description:
      'Straighten your teeth discreetly with Invisalign® — the clear, comfortable alternative to traditional braces.',
    color: 'from-teal-500 to-teal-600',
    lightBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    href: '#contact',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description:
      'Achieve a radiant, camera-ready smile with our professional in-office whitening treatments.',
    color: 'from-amber-400 to-orange-500',
    lightBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    href: '#contact',
  },
  {
    icon: Smile,
    title: 'Dental Implants',
    description:
      'Permanent tooth replacement that looks, feels, and functions exactly like your natural teeth.',
    color: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    href: '#contact',
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description:
        "Dental emergencies don't wait for business hours. We offer same-day emergency appointments.",
    color: 'from-rose-500 to-red-600',
    lightBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    href: '#contact',
  },
  {
    icon: Baby,
    title: "Children's Dentistry",
    description:
      'Gentle, fun dental care for little smiles. We make every visit positive and anxiety-free.',
    color: 'from-emerald-400 to-green-500',
    lightBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    href: '#contact',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <span className="w-6 h-px bg-primary-400" />
            What We Offer
          </span>
          <h2 className="section-title text-4xl sm:text-5xl mt-2">
            Comprehensive{' '}
            <span className="gradient-text">Dental Services</span>
          </h2>
          <p className="section-subtitle text-base mx-auto mt-4">
            From routine cleanings to full smile makeovers, our team delivers
            exceptional results using the latest techniques and technology.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-dental-gray text-sm mb-4">
            Not sure which treatment is right for you?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Book a Free Consultation
            <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, inView }) {
  const { icon: Icon, title, description, lightBg, iconColor, color } = service

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      className="group card cursor-pointer"
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-2xl ${lightBg} flex items-center justify-center mb-5
                       group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className={iconColor} />
      </div>

      {/* Gradient bar */}
      <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${color} mb-4
                       group-hover:w-16 transition-all duration-300`} />

      <h3 className="font-display font-semibold text-dental-dark text-lg mb-2">{title}</h3>
      <p className="text-dental-gray text-sm leading-relaxed">{description}</p>

      <div className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${iconColor}
                       group-hover:gap-3 transition-all duration-200`}>
        Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  )
}
