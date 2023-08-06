'use client'
import React, { useState } from 'react'
import { BiSolidPlaneAlt, BiBuildingHouse } from 'react-icons/bi'
import {BsGraphUpArrow} from 'react-icons/bs'
import {PiSoccerBallDuotone} from 'react-icons/pi'
import { FaBusinessTime,FaTruck } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Features = () => {
    const [select,setSelect]=useState('Import And Export')
    const data=[
        {
            topic:'Import And Export',
            content:"At our company, we specialize in providing a comprehensive suite of importation and exportation solutions that cater to the diverse needs of businesses engaged in global trade. Our array of services is meticulously designed to ensure a smooth and efficient flow of goods across international borders, enabling our clients to navigate the complexities of the global market with confidence. Whether it's within the United States or across borders, our comprehensive services are designed to empower businesses to thrive in the global market.",
            link:'/import-export'
        },
        {
            topic:'Logistics',
            content:"At our delivery company, we're proud to offer a wide range of services that help businesses transport goods smoothly and efficiently. We care about meeting your specific needs and exceeding your expectations. We focus on being reliable, fast, and making sure you're happy with our service. Think of us as your trusted partner, helping you tackle logistics challenges and take advantage of opportunities in the global market. When it comes to delivering goods, we've got you covered with our expert solutions and dedication to doing a great job.",
            link:'/logistics'
        },
        {
            topic:'Real estate',
            content:"At our company, we specialize in providing comprehensive real estate solutions tailored to meet the unique needs of clients in the dynamic real estate market. With a deep understanding of the industry and a commitment to excellence, our real estate services encompass a diverse range of offerings to facilitate seamless transactions and support clients in achieving their property goals. With a customer-centric approach, extensive market knowledge, and a passion for excellence, we are dedicated to helping clients thrive in the ever-evolving real estate industry.",
            link:'/estate'
        },
        {
            topic:'Investments',
            content:"At our company, we offer a comprehensive range of investment solutions designed to help clients achieve their financial goals and build wealth for the future. With a keen focus on maximizing returns and managing risk, our investment services encompass a diverse array of offerings to cater to various investment preferences and objectives.we understand that every investor is unique, and our client-centric approach ensures that our investment solutions are tailored to meet individual needs and aspirations. ",
            link:'/invest'
        },
        {
            topic:'Business consulting',
            content:"At our company, we are dedicated to providing comprehensive business consulting services that empower organizations to thrive and achieve sustainable success. Our business consulting solutions encompass a diverse array of offerings designed to address various challenges, drive growth, and optimize business performance. our team of experienced consultants is committed to helping businesses navigate complex challenges, identify growth opportunities, and implement strategic solutions for lasting success. With a collaborative and client-centric approach, we empower organizations to unleash their full potential and achieve their business objectives.",
            link:'/business'
        },
        {
            topic:'Sports',
            content:"At our company, we are passionate about sports and offer a wide range of specialized solutions tailored to cater to the needs of athletes, sports organizations, and talent agencies. With a deep understanding of the sports industry and a commitment to excellence, our sports services encompass a diverse array of offerings to support and empower the world of sports. At kemkaz global, we are dedicated to fueling the passion for sports and contributing to the growth and success of athletes and sports organizations. With a focus on talent development, performance optimization, and innovative solutions, we strive to play a pivotal role in shaping a brighter future for the world of sports.",
            link:'/sports'
        },
    ]
    const output=data.filter((data)=>data.topic==select)
    console.log(output);
  return (
    <div className=" bg-[#4775BA] py-12 lg:px-0 px-4" id='services'>
        <div className="mx-auto lg:max-w-[950px] flex flex-col gap-10">
        <div className="text-4xl text-white text-center font-medium">Our Services</div>
        <div className="text-white flex gap-2 flex-wrap lg:justify-center mx-auto items-center">
            {data.map((data)=>{
                return(
                    <div className={`${select===data.topic&&'bg-black'} transition-all duration-500  px-4 py-2 rounded-full border-[1px] border-[#00000034] cursor-pointer`} onClick={()=>setSelect(data.topic)}>{data.topic}</div>
                )
            })}

        </div>
        {data.find((data)=>{

        })}
        <div className="flex flex-col gap-4 text-white">
                <div className="text-2xl font-medium">{output[0].topic}</div>
                <div className="text-sm leading-8">{output[0].content}</div>
            </div>
            <Link to={output[0].link}><button className=" self-start px-4 py-2 rounded-full bg-black text-white">Read More</button></Link> 
        </div>
        

    </div>
  )
}

export default Features