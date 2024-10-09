'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion.js';

import img1 from '../../public/assets/img/cabañas/araucaria/2.jpeg';

function MainSectionAbout() {
  return (
    <div id="main" className="sm:px-16 px-6 sm:py-16 py-10 grid grid-cols-1 grid-rows-2 gap-4 mx-2 lg:grid-cols-2 lg:grid-rows-1">
      <motion.div
        className="w-[80%] h-full flex flex-col justify-center items-center"
        variants={fadeIn('right', "spring", 0.1, 3)}
      >
        <h2 className="text-custom-yellow text-[2.7rem] lg:text-[2.7rem] pb-2  ">Nuestra Vision</h2>
        <p className="text-gray2 text-[2.6rem] text-center lg:text-[2.6rem]">
        Liderar la industria gastronómica y turística 
        satisfaciendo las necesidades de nuestros clientes, ofreciendo un servicio eficaz y de alta calidad.
        </p>
      </motion.div>

        <motion.div
            className="h-auto lg:h-full w-full object-cover rounded-[20px] lg:rounded-[40px] max-h-[50vh] lg:max-h-none mx-auto lg:mx-0"
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
