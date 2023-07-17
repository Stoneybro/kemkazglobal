'use client'
import React from 'react'
import { FaWhatsapp,FaPhone, } from 'react-icons/fa'
import {HiOutlineMail,HiOutlineLocationMarker} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'



const Contact = () => {
    const emailbutton=()=>{
        const mailtoUrl='mailto:kemkazglobal@gmail.com, little4reading@gmail.com';
        window.location.href=mailtoUrl
    }
    const numberbutton=()=>{
        const mailtoUrl='tel:+1(347) 283-3784';
        window.location.href=mailtoUrl
    }
    const mapbutton=()=>{
        const address='18 Comstock ave staten Island NY 10314';
        const encodedaddress=encodeURIComponent(address)
        const mapUrl=`https://www.google.com/maps/search/?api=1&query=${encodedaddress}`
        window.open(mapUrl , '_blank')
        
    }
    const chatbutton=()=>{
        const mapUrl=`https://wa.me/13472833784`
        window.open(mapUrl , '_blank')
        
    }
    
  return (
    <div className='py-16'>
        <div className="flex items-center justify-center flex-col ">
       <div className="text-5xl">Contact us</div>
       <div className="text-sm text-[#575455] mb-8 lg:mb-12">let us know how we can help you</div>
        <div className="flex gap-4 flex-wrap px-8 lg:px-4 items-center justify-center">
            <button onClick={emailbutton} className="border border-gray-400 after:bg-primary border-opacity-25 p-4  w-full lg:w-56 flex flex-col items-start  gap-4 card relative">
                <div className="">Email us</div>
                <div className="text-xs mb-1 text-[#575455]">send us a message.</div>
                <div className="text-left text-xs font-semibold underline ">kemkazglobal@gmail.com</div>
            </button>
            <button className="border after:bg-[#F75C4E] border-opacity-25 p-4  w-full lg:w-56 flex flex-col items-start  gap-4 border-gray-400 card relative">
           <div className=""> Chat with us</div>
           <div className="text-xs mb-1 text-[#575455]">speak to our friendly team</div>
           <div className="text-left text-xs font-semibold underline">+1(347) 283-3784</div>
            </button>
            <button onClick={mapbutton} className="border after:bg-[#5C4EF7] border-opacity-25 p-4  w-full lg:w-56 flex flex-col items-start  gap-4 border-gray-400 card relative">
            <div className="">Visit us</div>
                <div className="text-xs mb-1 text-[#575455]">18,Comstock ave staten Island NY 10314</div>
                <div className="text-left text-xs font-semibold underline">view on google maps</div>
            </button>
            <button onClick={numberbutton} className="border after:bg-[#F7954E] border-opacity-25 p-4  w-full lg:w-56 flex flex-col items-start  gap-4 border-gray-400 card relative">
            <div className="">Call us</div>
                <div className="text-xs mb-1 text-[#575455]">Mon-Fri from 8am-5pm</div>
                <div className="text-left text-xs font-semibold underline">+1(347) 283-3784, +1(347) 825-8470</div>
            </button>
        </div>

       </div>
    </div>
  )
}

export default Contact