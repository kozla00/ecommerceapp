import React, { useState, useEffect } from 'react'
import { AiOutlineDown } from "react-icons/ai"
import { categories } from "../utils/data"
import { motion } from "framer-motion";
import RowContainer from './RowContainer';
import { useStateValue } from "./context/StateProvider";

const MenuContainer = () => {

    const [filter, setFilter] = useState("chicken");

    const [{ furnitureItems }, dispatch] = useStateValue();

  return (
    <section className='w-full my-6' id="menu">
        <div className='w-full flex flex-col items-center justify-center'>
        <p className=''>SEARCH BY</p>
        <p className='text-3xl font-semibold 
          relative before:absolute before:rounded-lg before:content before:w-52 before:h-1 
          before:-bottom-2 before:-left-2 before:bg-gradient-to-tr from-violet-100 to-violet-400 
          transition-all ease-in-out duration-100'>CATEGORIES</p>


        <div className='w-full flex items-center justify-start lg:justify-center gap-10 py-10 overflow-x-scroll scrollbar-none text-gray-800'>
        {categories && categories.map(category => (
            <motion.div whileTap={{ scale: 0.7 }} whileHover={{scale: 1.1}} key={category.id} className={`w-24 ${filter === category.urlParamName ? "bg-cartNumBg": "bg-card"} min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center 
            justify-center`} onClick={() => setFilter(category.urlParamName)}>
                <div className='flex flex-col gap-3 items-center justify-center duration 150 transition-all 
                ease-in-out group bg-violet-200 hover:bg-violet-300 w-24 min-w-[120px] h-28 cursor-pointer 
                rounded-lg dropshadow-lg'>
                    <div className={`w-10 h-10 rounded-full bg-indigo-400 ${filter === category.urlParamName ? "bg-card" : "bg-cartNumBg"} group-hover:bg-red-200 flex items-center justify-center`}>
                        <AiOutlineDown className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}/>
                    </div>
                    <p className=''>
                        {category.name}
                    </p>
                </div>
            </motion.div>
        ))}
        </div>
        <div className='w-full'>
         <RowContainer flag={false} data={furnitureItems?.filter((n) => n.category == filter)} />
        </div>
        </div>
    </section>
  )
}

export default MenuContainer
