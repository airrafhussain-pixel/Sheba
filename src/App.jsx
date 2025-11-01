import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Future from './components/Future'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="page-root">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChoose />
  <Testimonials />
  <Future />
  <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
