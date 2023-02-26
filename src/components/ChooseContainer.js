import React from 'react'

import { CiDeliveryTruck, CiCreditCard1 } from "react-icons/ci"
import { AiOutlineSecurityScan } from "react-icons/ai"
import { BsCartX } from "react-icons/bs"

const ChooseContainer = () => {
  return (
      <div className='w-[280px] md:w-[1280px] mb-20'>
        <div className='grid md:grid-cols-4 gap-8 items-center justify-center'>
        <div className=''>
            <CiDeliveryTruck size={27}/>
            <h2 className=''>Fast Delivery</h2>
            <p>Depending on your location, We can guarantee delivery in 24 to 48 hours.</p>
        </div>
        <div className=''>
            <CiCreditCard1 size={27}/>
            <h2>Free Shiping</h2>
            <p>Free shiping you are getting, if your's purchase was over $100.</p>
        </div>
        <div className=''>
            <AiOutlineSecurityScan size={27}/>
            <h2>Secure Checkout</h2>
            <p>When delivery is on your door, you can check your items/furniture, if there is any damage</p>
        </div>
        <div className=''>
            <BsCartX size={27}/>
            <h2>Easy Returns</h2>
            <p>If you are not satisfied with your purchase, you can return it in 7 days from delivery day.</p>
        </div>
        </div>
      </div>
  )
}

export default ChooseContainer
