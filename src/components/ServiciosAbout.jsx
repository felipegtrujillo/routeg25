"use client";

import Image from "next/legacy/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn } from "../utils/motion.js";

import img1 from "../../public/assets/img/restaurant/parilla2.jpg";

import { useEffect, useState, useRef } from "react"; // Importa useState y useEffect

function ServiciosAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (


<div id="main" className="sm:px-16 px-6 sm:py-16 py-10 grid grid-cols-1 grid-rows-2 gap-4 mx-2 lg:grid-cols-2 lg:grid-rows-1 min-h-screen  overflow-hidden">
<motion.div
  className="w-full h-full flex flex-col justify-center items-center"
  variants={fadeIn('right', "spring", 0.1, 3)}
>
  <h3 className="text-custom-rojo selection:[2.4rem] lg:text-[2.7rem] pb-2 w-[80%] text-center ">Servicios Ofrecidos</h3>
  <ul className="ext-gray2 text-[1.3rem] lg:text-[1.5rem] text-center font-dom pl-4 lg:pl-12">
          <li className='before:content-["•"] before:mr-2 text-start'>
            Actividades recreativas
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Cabañas
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Centro de Convención
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Coffe break
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Fiestas de Fin de Año
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Giras de Estudio
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Matrimonios
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Paseos de Fin de Año
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Piscina
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Restaurant
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Retiros
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Seminarios
          </li>
        </ul>
</motion.div>

  <motion.div
      className="w-full h-full flex justify-center items-center"
      variants={fadeIn('left', "spring", 0.1, 3)}
      >
    <Image
    src={img1}
    alt="vision"

    className="objet-cover rounded-[1rem]"
  />
   </motion.div>
  
</div>
  );
}

export default SectionWrapper(ServiciosAbout, "vision");
