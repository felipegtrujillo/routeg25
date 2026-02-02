"use client";

function DetalleCabana({ idCabana, titulo, caracteristicas, checkIn, checkOut, lateCheckOut, precioCabaña, precioAdulto, precioNiño, precioMascota, cabañas }) {
  return (
 <div id={idCabana} className="flex flex-col justify-center items-center py-10 max-w-screen min-h-screen">

   {/* Titulo */}
    <div className="flex w-[80%] h-[30%] py-20">
        <h2 className=" text-custom-yellow text-4xl flex justify-center text-center ">
            {titulo}
        </h2>
    </div>

   {/* Detalles */}
     <div className="flex flex-col justify-center items-start md:flex md:flex-row w-[80%] gap-[4rem] font-medium text-gray-400 h-[70%] ">
        <div className="flex flex-col w-[100%] md:w-[24%]">
            <h3 className="text-lg text-left">El Espacio</h3>
            <ul className="mt-4 ">
    
              {caracteristicas.map((prop, index) => (
                <li key={index} className="text-sm text-left font-bold text-black mb-1">
                    {prop.nombre}: {prop.valor}
                </li>
              ))}
            </ul>
        </div>

       <div className="flex flex-col w-[100%] md:w-[54%] gap-4">
        <div>
           <h3 className="text-lg text-left">Incluye</h3>
            <ul className="mt-4">
    
                  <li className="text-sm text-left font-bold text-black mb-1"> Primera carga de leña de cortesía (temporada invierno)</li>
                  <li className="text-sm text-left font-bold text-black mb-1"> Acceso a la piscina (temporada verano)</li>
            </ul>
        </div>
        <div>
            <h3 className="text-lg text-left">Horarios</h3>
            <ul className="mt-4">
    
                  <li className="text-sm text-left font-bold text-black mb-1"> Check-In: {checkIn}</li>
                  <li className="text-sm text-left font-bold text-black mb-1"> Check-Out: {checkOut}</li>
                  <li className="text-sm text-left font-bold text-black mb-1"> Late check out: {lateCheckOut}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-left">Precios</h3>
            <ul className="mt-4">
                  <li className="text-sm text-left font-bold text-black mb-1"> 
                    {precioCabaña ? `Por cabaña: ${precioCabaña}` : precioAdulto? `Precio Adulto: ${precioAdulto}` : 'No disponible'}
                  </li>
                  <li className="text-sm text-left font-bold text-black mb-1"> 
                    {precioNiño? `Precio Niño: ${precioNiño}` : ''}
                  </li>
                  <li className="text-sm text-left font-bold text-black mb-1"> Por mascota: {precioMascota}</li>
            </ul>
        </div>
            
       </div>

       <div className="flex flex-col w-[100%] md:w-[22%] ">
        <div>
           <h3 className="text-lg text-left">Cabañas</h3>
            <ul className="mt-4">
            {cabañas.map((name, index) => (
                  <li key={index} className="text-sm text-left font-bold text-black mb-1"> {name}</li>
               ))}
            </ul>
        </div>
       </div>

     </div>

 </div>
  );
}

export default DetalleCabana;
