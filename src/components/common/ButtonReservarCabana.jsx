import React from 'react';
import { motion } from 'framer-motion';

const ButtonReservarCabana = ({tipoCabana, mensajePersonalizado }) => {

  const mensajeBase = "Hola, Me gustaria hacer una reserva";

  const handleClick = () => {
    window.open(`https://wa.me/56973990301?text=${mensajeBase} ${mensajePersonalizado}` , "_blank");
  };

  return (
    <motion.button
      className="bg-custom-rojo text-white py-2 px-6 rounded-[1rem] shadow-md hover:bg-custom-rojo hover:text-yellow-500"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      Reservar { tipoCabana}
    </motion.button>
  );
};

export default ButtonReservarCabana;