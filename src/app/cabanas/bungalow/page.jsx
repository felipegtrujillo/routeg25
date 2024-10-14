// app/page.tsx (o page.ts)

'use client'

import Navbar from '../../../components/common/Navbar.jsx';
import Footer from '../../../components/common/Footer.jsx';
import ParallaxCabanasMain from "../../../components/ParallaxCabanasMain.jsx";

import DetalleCabana from "../../../components/common/DetalleCabana.jsx";
import CarouselCabanas from "../../../components/common/CarouselCabanas.jsx";

import ReservasFooter from '../../../components/common/ReservasFooter.jsx';

export default function Page() {

    const cabañas = [
      'Nogal (para 3 personas)',
      'Algarrobo (para 4 personas',
      'Ciprés(para 4 personas)' 
  ];

  
  const caracteristicas = [
    { nombre: 'Huespedes', valor: "4" },
    { nombre: 'Habitaciones', valor: "2"},
    { nombre: 'Camas', valor: "1 ó 2 de 2 plazas, de 1 ó 2 de 1 1/2" },
    { nombre: 'Cocina', valor: "Americana Equipada" },
    { nombre: 'Comedor', valor: "Living/comedor" },
    { nombre: 'Living', valor: "Living/comedor" },
    { nombre: 'Baños', valor: "1" },
    { nombre: 'Calefacción', valor: "Leña o Electrica (según eleccion de cabaña)" },
    { nombre: 'Televisión', valor: "1" },
    { nombre: 'Barra', valor: "No tiene" },
    { nombre: 'Sala de juegos', valor: "No tiene"},
    { nombre: 'Quincho', valor: "1" },
    { nombre: 'Estacionamiento', valor: "1" }
  ];

  return (
    <div className="relative z-0"> 

     <div className="relative  bg-no-repeat bg-center h-screen  z-50"> 
       <Navbar/>
       <ParallaxCabanasMain
        image="/assets/img/cabañas/familiar.jpg"
        title="Bungalow"
        subtitle="Hasta 4 personas"
        paragraph="Descubre nuestros 3 hermosos bungalows, perfectos para familias o pequeños grupos. Equipadas con 2 cómodas habitaciones, Camas matrimoniales y camas de 1 1/2 plaza todas con su ropa de cama, baño completo, TV satelital, calefacción a leña o eléctrica (según elección), cocina totalmente equipadas, quincho y estacionamiento privado."
        buttonLink="#bungalow"
        buttonText="Ver Prestaciones"
        tipo="Bungalow"
        mensaje="En arrendar una cabaña Bungalow, como lo hago ?"
         />
     </div>

     <DetalleCabana idCabana="bungalow" titulo="Ideal para Familias o grupos pequeños" caracteristicas={caracteristicas}
                     checkIn="A partir de las 12:00 hasta las 19:00" checkOut="Hasta las 12:00" 
                     lateCheckOut="Valor 50% de valor de 1 noche, salida hasta las 19:00" precioAdulto="$110.000 - $120.000" precioMascota="20.000" cabañas={cabañas}/>
     <CarouselCabanas/>

     <ReservasFooter/>

     <Footer/>
  </div>
    

  );
}
