

'use client';

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const MiLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  console.log("noentiendo");
  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);  // Desplaza la ventana al inicio de la página
  }, [pathname]);  // Esto se ejecuta cada vez que cambia la ruta

  // Variantes de la animación
  const variants = {
    hidden: { 
      scale: 0.5, 
      opacity: 1 
    },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.8 } // Duración de la animación
    },
    exit: { 
      scale: 0, 
      opacity: 0.5, 
      transition: { duration: 1 } 
    },
  };

  return (
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        className="h-full"
      >
        {children}
      </motion.div>

  );
};

export default MiLayout;
