import React from 'react';

import { CiDeliveryTruck } from "react-icons/ci";

import HeaderPic from  "../img/header-picture.png";

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 p-12 w-full' id="home">
      <div className='flex items-center justify-center p-12 rounded-lg mx-6 w-[320px] md:w-[648px] bg-violet-100'>
        <img src={HeaderPic} alt=""/>
        </div> 
      <div className='flex-1 flex flex-col items-end justify-center tracking-wide mx-5 gap-10'>
        <div className="flex items-center justify-center gap-2 bg-violet-200 px-4 py-1 rounded-full">
          <p className="text-base font-semibold">
            Delivery in 24hr
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <CiDeliveryTruck className='w-full h-full object-contain'/>
          </div>
        </div>  
        <p className="text-[2.5rem] lg:text-[3.5rem] tracking-wide">
          Furniture that will be perfect combination for your
          <span className="text-violet-300 text-[3rem] lg:text-[3.5rem] px-2">
            Home
          </span>
        </p>
        <p className="text-base text-center md:w-[80%]">
          Choose US and see for yourself why we are number one in our country and beyond.
        </p>
      </div>
    </section>
  )
}

export default HomeContainer
