"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import ButtonReservarMesa from "../components/common/ButtonReservarMesa";


function ReservasMesaFooter() {
  return (
 <div className="flex flex-col justify-start h-[30vh] w-full text-white bg-black border-b-0.2 border-gray-400">
     
     <div className="flex justify-start items-center pl-16 h-[50vh]">
         <h2 className="text-5xl"> Te gusta agendar con anticipacion ?</h2>
      </div>

     <div className="flex justify-center items-center h-[50vh] w-full">
        <div className="flex justify-start items-center pl-16 w-[80vw]">
            <p>  Contactanos para no tener imprevistos y escoger la mejor mesa segun tus necesidades. ¡Agenda hoya hoy y comienza a contar los días!</p>   
        </div>

        <div className="flex justify-start items-center pl-16 w-[20vw]">
         <ButtonReservarMesa/>
        </div>

     </div>


 </div>
  );
}

export default ReservasMesaFooter;
