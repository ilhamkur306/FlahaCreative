import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Pricing />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  )
}