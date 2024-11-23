"use client";

import React from 'react';

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

function mainSectionTerminos() {
  return (
    
    <div className="flex flex-col min-h-screen w-screen bg-black ">
        <div className="flex flex-col items-center justify-start  ">
           <br/>
           <h2 className="text-white text-[1.9rem] font-bold">Reserva Cabañas</h2>
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
        <br/>
        <br/>
        <br/>
        <div className="flex flex-col items-center justify-start  ">
        <h2 className="text-white text-[1.9rem] font-bold">Reglamento Hospedaje </h2>
        <br />
        <div className=" flex flex-col items-start justify-start w-[90vw]">
        <ul className="text-white text-[1.2rem] list-disc list-inside">
            <li>El check in es desde las 12:00 hrs hasta las 19:00 hrs.Este se realiza en el restaurant.</li>
            <li>El check out es hasta las 12:00 hrs.</li>
            <li>Puedes realizar late check out hasta las 19:00 hrs. pagando el 50% del valor de una noche.</li>
            <li>Se debe de avisar al personal del centro turístico, el cual se acercará a su cabaña para realizar chequeo previo al check out; en caso de daños a los objetos y mobiliario de las cabañas, se cobrará un valor proporcional al daño.</li>
            <li>Aceptamos mascotas cancelando un adicional de $20.000 por mascota por el total de la estadía, considerando un buen comportamiento y tenencia responsable de parte de los dueños. Debe traer los objetos de uso diario de su mascota como cama, platos, bolsas de aseo, etc. No se pueden subir a las mascotas a las camas y mobiliario de la cabaña. Los daños provocados por su mascota durante la estadía serán de cargo del pasajero.</li>
            <li>No se permiten fiestas ni celebraciones que perturben la tranquilidad de los demás pasajeros.</li>
            <li>No se permite fumar dentro de las habitaciones.</li>
            <li>Está estrictamente prohibido hacer modificaciones de mobiliario en las cabañas.</li>
            <li>El uso de la piscina es exclusivo en la temporada de verano con un horario de 10:00 am a 19:00 pm (mediado de noviembre hasta mediados de abril).</li>
            <li>Se proporcionará una carga de leña de cortesía solo en temporada de invierno para calefacción. Costo de la carga de leña adicional es $10.000 (mediados de mayo hasta mediados de septiembre).</li>
            <li>Debe traer sus artículos personales como toallas, jabón, shampoo, secador de pelo, lavaloza, etc. ya que el centro turístico no hace entrega de estos artículos (las cabañas cuentan con ropa de cama para los pasajeros).</li>
            <li>El personal de las cabañas atiende de 09:30 am hasta las 19:00 pm.</li>
            <li>Los valores de hospedaje pueden variar según la temporada del año.</li>
        </ul>

           </div>
        </div>
        <br />

   </div>

  );
}

export default mainSectionTerminos;
