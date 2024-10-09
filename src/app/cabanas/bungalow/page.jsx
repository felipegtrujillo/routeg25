// app/page.tsx (o page.ts)

'use client'

import Navbar from '../../../components/common/Navbar.jsx';
import Footer from '../../../components/common/Footer.jsx';
import ParallaxCabanasMain from "@/components/ParallaxCabanasMain.jsx";

import DetalleCabana from "@/components/common/DetalleCabana.jsx";
import CarouselCabanas from "@/components/common/CarouselCabanas.jsx";

import ReservasFooter from '@/components/common/ReservasFooter.jsx';

export default function Page() {

    const cabañas = [
      'Nogal(para 3 personas)',
      'Algarrobo (para 4 personas',
      'Ciprés( para 4 personas)' 
  ];

  
  const caracteristicas = [
    { nombre: 'Huespedes', valor: "4" },
    { nombre: 'Habitaciones', valor: "2"},
    { nombre: 'Camas', valor: "1 de 2 plazas, de 1 a 2 de 1/2" },
    { nombre: 'Cocina', valor: "Americana Equipada" },
    { nombre: 'Comedor', valor: "Living/comedor" },
    { nombre: 'Living', valor: "Living/comedor" },
    { nombre: 'Baños', valor: "1" },
    { nombre: 'Calefacción', valor: "Leña o Electrica" },
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
        paragraph="Descubre nuestras 3 lujosos Bungalow para hasta 4 personas, perfectas para grupos o familias. Equipadas con wifi, TV Led, kitchenette completa, sala de estar, y terraza privada frente al mar. Disfruta además de piscina, sauna, hot tub y masajes."
        buttonLink="#bungalow"
        buttonText="Ver Prestaciones"
        tipo="Bungalow"
        mensaje="En arrendar una cabaña Bungalow, como lo hago ?"
         />
     </div>

     <DetalleCabana idCabana="bungalow" titulo="Ideal para Familias o grupos pequeños" caracteristicas={caracteristicas}
                     checkIn="A partir de las 12:00 hasta las 19:00" checkOut="Hasta las 12:00" 
                     lateCheckOut="Valor 50% de valor de 1 noche, salida hasta las 19:00" precioAdulto="$100.000" precioMascota="10.000" cabañas={cabañas}/>
     <CarouselCabanas/>

     <ReservasFooter/>

     <Footer/>
  </div>
    

  );
}
