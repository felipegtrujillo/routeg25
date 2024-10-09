'use client';


import { motion } from 'framer-motion';
import   Image    from 'next/image.js';

/* import { slideIn } from '../utils/motion.js'; */

import img1 from "../../../public/assets/img/mapa/mapacabañas.png"

const MapaCabanas = () => {

  return (
    <div className='flex flex-col justify-center items-center h-full w-full bg-black'>
      <div className='flex justify-center items-center h-[10%]'>
      <h3 className='text-black text-center'> Cabañas "La Calchona"</h3>
      </div>
      <div className='flex justify-center items-center h-[90%]'>
      <Image src={img1} alt="La calchona 1" placeholder="blur" 
      className="w-[33rem] h-auto"/>
      </div>
    </div>
  );
}

export default MapaCabanas;
