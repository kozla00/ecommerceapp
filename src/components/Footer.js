import React from 'react';

import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer class="relative bg-blueGray-200 pt-8 pb-6 w-screen border-t border-gray-300">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h2 className='text-3xl my-2 mx-28 mb-4'>NAVIAN®</h2>
          <h4 class="text-3xl fonat-semibold text-blueGray-700">Follow us on social media!</h4>
          <h5 class="text-lg mt-2 text-blueGray-600">
            Follow us for monthly discounts and prize games.
          </h5>
          <div class="mt-2 lg:mb-0 mb-6">
            <button class="font-normal  items-center justify-center align-center p-4" type="button">
              <GrFacebookOption size={27} /></button><button class="font-normal items-center justify-center align-center mr-2" type="button">
              <GrInstagram size={25} /></button><button class="font-normal p-4 items-center justify-center align-center mr-2" type="button">
              <GrTwitter size={25} /></button><button class="font-normal items-center justify-center align-center mr-2" type="button">
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4 ">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Schedule</span>
              <ul class="list-unstyled">
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Monday - Friday</a>
                </li>
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm md:mx-4 text-gray-700" href="#">8am - 10pm</a>
                </li>
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Saturday - Sunday</a>
                </li>
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm md:mx-4 text-gray-700" href="#">9am - 8pm</a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Address</span>
              <ul class="list-unstyled">
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Myon 8, Island</a>
                </li>
                <li>
                  <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">708420</a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contact</span>
              <ul class="list-unstyled">
                <li>
                  <a class="flex items-center gap-1 text-blueGray-600 hover:text-blueGray-800 font-semibold pb-2 text-sm" href="#"><BsTelephone />+47 842 947 038</a>
                </li>
                <li>
                  <a class="flex items-center gap-1 text-blueGray-600 hover:text-blueGray-800 font-semibold pb-2 text-sm" href="#"><AiOutlineMail />navian.is@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold">
            © Copyright <span id="get-current-year">2023</span><a href="#" class="text-blueGray-500 hover:text-gray-800" target="_blank"> NAVIAN®</a>
          </div>
        </div>
      </div>
      </div>
  </footer>
  )
}

export default Footer
