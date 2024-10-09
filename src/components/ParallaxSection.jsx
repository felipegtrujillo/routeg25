// src/components/Navbar.jsx
"use client";

import React, {  useRef } from "react";
import Image from "next/image";
import { fadeIn } from "../utils/motion.js";

import { motion, useScroll, useInView, useTransform } from "framer-motion";

function ParallaxSection({ image, paragraphText, titleText }) {
  const container = useRef(null);
  const paragraphRef = useRef(null);
  const titleRef = useRef(null);
  const isInViewParagraph = useInView(paragraphRef, { once: true, threshold: 0.8 });
  const isInViewTitle = useInView(titleRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end ", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);


  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >

      {/* TEXTOS */}
      <motion.div className="flex flex-col justify-between relative w-full h-full z-10  text-white">
        <motion.p
          ref={paragraphRef}
          initial={{ opacity: 1, clipPath: "inset(0 100% 100% 0)" }} // Comienza con el texto oculto
          animate={isInViewParagraph ? { clipPath: "inset(0 0 0 0)" } : {}} // Se revela solo si está en el viewport
          transition={{ duration: 2.8 , ease: "easeInOut" }} // Duración y suavidad de la animación
          className="text-[12vw] md:text-[10vw] lg:text-[4.5vw] text-right py-10 px-10"
        >
          {paragraphText}
        </motion.p>
        <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInViewTitle ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="text-[15vw] md:text-[10vw] lg:text-[4.5vw] text-left px-10"
      >
        {titleText}
      </motion.h2>
      </motion.div>

      {/* IMAGEN */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div
          style={{ y }} // Aplica la transformación basada en el scroll
          className="relative w-full h-full"
        > 
          <Image src={image} alt="image" style={{ objectFit: "cover" }} fill />
        </motion.div>
      </div>
    </div>
  );
}

export default ParallaxSection;