import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Amanda Chen',
    title: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format',
    rating: 5,
    text: "I've been coming to PureSmile for 3 years and I can honestly say it's the best dental experience I've ever had. Dr. Mitchell is incredibly skilled and the team makes you feel genuinely welcome. No anxiety, no judgment — just excellent care.",
    treatment: 'Invisalign & Whitening',
  },
  {
    name: 'Marcus Johnson',
    title: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format',
    rating: 5,
    text: "Had a dental emergency on a Sunday and they answered immediately and got me in first thing Monday. The team was incredibly professional and resolved the issue quickly. This level of care is rare to find — I won't go anywhere else.",
    treatment: 'Emergency Care',
  },
  {
    name: 'Priya Sharma',
    title: 'Pediatrician',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&q=80&auto=format',
    rating: 5,
    text: "As a doctor myself, I'm quite particular about healthcare providers. PureSmile exceeds every expectation — cutting-edge technology, meticulous sterilization, and a team that clearly loves what they do. My whole family comes here now.",
    treatment: 'General Dentistry',
  },
  {
    name: 'Thomas Walker',
    title: 'Restaurant Owner',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format',
    rating: 5,
    text: "Dr. Vasquez changed my life with dental implants. After years of being self-conscious about my smile, I finally have teeth I'm proud to show off. The entire process was smoother than I imagined and the results are absolutely stunning.",
    treatment: 'Dental Implants',
  },
  {
    name: 'Lisa Fontaine',
    title: 'Teacher',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80&auto=format',
    rating: 5,
    text: 'Bringing my 6-year-old to Dr. Park was a revelation. He transformed what I expected to be a nightmare into something my son actually looks forward to. He leaves every appointment proudly showing off his sticker and talking about his clean teeth!',
    treatment: "Children's Dentistry",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [])

  const variants = {
    enter: (d) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d * -60 }),
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-teal-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-teal-400" />
            Patient Stories
          </span>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl mt-2">
            Real Results,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-300">
              Real People
            </span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote icon */}
            <Quote
              size={64}
              className="absolute -top-4 -left-4 text-white/5 hidden sm:block"
              fill="currentColor"
            />

            <div className="relative min-h-[280px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 sm:p-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-white/85 text-lg leading-relaxed mb-8 italic">
                      "{testimonials[current].text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-display font-semibold text-white">
                          {testimonials[current].name}
                        </p>
                        <p className="text-white/60 text-sm">{testimonials[current].title}</p>
                      </div>
                      <div className="ml-auto hidden sm:block">
                        <span className="text-xs bg-white/10 border border-white/20 text-teal-300 font-semibold px-3 py-1.5 rounded-full">
                          {testimonials[current].treatment}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-teal-400' : 'w-4 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {[
            { label: 'Google Reviews', value: '4.9★', sub: '1,200+ reviews' },
            { label: 'RateMDs', value: '4.8★', sub: '890+ reviews' },
            { label: 'Patient Satisfaction', value: '98%', sub: 'would recommend' },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-4 min-w-[140px]"
            >
              <p className="font-display font-bold text-2xl text-white">{item.value}</p>
              <p className="text-white/80 text-xs font-semibold mt-0.5">{item.label}</p>
              <p className="text-white/50 text-[11px]">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
