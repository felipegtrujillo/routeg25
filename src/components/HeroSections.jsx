"use client";

import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import Link from "next/link";

import DynamicP from './common/DynamicParagraph'

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

import { textVariant } from "../utils/motion.js";

function HeroSections( {name, text1, text2, text3, buttonName, idSection, isRestaurant, page}  ) {
  return (
    
    <div className="flex flex-col justify-center items-center py-[40vh]">
          <motion.h1
            className="mt-6 uppercase text-[3rem] text-gray-300 font-semibold text-center font-playfair"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, type: "spring", stiffness: 20 }}  // Reducido a 1.5s, ajuste de 'spring'
          >
             {name}
          </motion.h1>
      
         <DynamicP text1={text1} text2={text2} text3={text3}></DynamicP>

          <div className="flex justify-center items-center gap-4">

            <motion.button className="bg-custom-green text-white  py-2 px-8 rounded-[1rem] shadow-md hover:bg-green-700 hover:text-yellow-500 "
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}  
                >
                {isRestaurant ? (
                  <a href={page}>
                           {buttonName}
                         </a>
                  ) : (
                    <Link href={idSection}>
                    {buttonName}
                  </Link>
                  )}
             </motion.button>
          </div>
        </div>

  );
}

export default HeroSections;
