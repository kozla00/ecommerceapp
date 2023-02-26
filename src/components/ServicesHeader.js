import React from 'react';

import { AiOutlineRight } from "react-icons/ai";

const AboutHeader = () => {
  return (
    <div className=''>
        <div className='w-screen h-[136px] bg-violet-200 flex items-center justify-center -mt-8'>
          <h1 className='text-2xl'>Services</h1>
        </div>
        <div className=''>
            <h1 className='flex items-center justify-center gap-2 my-2'>Home 
              <AiOutlineRight size={15} />
              Services</h1>
        </div>
    </div>
  )
}

export default AboutHeader
