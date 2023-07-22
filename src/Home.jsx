import React from 'react'
import Hero from './components/Hero'
import Text from './components/text'
import Features from './components/features'
import About from './components/about'
import Layout from './layout'
const Home = () => {
  return (
    <div className='font-poppins'>
    <Layout>
    <Hero />
     <Text />
     <Features />
    <About />

    </Layout>

    
    </div>
  )
}

export default Home