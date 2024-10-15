"use client";

import { motion } from "framer-motion";


function ReservasFooter() {
  return (
 <div className="flex flex-col justify-start items-center h-[55vh] sm:h-[30vh] w-screen text-white bg-black border-b-0.2 border-gray-400 overflow-hidden">
     
     <div className="flex justify-start items-center pl-6 md:pl-8 lg:pl-16 h-[50vh] w-full pt-8">
         <h2 className="text-5xl"> No esperes más, reserva hoy mismo.</h2>
      </div>

     <div className="flex flex-col sm:flex sm:flex-row justify-center items-center h-[60vh] w-full pl-6 md:pl-8 lg:pl-16 gap-6 md:gap-0">
        <div className="flex justify-center sm:justify-start items-center  w-full sm:w-[60vw] xl:w-[80vw]">
            <p className="">  Ven a relajarte en la naturaleza. ¡Agenda tu estadía en cabañas la calchona hoy y comienza a contar los días!</p>   
        </div>

        <div className="flex justify-center md:justify-start items-center  w-full sm:w-[40vw] md:pl-16 xl:w-[20vw]">
        <motion.button className="bg-custom-green text-white  py-2 px-6 rounded-[1rem] shadow-md hover:bg-green-700 hover:text-yellow-500  "
                   whileHover={{ scale: 1.05 }}  
                   transition={{ duration: 0.3 }}  
                   onClick={() => window.open("https://wa.me/56973990301?text=Hola,%20me%20gustaría%20obtener%20ayuda%20sobre%20una%20reserva%20de%20cabaña", "_blank")}
                   >
                    Reserva Hoy
                </motion.button>
        </div>

     </div>


 </div>
  );
}

export default ReservasFooter;
