import React from 'react';

import { motion } from 'framer-motion';

const ButtonReservarMesa = () => {
  const handleClick = () => {
   window.open(
  "https://wa.me/56973990301?text=%C2%A1Hola%2C%20equipo%20de%20Route%20G25%21%0AMe%20gustar%C3%ADa%20conocer%20la%20disponibilidad%20para%20reservar%20una%20mesa%20y%20saber%20qu%C3%A9%20promociones%20tienen%20disponibles.%0A%C2%A1Muchas%20gracias%21",
  "_blank"
);
  };
  
  return (
    <motion.button
      className="bg-custom-rojo text-white py-2 px-6 rounded-[1rem] shadow-md hover:bg-rojo hover:text-yellow-500"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      Reservar Mesa
    </motion.button>
  );
};

export default ButtonReservarMesa;