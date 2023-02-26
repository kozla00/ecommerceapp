import React from 'react'
import ContactHeader from './ContactHeader'
import ContactForm from './ContactForm'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <ContactHeader />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
