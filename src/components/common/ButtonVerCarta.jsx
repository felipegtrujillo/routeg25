
import { motion } from 'framer-motion';
import Link from 'next/link';

const ButtonVerCarta = () => {
  return (
    <motion.button
      className="bg-custom-rojo text-white py-2 px-8 rounded-[1rem] shadow-md hover:bg-custom-rojo hover:text-yellow-500"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <a href="https://firebasestorage.googleapis.com/v0/b/lacalchona-cd046.appspot.com/o/CARTA-CAFETERIA.pdf?alt=media&token=32446689-c8f4-417b-b3ac-e759d2255e2c">
        Ver Carta
      </a>
    </motion.button>
  );
};

export default ButtonVerCarta;
