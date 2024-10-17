"use client";

import React from 'react';

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

function mainSectionFAQ() {
  return (
    
    <div className="flex flex-col min-h-screen w-screen bg-black ">
        <div className="flex flex-col items-center justify-start  ">
           <h2 className="text-white text-[1.8rem] font-bold">Preguntas Frecuentes</h2>
           <br />
           <div className=" flex flex-col items-start justify-start w-[90vw]">
             
             <ul className="text-white text-[1.2rem] list-disc list-inside "> 
                <li className="font-bold">¿Cuando empieza la temporada de piscina?</li>
                <p>Entre octubre y noviembre.</p>
                <li className="font-bold">¿El beneficio del 10% de descuento en el restaurant puedo usarlo después de realizar el check out?</li>
                <p>No, una vez realizado el check out se pierde el beneficio del 10% de descuento en el restaurant.</p>
                <li className="font-bold">¿Qué artículos debo llevar al hacer uso de cabañas?</li>
                <p>Te recomendamos traer artículos personales como toallas, shampoo, bálsamo, secador de pelo, recarga de papel higiénico, lavaloza, etc.</p>
                <li className="font-bold">¿Se aceptan mascotas??</li>
                <p>Si, para hospedaje estas deben cancelar $20.000 por el total de la estadía, en cuanto restaurant somos pet friendly.</p>

             </ul>
             <br />

           </div>
        </div>


   </div>

  );
}

export default mainSectionFAQ;
