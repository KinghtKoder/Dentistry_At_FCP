import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MapPin, Phone, Clock, Mail, Send, CheckCircle, AlertCircle,
} from 'lucide-react'

const hours = [
  { day: 'Monday – Thursday', time: '8:00 AM – 6:00 PM' },
  { day: 'Friday',             time: '8:00 AM – 5:00 PM' },
  { day: 'Saturday',           time: '9:00 AM – 3:00 PM' },
  { day: 'Sunday',             time: 'Closed (Emergency on-call)' },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
}

export default function Appointment() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="py-24 bg-dental-muted">
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
            Get in Touch
          </span>
          <h2 className="section-title text-4xl sm:text-5xl mt-2">
            Book Your{' '}
            <span className="gradient-text">Appointment</span>
          </h2>
          <p className="section-subtitle text-base mx-auto">
            Ready to start your journey to a healthier, more confident smile?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-card h-52">
              <iframe
                title="PureSmile Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2155!2d-79.3799!3d43.6499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d03ab3a75b%3A0x67a47fbe4d6d6c85!2sFront%20St%20W%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1699000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact info */}
            <div className="bg-white rounded-2xl shadow-card p-6 space-y-4">
              <InfoRow icon={MapPin} label="Address" value="150 King Street West, Suite 200, Toronto, ON M5H 1J9" />
              <InfoRow icon={Phone} label="Phone" value="(416) 868-1066" href="tel:+14168681066" />
              <InfoRow icon={Mail}  label="Email" value="hello@puresmile.ca" href="mailto:hello@puresmile.ca" />
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-primary-600" />
                <span className="font-display font-semibold text-dental-dark text-sm">Office Hours</span>
              </div>
              <div className="space-y-2.5">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-dental-gray">{day}</span>
                    <span className="font-medium text-dental-dark">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — booking form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-card p-8"
          >
            <h3 className="font-display font-bold text-dental-dark text-xl mb-1">
              Request an Appointment
            </h3>
            <p className="text-dental-gray text-sm mb-7">
              Fill in your details and we'll confirm within 2 business hours.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12 gap-4"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h4 className="font-display font-bold text-dental-dark text-lg">
                  Appointment Requested!
                </h4>
                <p className="text-dental-gray text-sm max-w-sm">
                  Thank you! We'll review your request and reach out within 2 hours to confirm
                  your appointment time.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary mt-2"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" type="text" placeholder="Jane Doe" value={form.name} onChange={handle} required />
                  <Field label="Email Address" name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={handle} required />
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone Number" name="phone" type="tel" placeholder="(416) 555-0123" value={form.phone} onChange={handle} />
                  <div>
                    <label className="block text-xs font-semibold text-dental-dark mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handle}
                      className="w-full border border-dental-border rounded-xl px-4 py-3 text-sm text-dental-dark bg-dental-muted
                                 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all"
                    >
                      <option value="">Select a service…</option>
                      <option>General Check-up</option>
                      <option>Teeth Whitening</option>
                      <option>Clear Aligners / Invisalign</option>
                      <option>Dental Implants</option>
                      <option>Emergency Care</option>
                      <option>Children's Dentistry</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Preferred date */}
                <Field label="Preferred Appointment Date" name="date" type="date" value={form.date} onChange={handle} />

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-dental-dark mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Any concerns or questions for the dentist…"
                    value={form.message}
                    onChange={handle}
                    className="w-full border border-dental-border rounded-xl px-4 py-3 text-sm text-dental-dark bg-dental-muted resize-none
                               focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full py-3.5 text-base disabled:opacity-70 disabled:cursor-not-wait"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Request Appointment
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-dental-gray">
                  Or call us directly at{' '}
                  <a href="tel:+14168681066" className="text-primary-600 font-semibold hover:underline">
                    (416) 868-1066
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-dental-dark mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full border border-dental-border rounded-xl px-4 py-3 text-sm text-dental-dark bg-dental-muted
                   focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all
                   placeholder:text-dental-gray/60"
      />
    </div>
  )
}

function InfoRow({ icon: Icon, label, value, href }) {
  return (
    <div className="flex gap-3">
      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon size={15} className="text-primary-600" />
      </div>
      <div>
        <p className="text-[11px] font-semibold text-dental-gray uppercase tracking-wide">{label}</p>
        {href ? (
          <a href={href} className="text-sm font-medium text-dental-dark hover:text-primary-600 transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-dental-dark">{value}</p>
        )}
      </div>
    </div>
  )
}
