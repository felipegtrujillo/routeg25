import React from 'react';
import { motion } from 'framer-motion';

const ButtonReservarMesa = () => {
  const handleClick = () => {
    window.open("https://wa.me/56973990301?text=Hola,%20quiero%20hacer%20una%20reserva", "_blank");
  };

  return (
    <motion.button
      className="bg-custom-green text-white py-2 px-6 rounded-[1rem] shadow-md hover:bg-green-700 hover:text-yellow-500"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      Reservar Mesa
    </motion.button>
  );
};

export default ButtonReservarMesa;