import React from 'react'
import logo from '../assets/logo.svg'
import {FaWhatsapp,FaLinkedin,FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#D9EBFF] '>
        <div className="lg:w-[1050px] lg:mx-auto py-12 flex justify-between px-4 lg:px-0 lg:items-center  flex-col lg:flex-row">
          <div className="flex flex-col gap-4">
          <div className="w-64"><img src={logo} alt="" /></div>
            <div className="text-xs text-[#575455b7]">Empowering Success Through Integrated <br/>Solutions and Global Expertise</div>
            <div className="text-[#575455b7] flex gap-4   flex-col lg:flex-row">
                <div className="">Home</div>
                <div className="">About us</div>
                <div className="">Services</div>
                <div className="">Contact us</div>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:items-end mt-4">

          <div className="flex gap-4">
            <FaWhatsapp size={25} color='#476B9F' /><FaLinkedin size={25} color='#476B9F' /><FaFacebook size={25} color='#476B9F' /><FaInstagram size={25} color='#476B9F' /><FaTwitter size={25} color='#476B9F' />
          </div>
          </div>
        
        </div>
        <div className="bg-[#476B9F] text-center py-2 text-xs text-white">© 2023 Kemkaz global. All rights reserved.</div>
    </div>
  )
}

export default Footer