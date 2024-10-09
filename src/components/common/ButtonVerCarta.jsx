import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ButtonVerCarta = () => {
  return (
    <motion.button
      className="bg-custom-green text-white py-2 px-8 rounded-[1rem] shadow-md hover:bg-green-700 hover:text-yellow-500"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/restaurant/#cartaPDF">
        Ver Carta
      </Link>
    </motion.button>
  );
};

export default ButtonVerCarta;
