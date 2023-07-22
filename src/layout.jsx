import React from 'react'
import Nav from './components/Nav'
import Footer from './components/footer'
import Contact from './components/contact'
const Layout = ({children}) => {
  return (
    <div>
        <Nav />
        {children}
        <Contact />
        <Footer />
    </div>
  )
}

export default Layout