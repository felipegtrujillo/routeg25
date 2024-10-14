// src/components/CabañasSection.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from "next/link"; 

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion.js';
import img1 from '../../public/assets/img/cabañas/cabaña4.jpg';
import img2 from '../../public/assets/img/cabañas/cabaña2_2.jpg';
import img3 from '../../public/assets/img/cabañas/cabaña3.jpg';
import { SectionWrapper } from '../hoc/index.js';

const images = [
  { src: img1, link:"deluxe", alt: "Deluxe", text: "Deluxe", additionalText: "Para 2 personas" },
  { src: img2, link:"bungalow",alt: "Bungalow",text: "Bungalow", additionalText: "De 3 a 7 personas" },
  { src: img3, link:"villa", alt: "Villa", text: "Villa", additionalText: "Hasta 12 personas" },
];

function CabañasSection() {
  return (
    <motion.div
      className=' px-6 py-10 min-h-screen w-full flex flex-col lg:flex-row  '
      variants={fadeIn("down", "spring", 0.1, 3)}
    >
      {/* DIV1 */}
      <div className='flex flex-col justify-center items-center w-full lg:w-[50%] p-12'> 
            <h2 className='text-custom-green text-[2.8rem] text-center'>Descubre tu refugio perfecto en la naturaleza.</h2>

            <p className='text-dark text-[1.1rem] pb-8 text-justify '>
              Explora nuestras habitaciones a los pies de la montaña, en el centro del melocoton.
              Comodidades de lujo, y una paz inigualables. Sumérgete en una experiencia única de relajación y confort.
            </p>
            <div className='pt-6'>
            <motion.button className="bg-custom-green text-white  py-2 px-8 rounded-[1rem] shadow-md hover:bg-green-700 hover:text-yellow-500 "
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}  
                >
                    <Link href="/cabanas">
                     Ver Cabañas
                     </Link>
                </motion.button>
            </div>
      </div>
  
     {/* DIV2 */}
      <div className="flex flex-col justify-center items-center sm:flex sm:flex-row gap-4 w-full lg:w-[50%]">
        {images.map((image, index) => (
           <Link href={`/cabanas/${image.link}`} key={index}>
          <div key={index} className='relative flex flex-col  justify-center items-center group'>
            <motion.div
              className="relative overflow-hidden rounded-[10px] h-[20rem] w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-10 text-white text-center p-4">
                <h1 className='text-xl font-bold'>{image.text}</h1>
                <motion.p
                  className="mt-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {image.additionalText}
                </motion.p>
              </div>
            </motion.div>
          </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default SectionWrapper(CabañasSection, "CabañasSection");
