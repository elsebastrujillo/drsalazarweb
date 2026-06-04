import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import RobotRosa from './components/RobotRosa'
import Especialidades from './components/Especialidades'
import Testimonios from './components/Testimonios'
import Doctor from './components/Doctor'
import CTAWhatsApp from './components/CTAWhatsApp'
import Footer from './components/Footer'
import WAFloat from './components/WAFloat'

export default function App() {
  return (
    <>
      <WAFloat />
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <RobotRosa />
        <Especialidades />
        <Testimonios />
        <Doctor />
        <CTAWhatsApp />
      </main>
      <Footer />
    </>
  )
}
