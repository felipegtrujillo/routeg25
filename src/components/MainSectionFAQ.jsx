"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

import { textVariant } from "../utils/motion.js";

function mainSectionFAQ() {
  return (
    
    <div className="flex flex-col min-h-screen w-screen bg-black ">
        <div className="flex flex-col items-center justify-start  ">
           <h2 className="text-white text-[1.8rem]">Preguntas Frecuentes</h2>
           <div className=" flex flex-col items-start justify-start w-[90vw]">
             <h3 className="text-white text-[1.5rem] font-bold">Para Reservar </h3>
             <ul className="text-white text-[1.2rem] list-disc list-inside "> 
                <li>Se reserva vía transferencia con el 50% del total de la reserva.</li>
                <li>Si la reserva se realiza dentro de las 24 hrs previas a la estadía, se debe cancelar el 100% de la reserva.</li>
                <li>Adjuntar el comprobante de pago de reserva junto a los datos que solicitamos (nombre, RUT, número celular, correo electrónico, elección de cabaña; fecha ingreso y salida).</li>
                <li className="font-bold">El saldo se debe cancelar al momento de llegar al centro turístico y en ese momento se realizará la entrega de las llaves correspondientes a la cabaña arrendada.</li>
                <li>El pago de las cabañas es solo por vía transferencia o efectivo.</li>
             </ul>
             <br />
             <h3 className="text-white text-[1.5rem] font-bold">Políticas de Cancelación</h3>
              <ul className="text-white text-[1.2rem] list-disc list-inside "> 
                <li>Si se cancela la reserva antes de 5 días previos a la llegada a nuestras instalaciones, se reembolsará el 100% del abono.</li>
                <li>Si se cancela la reserva después del período antes mencionado (5 días previos), no se realiza reembolso del abono.</li>
                <li>Si la cancelación de la reserva se realiza de 5 días a 1 día previos a la fecha de ingreso, no se realizará reembolso del abono, pero se podrá reagendar la fecha a partir de 15 días de la fecha cancelada por una única vez, esto dependerá de la disponibilidad del Centro Turístico. Una vez reagendada la fecha de estadía, no se realizan reembolsos por cancelación.</li>
                <li>Si realiza su reserva dentro de los 5 días previos a su llegada y solicita la cancelación, esta no se reembolsará, pero podrá reagendar la fecha de su estadía a partir de 15 días de la fecha cancelada.</li>
                <li>Una vez realizado el ingreso al Centro Turístico, si por alguna razón los pasajeros desean retirarse con anterioridad a la fecha de salida, no se realizará devolución de dinero por los días no utilizados.</li>
                <li>Al momento de que usted transfiera su abono de reserva, esta se concreta automáticamente y se da por hecho que usted acepta las políticas de cancelación.</li>

               </ul>
           </div>
        </div>


   </div>

  );
}

export default mainSectionFAQ;
