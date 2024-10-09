"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn } from "../utils/motion.js";

import img1 from "../../public/assets/img/restaurant/cocteleria2.jpg";
import img2 from "../../public/assets/img/cabañas/cabaña1.jpg";
import img3 from "../../public/assets/img/menu/bsd.jpg";

import { useEffect, useState, useRef } from "react"; // Importa useState y useEffect

function Section() {
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
    <div className="flex flex-col-reverse justify-center items-center xl:flex-row gap-4 w-screen h-[120vh] ">
      {/* DIV1 TEXTOS */}
      <motion.div
        className="px-12 py-32 lg:py-64 w-screen h-[60vh] sm:h-[40vh] md:h-[30vh] lg:w-[50vw] lg:h-[60vh] xl:w-[50vw] xl:h-[100vh] flex flex-col justify-center items-start"
        variants={fadeIn("up", "spring", 0.1, 2)}
      >
            <h2 className="text-custom-yellow lg:text-[1.3rem] text-[1.1rem]">
              La Calchona
            </h2>

            <div ref={ref}>
              <motion.h3
                className="text-black lg:text-[2rem] text-[1.8rem]"
                initial={{ opacity: 1, clipPath: "inset(0 100% 100% 0)" }} // Comienza con el texto oculto
                animate={isInView ? { clipPath: "inset(0 0 0 0)" } : {}} // Se revela solo si está en el viewport
                transition={{ duration: 1.3, ease: "easeInOut" }} // Duración y suavidad de la animación
              >
                El escape perfecto, vive la experiencia
                <br /> en la naturaleza.
              </motion.h3>
            </div>

            <p className="text-black  lg:text-[1.2rem] text-[1rem] text-justify pb-">
              Ser una empresa de ecoturismo innovadora en el rubro, la cual brinde
              momentos y experiencias únicas e inolvidables a nuestros clientes a
              través del uso sustentable del medioambiente, sin comprometer el
              hermoso entorno natural que nos rodea y este se preserve al pasar del
              tiempo.
            </p>
      </motion.div>

      {/* DIV2 IMAGENES */}

      <div
        ref={container}
        className="px-12 py-32 pl-32 lg:py-64 w-screen h-[60vh] md:h-[80vh] lg:w-[80vw] lg:h-[90vh] xl:w-[50vw] xl:h-[100vh] flex justify-center items-center relative overflow-hidden"
      >
        {/* Primera imagen */}
        <motion.div
          className="absolute top-[57%] left-[2%] sm:left-[8%] lg:left-[10%] xl:left-[0%] h-[25vh] w-[40vw] md:h-[30vh] md:w-[28.5vw] lg:h-[30vh] lg:w-[22.5vw] xl:h-[40vh] xl:w-[15vw] z-[2]" // Ajuste de posición y tamaño
          style={{ y: md }}
        >
          <Image src={img1} alt="La calchona 1" placeholder="blur" fill />
        </motion.div>

        {/* Segunda imagen */}
        <motion.div
          className="absolute top-[7%] left-[10%] sm:left-[18%] md:left-[18%] lg:left-[20%] xl:left-[10%] h-[60vh] w-[37.5vh] sm:h-[70vh] sn:w-[70.5vw] md:h-[75vh] md:w-[65.5vw] lg:h-[80vh] lg:w-[50.5vw] xl:h-[90vh] xl:w-[35.5vw]  z-[1]" // Ajuste de posición y tamaño
          style={{ y: sm }}
        >
          <Image src={img2} alt="La calchona 2" placeholder="blur" fill />
        </motion.div>

        {/* Tercera imagen */}
        <motion.div
          className="absolute top-[23%] left-[66%] md:left-[66%] lg:left-[70%] xl:left-[65%] h-[24vh] w-[33vw]  sm:h-[28vh] sm:w-[18vh] md:h-[35vh] md:w-[28vw] lg:h-[30vh] lg:w-[20.5vw] xl:h-[40vh] xl:w-[15vw] z-[2]" // Ajuste de posición y tamaño
          style={{ y: lg }}
        >
          <Image src={img3} alt="La Calchona 3" placeholder="blur" fill />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(Section, "vision");
