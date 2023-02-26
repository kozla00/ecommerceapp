import React, { useEffect, useRef, useState } from "react";

import HomeContainer from "./HomeContainer";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import Questions from "./Questions";
import Aboutcontent from "./Aboutcontent";
import Footer from "./Footer";

import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

import RowContainer from "./RowContainer";
import { useStateValue } from "./context/StateProvider";
import { ChooseContainer } from "./ExportIndex";

const MainContainer = () => {
  const [{ furnitureItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />

      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor 
          relative before:absolute before:rounded-lg before:content before:w-28 before:h-1 
          before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-violet-100 to-violet-400 
          transition-all ease-in-out duration-100'>Trending</p>

          <div className='hidden md:flex gap-3 items-center'>
          <motion.div whileTap={{scale: 0.75}} className='text-white w-8 h-8 rounded-lg bg-violet-300 hover:bg-pink-300 cursor-pointer 
          hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(-200)}><AiOutlineLeft /></motion.div>
          <motion.div whileTap={{scale: 0.75}} className='text-white w-8 h-8 rounded-lg bg-violet-300 hover:bg-pink-300 cursor-pointer  
          hover:shadow-lg flex items-center justify-center' onClick={() => setScrollValue(200)}><AiOutlineRight /></motion.div>
        </div>
        </div>

        <RowContainer 
        scrollValue={scrollValue}
        flag={true} 
        data = {furnitureItems?.filter(n => n.category === "sofa" )} />
      </section>

      <MenuContainer />

      {cartShow && (
        <CartContainer />
      )}

      <Aboutcontent />

      <Questions />

      <ChooseContainer />

      <Footer />
      
    </div>
  )
}

export default MainContainer

