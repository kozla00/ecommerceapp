import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="w-full">
      <div className="flex items-start justify-start text-xl">
        Infographic about Us
      </div>
      <div className="grid grid-cols-3 gap-8 p-5">
        <div className="bg-violet-300 flex items-center justify-center py-10 rounded-md">
          <h1 className="text-white text-xl px-6">7 Years Experience</h1>
        </div>
        <div className="bg-violet-300 flex items-center justify-center rounded-md">
          <h1 className="text-white text-xl px-6">3000+ Items Sold</h1>
        </div>
        <div className="bg-violet-300 flex items-center justify-center rounded-md">
          <h1 className="text-white text-xl px-6">27 Awards Won</h1>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent

