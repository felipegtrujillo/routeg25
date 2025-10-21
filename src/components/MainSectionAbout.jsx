'use client'
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';

import img1 from '../../public/assets/img/cabanas/araucaria/2.jpeg';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion.js';

function MainSectionAbout() {
  return (
    <div id="main" className="sm:px-16 px-6 sm:py-16 py-10 grid grid-cols-1 grid-rows-2 gap-12 mx-2 lg:grid-cols-2 lg:grid-rows-1 min-h-screen overflow-hidden ">
      <motion.div
        className="lg:w-full lg:h-full flex flex-col justify-center items-center "
        variants={fadeIn('right', "spring", 0.1, 3)}  >
          <h3 className="text-custom-rojo text-[2.4rem] lg:text-[2.4rem] pb-2  ">Nuestra Visión</h3>
          <p className="text-gray2 text-[1.8rem] text-center lg:text-[2.3rem]">
          Liderar la <strong> industria gastronómica y turística  </strong>
          satisfaciendo las necesidades de nuestros clientes, ofreciendo un <strong> servicio eficaz y de alta calidad.</strong>
          </p>
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

export default SectionWrapper(MainSectionAbout, "vision");
