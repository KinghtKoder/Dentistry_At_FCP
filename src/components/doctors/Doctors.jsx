import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Linkedin } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Lead Dentist & Founder',
    spec: 'General & Cosmetic Dentistry',
    bio: 'With 18+ years of experience, Dr. Mitchell blends artistry and science to create beautiful, lasting smiles. She completed her residency at the University of Toronto.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80&auto=format',
    certs: ['DDS, University of Toronto', 'Invisalign® Certified'],
  },
  {
    name: 'Dr. James Okafor',
    title: 'Orthodontic Specialist',
    spec: 'Orthodontics & Clear Aligners',
    bio: 'Dr. Okafor specialises in transforming complex bite issues into perfect alignments using the latest orthodontic techniques and digital planning.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80&auto=format',
    certs: ['MSc Orthodontics, McGill', 'AAO Member'],
  },
  {
    name: 'Dr. Elena Vasquez',
    title: 'Implant Surgeon',
    spec: 'Oral Surgery & Implantology',
    bio: 'A specialist in dental implants and full-arch restorations, Dr. Vasquez has placed over 2,000 implants with an outstanding success rate.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80&auto=format',
    certs: ['DDS, Western University', 'ICOI Board Certified'],
  },
  {
    name: 'Dr. Ryan Park',
    title: 'Pediatric Dentist',
    spec: "Children's & Preventive Dentistry",
    bio: "Dr. Park makes every child's dental visit a positive adventure. His playful approach and gentle touch have earned him a top rating among young patients.",
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&q=80&auto=format',
    certs: ['DMD, Dalhousie University', 'CAAPD Fellow'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Doctors() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" className="py-24 bg-dental-muted">
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
            Meet the Team
          </span>
          <h2 className="section-title text-4xl sm:text-5xl mt-2">
            Dentists Who{' '}
            <span className="gradient-text">Truly Care</span>
          </h2>
          <p className="section-subtitle text-base mx-auto">
            Our award-winning team combines decades of expertise with a personal
            commitment to your comfort and confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <DoctorCard key={doc.name} doctor={doc} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DoctorCard({ doctor, index, inView }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Photo */}
      <div className="relative overflow-hidden h-64">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />

        {/* LinkedIn overlay */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-primary-50">
            <Linkedin size={16} className="text-primary-700" />
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider">
            {doctor.spec}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display font-bold text-dental-dark text-base">{doctor.name}</h3>
        <p className="text-primary-600 text-xs font-semibold mt-0.5 mb-3">{doctor.title}</p>
        <p className="text-dental-gray text-xs leading-relaxed mb-4">{doctor.bio}</p>

        {/* Certifications */}
        <div className="space-y-1.5">
          {doctor.certs.map((cert) => (
            <div key={cert} className="flex items-center gap-1.5">
              <Award size={12} className="text-teal-500 flex-shrink-0" />
              <span className="text-[11px] text-dental-gray">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
