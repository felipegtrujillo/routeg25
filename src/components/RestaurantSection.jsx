// src/components/Navbar.jsx
'use client';

import Image from 'next/image';
import Restauranticons from '../components/common/RestaurantIcons.jsx';
import Serviceicons from '../components/common/Serviceicons.jsx';
import ButtonVerCarta from './common/ButtonVerCarta.jsx';
import ButtonReservarMesa from '../components/common/ButtonReservarMesa.jsx';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion.js';

import img2 from '../../public/assets/img/restaurant/restaurant2.jpg';
import img5 from '../../public/assets/img/menu/tallarines.jpeg';


function RestaurantSection({data}) {;

  return (
     <div>
      <div className="flex flex-col xl:flex-row ">
          {/* DIV1 */}
          <div className='px-12 py-12 w-full xl:w-[50%] h-auto flex flex-col justify-center items-center gap-4   '>
              <h2 className='text-custom-green text-[2rem] font-dom text-center ' >Ven a restaurar tu energía y apetito.</h2>
              <p className='text-black text-[1rem] text-center pb-[3rem]'>  
                Restaurant Rustico a los pies de la montaña <br />
                Ubicados en el hermoso valle del Cajón del Maipo, <br />
                 en el sector El Melocoton.
              </p>

              <Restauranticons/>

              <div className='py-8'>
               <ButtonReservarMesa/>
              </div>
              
         </div>
         
       {/* DIV2 */}
      <div className='flex flex-col justify-center items-center gap-4 w-full xl:w-[50%]  h-full '>
            <Image
              src={img2} // Muestra la imagen actual
              alt="restaurante"
              className=" w-full h-auto overflow-hidden "
              width={900}
              height={600}
            />
       </div>
       </div>

      <div className='flex flex-col-reverse lg:flex-row'>
        {/* DIV3 */}
       <div className='flex flex-col justify-center items-center gap-4 w-full lg:w-[50%]  h-full '>
          <Image
            src={img5}
            alt="Therapy"
            className=" w-full h-auto overflow-hidden "
            width={900}
            height={600}
          />
       </div>

       {/* DIV4 */}

       <div className='px-12 py-12 w-full lg:w-[50%] h-auto flex flex-col justify-center items-center gap-4  '>
                <h2 className='text-custom-green text-[2rem] font-dom text-center'>
                  {data[0].titulo}
                </h2>
                <p className='text-black text-[1rem] text-center pb-[3rem]'>
                  {data[0].horario1} <br />
                  {data[0].horario2} <br />
                </p>
              
                <Serviceicons/>

                <div className='py-8'>
                <ButtonVerCarta/>

                </div>
              
      </div>
    </div>
    </div>
  );

  
}

export default RestaurantSection;
