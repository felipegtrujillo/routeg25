"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";

import img1 from '../../public/assets/img/menu/bebidas1.jpg';
import img2 from '../../public/assets/img/menu/plato.jpg';
import img3 from '../../public/assets/img/menu/pie_limon.jpg';


function CartaPre() {
  return (
 <div className="grid grid-cols-1 xl:grid-cols-3 justify-center items-center w-full h-[40vh]">

    <div className="relative col-span-1 h-[90%]  bg-gray-800 mx-1 flex justify-center items-center overflow-hidden">
        <Image
          src={img1}
          alt="Bebidas & Cocktails"

          className="objet-cover  z-0 opacity-80"
        />

        <div className="absolute inset-0 flex justify-center items-center m-4 border-0.2 border-white">
         <h2 className="text-2xl text-white"> Bebidas & cockteils </h2>
        </div>

    </div>


    <div className="relative col-span-1 h-[90%] bg-gray-800 mx-1 flex justify-center items-center overflow-hidden">
        <Image
          src={img2}
          alt="Entradas & Fondos"

          className="objet-cover  z-0 opacity-80"
        />

        <div className="absolute inset-0 flex justify-center items-center m-4 border-0.2 border-white">
         <h2 className="text-2xl text-white"> Entradas & Fondos </h2>
        </div>
        
    </div>

    <div className="relative col-span-1 h-[90%] bg-gray-800 mx-1 flex justify-center items-center overflow-hidden">
        <Image
          src={img3}
          alt="Postres & Cafeteria"

          className="objet-cover  z-0 opacity-80"
        />

        <div className="absolute inset-0 flex justify-center items-center m-4 border-0.2 border-white">
         <h2 className="text-2xl text-white"> Postres & Cafeteria</h2>
        </div>
        
    </div>


 </div>
  );
}

export default CartaPre;
