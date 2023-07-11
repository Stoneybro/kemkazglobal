import React from 'react'


const Nav = () => {
  return (
    <div>
        <div className="flex items-center  justify-between py-6 px-8 lg:w-[1150px] mx-auto">
            <div className=" text-xl ">Kemkaz</div>
            
            <div className=" hidden lg:flex gap-10">
                <div className="">Home</div>
                <div className="">About us</div>
                <div className="">Services</div>
            </div>
            <div className=" hidden lg:block bg-primary px-6 py-2 rounded-3xl hover:border-primary border hover:bg-secondary hover:text-black text-white transition duration-300">Contact us</div>
        </div>
    </div>
  )
}

export default Nav