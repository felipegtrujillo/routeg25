"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";


function ReservasFooter() {
  return (
 <div className="flex flex-col justify-start h-[30vh] w-full text-white bg-black border-b-0.2 border-gray-400">
     
     <div className="flex justify-start items-center pl-16 h-[50vh]">
         <h2 className="text-5xl"> No esperes más, reserva hoy mismo.</h2>
      </div>

     <div className="flex justify-center items-center h-[50vh] w-full">
        <div className="flex justify-start items-center pl-16 w-[80vw]">
            <p>  Ven a relajarte a en la naturaleza. ¡Agenda tu estadía en cabañas la calchona hoy y comienza a contar los días!</p>   
        </div>

        <div className="flex justify-start items-center pl-16 w-[20vw]">
        <motion.button className="bg-custom-green text-white  py-2 px-6 rounded-[1rem] shadow-md hover:bg-green-700 hover:text-yellow-500  "
                   whileHover={{ scale: 1.05 }}  
                   transition={{ duration: 0.3 }}  
                   onClick={() => window.open("https://wa.me/549123456789?text=Hola,%20quiero%20hacer%20una%20reserva", "_blank")}
                   >
                    Reserva Hoy
                </motion.button>
        </div>

     </div>


 </div>
  );
}

export default ReservasFooter;
