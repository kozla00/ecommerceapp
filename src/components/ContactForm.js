import React from 'react'

const ContactForm = () => {
  return (      
    <div class="w-full flex items-center justify-center my-12">
        <div class="top-40 bg-violet-300 shadow rounded py-16 lg:px-28 px-8">
            <p class="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-white">Get in contact with Us!</p>
            <div class="md:flex items-center mt-12">
                <div class="md:w-72 flex flex-col">
                    <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">Name</label>
                    <input tabindex="0" arial-label="Please input name" type="name" class="text-sm leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-600" placeholder="Please input  name" />
                </div>
                <div class="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">Surname</label>
                    <input tabindex="0" arial-label="Please input email address" type="name" class="text-sm leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-600" placeholder="Please input email address" />
                </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="md:w-72 flex flex-col">
                      <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">E-mail</label>
                      <input tabindex="0" role="input" arial-label="Please input company name" type="name" class="text-sm leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-600" placeholder="Please input your e-mail" />
                    </div>
                    <div class="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                      <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">City</label>
                      <input tabindex="0" arial-label="Please input country name" type="name" class="text-sm leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-600" placeholder="Please input your city" />
                    </div>
                </div>
                <div>
                  <div class="w-full flex flex-col mt-8">
                      <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">Message</label>
                      <textarea tabindex="0" aria-label="leave a message" role="textbox" type="name" class="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-600 resize-none"></textarea>
                  </div>
                </div>
                <p class="text-xs leading-3 text-gray-200 dark:text-white mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                <div class="flex items-center justify-center w-full">
                  <button class="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                </div>
            </div>
      </div>
  )
}

export default ContactForm
