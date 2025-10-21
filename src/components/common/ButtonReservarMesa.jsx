import React from 'react';

import { motion } from 'framer-motion';

const ButtonReservarMesa = () => {
  const handleClick = () => {
    window.open("https://wa.me/56957661602?text=Hola,%20Me%20gustaría%20hacer%20una%20reserva%20de%20mesa", "_blank");
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