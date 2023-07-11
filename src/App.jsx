import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Text from './components/text'
import Features from './components/features'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import './app.css'


function App() {
 
  return (
  <div className=' font-poppins'>
  <Nav />
  <Hero />
  <Text />
  <Features />
    <About />
    <Contact />
    <Footer />
  </div>
  )
}

export default App
