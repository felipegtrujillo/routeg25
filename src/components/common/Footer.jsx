
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import { IoRestaurant } from 'react-icons/io5';
import { MdOutlineCabin } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';

import { slideIn } from '../../utils/motion.js';
import LogoSVGBY from './LogoSVGBY.jsx';

const Footer = () => {

  return (
    <div className=" pt-4 pb-4 lg:pt-8 lg:pb-8 lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:gap-4 lg:pb:4 h-full w-full bg-black font-montserrat  text-[1.6rem] overflow-hidden">

            {/* LOGO */}
              <motion.div
                 variants={slideIn('left', "tween", 0.2, 1)} 
                 initial="hidden" 
                 animate="show"
                className=""
              >

                <LogoSVGBY heightMobile="17vh"  heightTablet="15vh" heightDesktop ="80vh"/>
              </motion.div>

            {/* DIRECCION */}
            <motion.div
              variants={slideIn('left', "tween", 0.2, 1)} 
                 initial="hidden" 
                 animate="show"
              className='flex items-start justify-center'
            >
            <div className='flex flex-col items-center lg:items-start justify-center text-[1rem]  text-white gap-2'>

                <div>
                <h2 className=' font-playfair font-semibold pt-2 text-[1.5rem] text-center lg:text-start '>Dirección</h2>
                </div>

               <div className='flex items-center justify-center '>
                  <TiLocation size={52} className='text-custom-rojo' /> 
                  <p className='ml-4 font-montserrat text-[1rem]'>
                    Camino al Volcán 28.700, San José de Maipo, El Melocotón, RM.
                  </p>
                </div>
 
                <div className='flex items-center justify-center lg:justify-start '>
                  <MdOutlineCabin size={30} className='text-custom-rojo' /> 
                  <p className='ml-4 font-montserrat text-[1rem]'>
                    contacto@routeg25restaurant.cl
                  </p>
                </div>

             </div>
            </motion.div>

    
          {/* ENLANCES */}
              <motion.div
                variants={slideIn('left', "tween", 0.2, 1)} 
                initial="hidden" 
                animate="show" 
                className='flex items-start justify-center'
              >
               <div className=' text-[1rem]  text-white'>
                <h2 className=' font-playfair font-semibold pt-2 text-white text-[1.5rem] text-center lg:text-start'>Enlaces</h2>
                      {/* Navigation Menu */}
                    <ul
                      className={`flex flex-col justify-center items-center lg:items-start text-[1rem]  text-white `}
                    >
                      <li><Link href="/" className="block px-2 py-2 text-center hover:text-gray-400  ">Inicio</Link></li>
                      <li><Link href="/restaurant" className="block px-2 py-2 text-center hover:text-gray-400">Restaurant</Link></li>
                      <li><Link href="/cabanas" className="block px-2 text-center py-2 hover:text-gray-400">Cabañas</Link></li>
                      <li><Link href="/about" className="block px-2 py-2 text-center hover:text-gray-400">Sobre Nosotros</Link></li>
                    </ul>
                    </div>

              </motion.div>

              {/* AYUDA */}
            <motion.div
                variants={slideIn('left', "tween", 0.2, 1)} 
                initial="hidden" 
                 animate="show" 
                className='flex items-start justify-center'
              >
               <div className=' text-[1rem]  text-white'>
                <h2 className=' font-playfair font-semibold pt-2 text-white text-[1.5rem] text-center lg:text-start'>Ayuda</h2>
                      {/* Navigation Menu */}
                    <ul
                      className={`flex flex-col justify-center items-center lg:items-start text-[1rem]  text-white `}
                    >
                      <li><Link href="/ayuda/terminos" className="block px-2 py-2 text-center hover:text-gray-400  ">Terminos y condiciones</Link></li>
                      <li><Link href="/ayuda/FAQ" className="block px-2 py-2 text-center hover:text-gray-400">Preguntas Frecuentes</Link></li>

                    </ul>
                    </div>

              </motion.div>

            {/* REDES SOCIALES */}
                <motion.div
                  variants={slideIn('left', "tween", 0.2, 1)} 
                  initial="hidden" 
                  animate="show" 
                  className='flex items-start justify-center' >

                 <div className='flex flex-col text-[1rem] text-white gap-2'>   
                  <div>     
                  <h2 className='text-white font-playfair font-semibold pt-2  text-[1.5rem] text-center lg:text-star'>Redes Sociales</h2>
                  </div> 
                   <div className='flex gap-8'>
                    <div className='flex items-center pb-1'>
                        <a
                        href="https://www.instagram.com/lacalchona.cl?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                        className="text-2xl  hover:text-white transition-colors"
                      >
                        <FaInstagram size={25} className='text-custom-rojo' />
                      </a>
                        
                    </div>
                  
                    <div className='flex items-center pb-1'>
                      <a
                        href="https://www.facebook.com/profile.php?id=100090006671910&mibextid=LQQJ4d"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                        className="text-2xl text-white hover:text-gray-800 transition-colors"
                      >
                        <FaFacebookF  size={25} className='text-custom-rojo'/>
                      
                      </a>
                    
                    </div>
                    <div className='flex items-center pb-1'>
                        <a
                          href="https://www.tiktok.com/@lacalchona.cl?_t=8f3pUvXhDTq&_r=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="TikTok"
                          className="text-2xl text-white hover:text-gray-800 transition-colors"
                        >
                          <FaTiktok size={25} className='text-custom-rojo'/>
                        </a>
                        
                    </div>
                   </div>
                </div>
              </motion.div>
    </div>
  );
}

export default Footer;
