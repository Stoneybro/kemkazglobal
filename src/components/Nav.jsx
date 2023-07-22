import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { BiMenu,BiX } from 'react-icons/bi'
import {HashLink} from 'react-router-hash-link' 
import logo from '../assets/logo.svg'
const Nav = () => {
  const [toggle,SetToggle]=useState(false)
  return (
    <div id='home'>
        <div className="flex items-center  justify-between py-6 px-6 lg:w-[1150px] mx-auto">
            <div className=" text-xl w-[12rem] md:w-64">
                <img src={logo} />
            </div>            
            <div className={`lg:hidden z-20 ${toggle&&'fixed'} right-6`}   onClick={(e)=>SetToggle(!toggle)} >{toggle?<BiX size={30} color='#4775BA' />:<BiMenu size={30} color='#4775BA' />}</div>
            {toggle&&<div className='w-screen h-screen fixed z-10 top-0 left-0 bg-[#fffffff6] justify-center items-center flex flex-col gap-8 text-2xl font-medium'>
                <div className="" onClick={(e)=>SetToggle(!toggle)} ><HashLink smooth to='/#home'>Home</HashLink></div>
                <div className="" onClick={(e)=>SetToggle(!toggle)}><HashLink smooth to='/#about'>About us</HashLink></div>
                <div className="" onClick={(e)=>SetToggle(!toggle)}><HashLink smooth to='/#services'>Services</HashLink></div>
                <div className="" onClick={(e)=>SetToggle(!toggle)}> <HashLink smooth to='/#contact'>Contact Us</HashLink></div>
              </div>}
            <div className=" hidden lg:flex gap-14 items-center">
                <div className="">Home</div>
                <div className=""><HashLink smooth to='/#about'>About us</HashLink></div>
                <div className=""><HashLink smooth to='/#services'>Services</HashLink></div>
                <HashLink smooth to='/#contact'><button className=" hidden lg:block bg-primary px-6 py-2 rounded-3xl hover:border-primary border hover:scale-105 text-white transition duration-300">Contact us</button></HashLink>
            </div>
        </div>
    </div>
  )
}

export default Nav