"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ClientTransitionWrapper({
 children,
}) {

 const pathname = usePathname();
 const [isMounted, setIsMounted] = useState(false);

   console.log("console log de Client Transition Wrapper");

   /* cuando el componente se monta por primera vez */
   useEffect(() => {
    console.log('RUTA ACTUAL en el montaje:', pathname);
    setIsMounted(true);
    
    return () => {
      console.log('RUTA ACTUAL al CAMBIAR DE RUTA o DESMONTAR', pathname);
      setIsMounted(false);
    };
  }, [pathname]);

 const variants = {
   hidden: { opacity: 0, scale: 0.5 },
   visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
   exit: { opacity: 0, scale: 0.5, transition: { duration: 3 } },
 };

 return (
   <AnimatePresence mode="wait">
     {isMounted && (
       <motion.div
         key={pathname} 
         initial="hidden"
         animate="visible"
         exit="exit"
         variants={variants}
       >
         {children}
       </motion.div>
     )}
   </AnimatePresence>
 );
}
