'use client'
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';

import img1 from '../../public/assets/img/front/faro.jpg';
import { SectionWrapper } from '../hoc/index.js';
import { fadeIn } from '../utils/motion.js';

function DetailSectionAbout() {
  return (
    <div className="sm:px-16 px-6 py-12 sm:py-16 mx-2 flex flex-col-reverse lg:flex lg:flex-row gap-4 h-auto overflow-hidden ">

        <motion.div className=" w-full h-full flex justify-center items-center"
                  variants={fadeIn('left', "spring", 0.1, 3)} >
                <Image src={img1}  alt="infraestructura"  className="objet-cover rounded-[1rem]" />
         </motion.div>

         <motion.div className="w-full flex flex-col justify-center items-center"
            variants={fadeIn('right', "spring", 0.1, 3)} >
          <div>
            <h3 className="text-custom-rojo text-[2.4rem] lg:text-[2.7rem] pb-2 w-[80%] ">Infraestructura</h3>
            
          </div>   

          <div className="w-full flex items-start">
            <ul className='text-gray2 text-[1.3rem] lg:text-[1.5rem] text-center font-dom pl-4 lg:pl-12'>
              <li className='before:content-["•"] before:mr-2 text-start'>
                El restaurant cuenta con 592 metros cuadrados
              </li>
              <li className='before:content-["•"] before:mr-2 text-start'>
                3 Salones interiores
              </li>
              <li className='before:content-["•"] before:mr-2 text-start'>
                3 Terrazas
              </li>
              <li className='before:content-["•"] before:mr-2 text-start'>
                2 Escenarios (interior y exterior) 
              </li>
              <li className='before:content-["•"] before:mr-2 text-start'>
                1 Barra en el primer piso
              </li>
              <li className='before:content-["•"] before:mr-2 text-start'>
                Capacidad para 250 personas
              </li>
              <li className='before:content-["•"] before:mr-2 text-start'>
                Gran Piscina al aire libre
                </li>
              <li className='before:content-["•"] before:mr-2 text-start'>
                100.000 metros cuadrados de áreas naturales
              </li>
             </ul>
          </div>

      </motion.div>
        
    </div>
  );
}

export default SectionWrapper(DetailSectionAbout, "detail");
