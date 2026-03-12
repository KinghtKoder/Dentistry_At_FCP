import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import WhyChooseUs from '../components/why-choose-us/WhyChooseUs'
import Doctors from '../components/doctors/Doctors'
import Testimonials from '../components/testimonials/Testimonials'
import Appointment from '../components/appointment/Appointment'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Appointment />
    </main>
  )
}
