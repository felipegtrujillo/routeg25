'use client';

import React, { useState, useEffect } from 'react';
import Socialicon from './Socialicon';
import { motion } from "framer-motion";
import Link from 'next/link'; // Importa el componente Link
import LogoSVG from '../common/LogoSVG';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); 

  return (
    <nav className={`fixed top-0 w-full h-[15vh]  z-50 bg-black bg-opacity-70 flex justify-between items-center px-3 md:p-12 md:px-8 lg:p-12 text-white transition-transform duration-300 ease-in-out
     ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>

     {/* Logo */}
     <div className=''>
      <LogoSVG heightMobile="15vh" heightTablet="15vh" heightDesktop="18vh" />
      </div>

     {/* Burger Button */}
      <div className="flex items-end justify-center relative left-[16vw] ">
        <button className="block lg:hidden p-4 text-white focus:outline-none" onClick={toggleMenu} aria-label="abrir menu">
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <ul className={`relative lg:flex lg:justify-center text-md lg:bg-transparent bg-black bg-opacity-70
        lg:translate-y-0 transition-transform transform gap-8
        ${isOpen ? 'translate-y-[128px] translate-x-[-6vw]' : 'translate-y-[-600vh] translate-x-[-40px]'}  `}>
        <li><Link href="/" className=" block  py-2 text-center hover:text-gray-400">Inicio</Link></li>
        <li><Link href="/restaurant" className="block  py-2 text-center hover:text-gray-400">Restaurant</Link></li>
        <li><Link href="/cabanas" className="block text-center py-2 hover:text-gray-400">Cabañas</Link></li>
        <li><Link href="/about" className="block py-2 text-center hover:text-gray-400">Sobre Nosotros</Link></li>
      </ul>

      {/* Boton contacto */}
      <div className="flex items-center justify-center  gap-8">
        <div className=''>
          <motion.button className="border text-custom-yellow font-bold py-2 px-4 rounded-[1rem] hover:bg-yellow-600 transition-colors"
                   whileHover={{ scale: 1.05 }}  
                   transition={{ duration: 0.3 }}  
                   onClick={() => window.open("https://wa.me/56973990301?text=Hola%21%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20La%20Calchona%20y%20sus%20servicios.", "_blank")}
                   >
                    Contacto
            </motion.button>
        </div>


        
        <div className="hidden lg:block">
          <Socialicon />
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
