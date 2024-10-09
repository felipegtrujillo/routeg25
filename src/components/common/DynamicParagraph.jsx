'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const DynamicParagraph = ( { text1, text2, text3 }) => {
  const [index, setIndex] = useState(0);

  const texts = [
    text1,
    text2,
    text3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); // Cambia de texto cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, [texts.length]);

  return (
    <motion.div
     className='mb-6 mx-4 text-gray-300 text-center text-[1.2rem]  md:text-[1.5rem]  px-4 font-playfair'
      key={index}
      initial={{ opacity: 0, translateY: -20 }} // Comienza ligeramente desplazado hacia arriba
      animate={{ opacity: 1, translateY: 0 }} // Aumenta la opacidad y vuelve a la posición original
      exit={{ opacity: 0, translateY: 20 }} // Desaparece y se desplaza hacia abajo
      transition={{ duration: 1 }} // Duración de la transición
    >
      <p>{texts[index]}</p>
    </motion.div>
  );
};

export default DynamicParagraph;
