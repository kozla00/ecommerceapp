import React, { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart  } from "react-icons/ai";
import { motion } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

    
  return (
    <div
        ref={rowContainer}
        className={`w-full flex items-center my-12 scroll-smooth 
        ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center gap-4"}`}>
      {data && data.map(item => (
        <div key={item.id} className='w-275 h-[175px] min-w-[275px] md:w-420 md:min-w-[349px] py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
        <div className='h-auto w-[300px] flex items-center justify-between'>
            <img src={item?.imageURL} 
            alt='' 
            className='w-80'/>
            <motion.div whileTap={{ scale: 0.75 }} className='flex items-center justify-center text-2xl
            cursor-pointer drop-shadow-xl' 
            onClick={() => setItems([...cartItems, item])}>
                <AiOutlineShoppingCart className='text-violet-400' />
            </motion.div>
        </div>

        <div className='w-full flex flex-col gap-2 items-center'>
            <p className='text-base md:text-lg'>{item?.title}</p>
            <div className='flex items-center gap-8'>
                <p>{item?.price}</p>
            </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default RowContainer


