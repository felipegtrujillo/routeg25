// src/components/Navbar.jsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; 

import ButtonReservarCabana from '../components/common/ButtonReservarCabana'
import { motion, useScroll, useTransform } from "framer-motion";


function ParallaxCabanasSections({
  image,
  title,
  subtitle,
  paragraph,
  buttonLink,
  buttonText,
  tipo,
  mensaje
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end ", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  useEffect(() => {}, [scrollYProgress]);

  return (
    <div
       id="cabanas"
      ref={container}
      className="relative flex items-center justify-center w-screen h-[72vh] md:h-[60vh] lg:h-[100vh]  overflow-hidden"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        position: "relative",
      }}
    >
      {/* IMAGEN */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full bg-gray-900">
        <motion.div
          style={{ y }} // Aplica la transformación basada en el scroll
          className="relative w-full h-full  filter contrast-10 saturate-100 brightness-20  opacity-50  "
        >
          <Image src={image} alt="image" style={{ objectFit: "cover" }} fill />
        </motion.div>
      </div>

      {/* TEXTOS */}
      <div className="absolute inset-0 flex flex-col justify-center items-start z-10 text-white pl-8 lg:pl-16 w-[90%] md:w-[70%] lg:w-[40%]">
        <h2 className="text-[6vw] md:text-[4vw] lg:text-[2vw] text-right py-2  font-semibold">
          {title}
        </h2>
        <h3 className="text-[7vw] md:text-[4vw] lg:text-[2vw] text-left ">
          {subtitle}
        </h3>
        <p className="text-[2.8vw] md:text-[1.8vw] lg:text-[1.2vw] text-justify ">
          {paragraph}
        </p>
        <div className="flex justify-center items-center gap-4 py-10">

        <motion.button
          className="bg-custom-green text-white py-2 px-8 rounded-[1rem] shadow-md hover:bg-green-700 hover:text-yellow-500"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={buttonLink}>
          {buttonText}
          </Link>
        </motion.button>

        <ButtonReservarCabana tipoCabana={tipo} mensajePersonalizado={mensaje} />  


</div>
      </div>
    </div>
  );
}

export default ParallaxCabanasSections;