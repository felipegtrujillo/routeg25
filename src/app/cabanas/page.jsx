// app/page.tsx (o page.ts)

'use client'

import Navbar from '../../components/common/Navbar';
import HeroSections from '../../components/HeroSections.jsx';
import ReservasFooter from '../../components/common/ReservasFooter.jsx'
import Footer from '../../components/common/Footer.jsx';

import ParallaxCabanasSections from "../../components/ParallaxCabanasSections";
import MapaCabanas from "../../components/common/MapaCabanas";

export default function Page() {

  return (
    <div className="relative z-0"> 

     <div className="relative bg-cabanas bg-no-repeat bg-center h-screen  z-50"> 
       <Navbar/>
       <HeroSections idSection="#cabanas" name="Cabañas" text1="Descanso a los pies de la Montaña" text2="Alojamiento para toda la Familia" text3="Cabañas Rusticas Full Equipadas"
       buttonName="Ver Cabañas"/>
     </div>
     <ParallaxCabanasSections
        image="/assets/img/cabañas/araucaria/araucaria.jpeg"
        title="Deluxe"
        subtitle="Hasta 2 Personas"
        paragraph="Contamos con 11 cabañas dobles independientes, ideal para parejas o familias. Con cama matrimonial, TV por cable, baño en suite, y calefacción a leña (primera carga de leña de cortesía en invierno). Incluye cocina equipada, quincho privado, estacionamiento y acceso a la piscina en verano."
        buttonLink="/cabanas/deluxe"
        buttonText="Ver Habitación"
        tipo="Deluxe"
        mensaje="En arrendar una cabaña delux, como lo hago ?"
      />

      <ParallaxCabanasSections
        image="/assets/img/cabañas/familiar.jpg"
        title="Bungalow"
        subtitle="Hasta 4 Personas "
        paragraph="Descubre nuestras 3 acogedoras cabañas, perfectas para familias o pequeños grupos. Equipadas con cómodas habitaciones, Camas matrimoniales y camas 1 1/2 plaza, baño completo, TV satelital, calefacción a leña o eléctrica, y cocinas totalmente equipadas. "
        buttonLink="/cabanas/bungalow"
        buttonText="Ver Habitación"
        tipo="Bungalow"
        mensaje="En arrendar una cabaña bungalow, como lo hago ?"
      />

       <ParallaxCabanasSections
        image="/assets/img/cabañas/araucaria/2.jpeg"
        title="Villa"
        subtitle="De 5 a 11 personas "
        paragraph="Descubre nuestras 2 espectaculares casonas, ideales para grupos o familias de hasta 11 personas. Equipadas con cómodas habitaciones, baños completos, y amplios espacios comunes con chimenea y TV satelital. Disfruta de la cocina totalmente equipada, quincho con horno de barro, y acceso a la piscina en verano."
        buttonLink="cabanas/villa"
        buttonText="Ver Habitación"
        tipo="Villa"
        mensaje="En arrendar la cabaña Villa como lo hago ?"
      />
     <MapaCabanas/>
     <ReservasFooter/>
     <Footer/>
  </div>
    

  );
}
