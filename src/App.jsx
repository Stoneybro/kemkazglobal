import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Text from './components/text'
import Features from './components/features'
import About from './components/about'
import './app.css'


function App() {
 
  return (
  <div className=' font-poppins'>
  <Nav />
  <Hero />
  <Text />
  <Features />
    <About />
  </div>
  )
}

export default App
