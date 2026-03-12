import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap, Cpu, Zap, HeartHandshake, CreditCard, Shield
} from 'lucide-react'

const reasons = [
  {
    icon: GraduationCap,
    title: '20+ Years of Expertise',
    description:
      'Our senior dentists bring decades of clinical experience across general, cosmetic, and surgical dentistry.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Technology',
    description:
      'We invest in state-of-the-art equipment — digital X-rays, 3D scanning, and laser dentistry — for precise, comfortable care.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: Zap,
    title: 'Same-Day Emergency Care',
    description:
      "Dental pain can't wait. We keep emergency slots open daily and offer after-hours guidance so you're never left suffering.",
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: HeartHandshake,
    title: 'Patient-First Philosophy',
    description:
      "We take the time to truly listen, explain every treatment option, and ensure you're comfortable before proceeding.",
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: CreditCard,
    title: 'All Insurance Accepted',
    description:
      "We're in-network with major providers and offer flexible payment plans so cost is never a barrier to great dental care.",
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Shield,
    title: 'Safety & Sterilization',
    description:
      'Hospital-grade sterilization protocols and strict infection control keep every patient and our team safe.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
]

const stats = [
  { value: '20+', label: 'Years in Practice' },
  { value: '5,000+', label: 'Smiles Transformed' },
  { value: '98%', label: 'Patient Satisfaction' },
  { value: '12', label: 'Award-Winning Dentists' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image + stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Background gradient blob */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-60" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80&auto=format"
                alt="Modern dental office"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-transparent" />
            </div>

            {/* Stats grid */}
            <div className="absolute -bottom-8 left-6 right-6 bg-white rounded-2xl shadow-card p-5 grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display font-bold text-xl text-primary-700">{s.value}</p>
                  <p className="text-[11px] text-dental-gray leading-tight mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — reasons */}
          <div className="pt-8 lg:pt-0 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">
                <span className="w-6 h-px bg-primary-400" />
                Why Choose PureSmile
              </span>
              <h2 className="section-title text-4xl sm:text-5xl mt-2 mb-4">
                The{' '}
                <span className="gradient-text">Difference</span>{' '}
                You'll Feel
              </h2>
              <p className="text-dental-gray leading-relaxed mb-8">
                We don't just treat teeth — we build lasting relationships with our patients
                based on trust, transparency, and outstanding clinical outcomes.
              </p>
            </motion.div>

            <div className="space-y-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-xl ${r.bg} flex items-center justify-center flex-shrink-0
                                   group-hover:scale-110 transition-transform duration-300`}>
                    <r.icon size={20} className={r.color} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-dental-dark text-sm mb-1">{r.title}</h4>
                    <p className="text-dental-gray text-sm leading-relaxed">{r.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
