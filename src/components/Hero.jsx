"use client";

import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import Link from "next/link";

import DynamicP from './common/DynamicParagraph'
import ButtonVerCarta from "./common/ButtonVerCarta";

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};



function Hero() {
  return (

        <div className="flex flex-col justify-center items-center py-[40vh]">
        <motion.h1
          className="mt-6 uppercase text-[2.5rem] md:text-[3rem] text-gray-300 font-semibold text-center font-playfair"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, type: "spring", stiffness: 20 }}  // Reducido a 1.5s, ajuste de 'spring'
        >
          La Calchona
        </motion.h1>

             <DynamicP text1="Descubre su Cocina y Naturaleza" text2="Restaurant & Cabañas " text3="A los Pies de la Montaña"></DynamicP>

               <div className="flex justify-center items-center gap-4 px-4">
                  <motion.button className="bg-custom-green text-white  py-2 px-6 rounded-[1rem] shadow-md hover:bg-green-700 hover:text-yellow-500  "
                    whileHover={{ scale: 1.05 }}  
                    transition={{ duration: 0.3 }}  
                    onClick={() => window.open("https://wa.me/56957661602?text=Hola,%20Me%20gustaria%20hacer%20una%20reserva%20de%20mesa", "_blank")}
                    >
                      Reserva Hoy
                  </motion.button>
                  <ButtonVerCarta/>

               </div>

               
        </div>
  );
}

export default Hero;
