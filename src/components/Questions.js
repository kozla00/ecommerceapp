import React from 'react'

const Questions = () => {
  return (
    <section class="bg-white">
        <div class="w-screen px-5 py-20 mx-auto">
          <div class="text-center">
            <h1 class="sm:text-4xl text-2xl font-medium text-center title-font mb-4">
              Frequently Asked Question
            </h1>
            <p class="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-8">
              The most common questions about our company and our products
            </p>
          </div>

          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-white">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold   rounded-md py-2 px-4 bg-violet-300">
                    How long has this company been in furniture making?
                </summary>

                <span className='text-black'>
                  NAVIAN has been in this business of making furniture more than 5+ years.
                </span>
              </details>

              <details class="mb-4">
                <summary class="font-semibold rounded-md py-2 px-4 bg-violet-300">
                    How was this furniture made?
                </summary>

                <span className='text-black'>
                    Furniture is made of natural materials, with the love of our workers.
                </span>
              </details>

              <details class="mb-4">
                <summary class="font-semibold rounded-md py-2 px-4 bg-violet-300">
                    How do you deliver and how long will it take?
                </summary>

                <span className='text-black'>
                    We deliver in various ways, and delivery takes 24-48 hours.
                </span>
              </details>
            </div>

            <div class="w-full lg:w-1/2 px-4 py-2 text-white">
              <details class="mb-4">
                <summary class="font-semibold rounded-md py-2 px-4 bg-violet-300">
                    Can you remove my old furniture?
                </summary>

                <span class="px-4 py-2 text-black">
                    Yes, we can remove it, but it would cost extra money.
                </span>
              </details>

              <details class="mb-4">
                <summary class="font-semibold rounded-md py-2 px-4 bg-violet-300">
                    Can I get a better price?
                </summary>

                <span class="px-4 py-2 text-black">
                    All prices are listed, and we can change price for our loyal customers.
                </span>
              </details>
              
              <details class="mb-4">
                <summary class="font-semibold rounded-md py-2 px-4 bg-violet-300">
                  How can I communicate with your company?
                </summary>

                <span class="px-4 py-2 text-black">
                  We can communicate in different ways phone, e-mail.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Questions
