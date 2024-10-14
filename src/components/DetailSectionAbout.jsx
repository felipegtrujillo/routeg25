'use client'
import Image from "next/legacy/image";
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc/index.js';
import { fadeIn } from '../utils/motion.js';

import img1 from '../../public/assets/img/front/IMG_1113-1-scaled.jpg';

function DetailSectionAbout() {
  return (
    <div className="sm:px-16 px-6 sm:py-16 py-10 grid grid-cols-1 grid-rows-2 gap-4 mx-2 lg:grid-cols-2 lg:grid-rows-1">

        <motion.div
            className="h-auto lg:h-full object-cover rounded-[20px] lg:rounded-[40px] max-h-[50vh] lg:max-h-none mx-auto lg:mx-0"
            variants={fadeIn('left', "spring", 0.1, 3)}
            >
          <Image
          src={img1}
          alt="vision"

          className="objet-cover rounded-[1rem]"
        />
         </motion.div>

         <motion.div
        className="w-full h-full flex flex-col justify-center items-center"
        variants={fadeIn('right', "spring", 0.1, 3)}
      >
        <h2 className="text-custom-yellow text-[2.7rem] lg:text-[2.7rem] pb-2 ">Infraestructura</h2>
        <ul className='text-gray2 text-[1.6rem] lg:text-[1.8rem] text-center font-dom pl-12'>
          <li className='before:content-["•"] before:mr-2 text-start'>
            El restaurant cuenta con X metros cuadrados
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            3 salones interiores
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            3 Terrazas
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            2 Escenarios (interior y exterior) • 2 barras (1er piso y 2do piso)
          </li>
          <li className='before:content-["•"] before:mr-2 text-start'>
            Capacidad para 250 personas
          </li>
</ul>



      </motion.div>
        
    </div>
  );
}

export default SectionWrapper(DetailSectionAbout, "detail");
