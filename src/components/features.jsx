import React from 'react'
import { BiSolidPlaneAlt, BiBuildingHouse } from 'react-icons/bi'
import {BsGraphUpArrow} from 'react-icons/bs'
import {PiSoccerBallDuotone} from 'react-icons/pi'
import { FaBusinessTime,FaTruck } from 'react-icons/fa'


const Features = () => {
  return (
    <div id='services' className='' >
        <div className="lg:w-[1100px] mx-auto py-24 px-6 lg:px-0">
            <div className="text-center text-4xl">OUR SERVICES</div>
            <div className=" grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-16 mt-14 lg:16">
                <div className="flex gap-3 items-start ">
                    <div className="bg-primary rounded-full p-3 "><BiSolidPlaneAlt size={25} color={'white'} /></div>
                    <div className=" flex flex-col gap-1">
                        <div className="font-semibold text-xl">Importation and Exportation</div>
                        <div className="">we help you transfer your goods from and to other countries.</div>
                    </div>
                </div>
                <div className="flex gap-3 items-start ">
                    <div className="bg-[#F75C4E] rounded-full p-3 "><FaTruck size={25} color={'white'} /></div>
                    <div className=" flex flex-col gap-1">
                        <div className="font-semibold text-xl">Logistics</div>
                        <div className="">we help you transfer your goods from and to other countries.</div>
                    </div>
                </div>
                <div className="flex gap-3 items-start ">
                    <div className="bg-[#191046] rounded-full p-3 "><BiBuildingHouse size={25} color={'white'} /></div>
                    <div className=" flex flex-col gap-1">
                        <div className="font-semibold text-xl">Real Estate</div>
                        <div className="">we help you transfer your goods from and to other countries.</div>
                    </div>
                </div>
                <div className="flex gap-3 items-start ">
                    <div className="bg-[#FF1FB3] rounded-full p-3 "><BsGraphUpArrow size={25} color={'white'} /></div>
                    <div className=" flex flex-col gap-1">
                        <div className="font-semibold text-xl">Investments</div>
                        <div className="">we help you transfer your goods from and to other countries.</div>
                    </div>
                </div>
                <div className="flex gap-3 items-start ">
                    <div className="bg-[#5C4EF7] rounded-full p-3 "><FaBusinessTime size={25} color={'white'} /></div>
                    <div className=" flex flex-col gap-1">
                        <div className="font-semibold text-xl">Business Consulting</div>
                        <div className="">we help you transfer your goods from and to other countries.</div>
                    </div>
                </div>
                <div className="flex gap-3 items-start ">
                    <div className="bg-[#F7954E] rounded-full p-3 "><PiSoccerBallDuotone size={25} color={'white'} /></div>
                    <div className=" flex flex-col gap-1">
                        <div className="font-semibold text-xl ">Sports</div>
                        <div className="">we help you transfer your goods from and to other countries.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features