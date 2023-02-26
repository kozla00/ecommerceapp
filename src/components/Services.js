import React from 'react'
import AboutMain from './AboutMain'
import Footer from './Footer'
import ServiceHeader from './ServicesHeader'

const Services = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <ServiceHeader />
      <AboutMain />
      <Footer />
    </div>
  )
}

export default Services
