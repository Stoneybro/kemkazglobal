import React from 'react'
import { BiMenu } from 'react-icons/bi'
import logo from '../assets/logo.svg'
const Nav = () => {
  return (
    <div>
        <div className="flex items-center  justify-between py-6 px-8 lg:w-[1150px] mx-auto">
            <div className=" text-xl w-[12rem] md:w-64">
                <img src={logo} />
            </div>
            <div className="lg:hidden"><BiMenu size={30} color='#1F7CFF' /></div>
            <div className=" hidden lg:flex gap-14 items-center">
                <div className="">Home</div>
                <div className="">About us</div>
                <div className="">Services</div>
                <div className=" hidden lg:block bg-primary px-6 py-2 rounded-3xl hover:border-primary border hover:bg-secondary hover:text-black text-white transition duration-300">Contact us</div>
            </div>
        </div>
    </div>
  )
}

export default Nav