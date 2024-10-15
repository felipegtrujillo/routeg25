"use client";

import Image from "next/legacy/image";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import ButtonReservarMesa from "../components/common/ButtonReservarMesa";


function ReservasMesaFooter() {
  return (
<div className="relative flex flex-col justify-start items-center h-[50vh] sm:h-[30vh] w-screen text-white bg-black border-b-0.2 border-gray-400 py-4 md:py-0">
     
     <div className="flex justify-start items-center pl-6 md:pl-8 lg:pl-16 h-[50%] w-full ">
         <h3 className="text-5xl"> ¿Te gusta agendar con anticipación ?</h3>
      </div>
     
     <div className="flex flex-col sm:flex sm:flex-row justify-center items-center h-[50%] w-full pl-6 md:pl-8 lg:pl-16 gap-8 md:gap-0">
        <div className="flex justify-center sm:justify-start items-center  w-full sm:w-[50vw] xl:w-[80vw]">
            <p className=""> Contactanos para no tener imprevistos y escoger la mejor mesa según tus necesidades. ¡Agenda hora hoy y comienza a contar los días!</p>   
        </div>
     
        <div className="flex justify-center md:justify-start items-center  w-full sm:w-[50vw] md:pl-16 xl:w-[20vw]">
        <ButtonReservarMesa/>
        </div>
     
     </div>
     
     
     </div>
  );
}



export default ReservasMesaFooter;
