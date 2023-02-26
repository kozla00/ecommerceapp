import React from 'react'

import Main from "../img/aboutMain.jpg"

const AboutMain = () => {
  return (
    <div className='w-[1280px] grid md:grid-cols-2 my-10'>
      <div className='p-8'>
        <h1 className='text-xl my-6'>Working with us is a pleasure. </h1>
        <p>NAVIAN® is a specialist furniture supplier for the many industry. Since we started,
          our mission has always been to provide our clients with the highest quality, products and
          customer service.
          Based in our showrooms, our dedicated team works closely with architects, designers, developers
          and industry professionals to ensure projects are fulfilled successfulyy.
          We also offer a custom-made service to meet any specific project requests that you might have.
        </p>
      </div>
      <img src={Main} alt="" className="w-[80%] rounded-md" />
    </div>
  )
}

export default AboutMain
