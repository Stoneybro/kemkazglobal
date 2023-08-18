import React from 'react'
import hero from '/img/hero.jpg'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
const Hero = () => {
  return (
    <div id='home' className="flex  lg:flex-row flex-col-reverse lg:w-[1150px] bg-[url('/img/hero.jpg')]  bg-no-repeat bg-center lg:bg-contain bg-[length:120%] mx-auto items-center px-6 py-6 lg:py-12 gap lg:h-[calc(100vh-89px)]">
        <div className="flex-1 flex flex-col gap-6 items-start">
            <div className="text-4xl leading-normal">
            Empowering Success Through Integrated Solutions and Global Expertise
            </div>
            <div className=" text-black text-xl">
            With our extensive global knowledge and versatile solutions, we empower businesses to succeed in importation, exportation, and beyond.</div>
            <HashLink smooth to='/#contact'> <button className='bg-primary px-6 py-2 rounded-3xl hover:scale-105   text-white transition duration-300'>Get Started</button></HashLink>
        </div>

    </div>
  )
}
//[#575455]
export default Hero