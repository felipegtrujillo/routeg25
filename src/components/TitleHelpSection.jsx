"use client";

import React from "react";
import { SectionWrapper } from "../hoc/index.js";
import { motion } from "framer-motion";
import Link from "next/link";

import DynamicP from './common/DynamicParagraph.jsx'

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

import { textVariant } from "../utils/motion.js";

function TitleHelpSection( {name, text1}  ) {
  return (
    
    <div className="flex flex-col justify-center items-center h-[58vh] pt-16">

        <div className="flex justify-center items-center">
          <motion.h1
            className="uppercase text-[3rem] text-gray-500 font-semibold text-center font-playfair"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, type: "spring", stiffness: 20 }}  // Reducido a 1.5s, ajuste de 'spring'
          >
             {name}
          </motion.h1>
       </div>

        
         <p className="text-gray-500 text-[1rem]" > {text1} </p>


        </div>

  );
}

export default TitleHelpSection;
