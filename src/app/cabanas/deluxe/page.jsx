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
    'Guayacán',
    'Maitén',
    'Acacio',
    'Bollenar',
    'Peumo',
    'Alerce',
    'Araucaria',
    'Espino',
    'Sauce',
    'Lenga',
    'Mañio'
];

const caracteristicas = [
  { nombre: 'Huespedes', valor: "2" },
  { nombre: 'Habitaciones', valor: "1"},
  { nombre: 'Camas', valor: "1 de 2 plazas" },
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
        image="/assets/img/cabañas/duplex.jpg"
        title="Deluxe"
        subtitle="Hasta 2 personas"
        paragraph="En la calchona contamos con 11 cabañas Deluxe. Equipadas con  Con cama matrimonial, TV por cable, baño en suite, y calefacción a leña (primera carga de leña de cortesía en invierno)."
        buttonLink="#deluxe"
        buttonText="Ver Prestaciones"
        tipo="Deluxe"
        mensaje="En arrendar una cabaña Deluxe, como lo hago ?"
         />
     </div>

     <DetalleCabana idCabana="deluxe" titulo="Ideal para parejas" caracteristicas={caracteristicas}
                     checkIn="A partir de las 12:00 hasta las 19:00" checkOut="Hasta las 12:00" 
                     lateCheckOut="Valor 50% de valor de 1 noche, salida hasta las 19:00" precioAdulto="$100.000" precioMascota="10.000" cabañas={cabañas}/>


     <CarouselCabanas/>

     <ReservasFooter/>
     <Footer/>
  </div>
    

  );
}
