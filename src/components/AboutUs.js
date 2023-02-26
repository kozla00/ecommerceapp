import React from 'react'
import AboutHeader from './AboutHeader'
import { AboutMain } from './ExportIndex'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <AboutHeader />
      <AboutMain />
      <Footer />
    </div>
  )
}

export default AboutUs

