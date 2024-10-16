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
       buttonName="Ver más"/>
     </div>
     <ParallaxCabanasSections
        image="/assets/img/cabanas/araucaria/araucaria.jpeg"
        title="Deluxe"
        subtitle="Hasta 2 Personas"
        paragraph="Contamos con 11 cabañas dobles independientes, ideal para parejas. Con cama matrimonial con ropa de cama, TV satelital por cable, baño en suite y calefacción a leña ó eléctrica según elección de cabaña. Incluye cocina full equipada, quincho y estacionamiento privado."
        buttonLink="/cabanas/deluxe"
        buttonText="Ver Habitación"
        tipo="Deluxe"
        mensaje="En arrendar una cabaña delux, como lo hago ?"
      />

      <ParallaxCabanasSections
        image="/assets/img/cabanas/bungalow_front.jpeg"
        title="Bungalow"
        subtitle="Hasta 4 Personas "
        paragraph="Descubre nuestros 3 hermosos bungalows, perfectos para familias o pequeños grupos. Equipadas con 2 cómodas habitaciones, Camas matrimoniales y camas de 1 1/2 plaza todas con su ropa de cama, baño completo, TV satelital, calefacción a leña o eléctrica (según elección), cocina totalmente equipadas, quincho y estacionamiento privado."
        buttonLink="/cabanas/bungalow"
        buttonText="Ver Habitación"
        tipo="Bungalow"
        mensaje="En arrendar una cabaña bungalow, como lo hago ?"
      />

       <ParallaxCabanasSections
        image="/assets/img/cabanas/familiar.jpg"
        title="Villa"
        subtitle="De 5 a 11 personas "
        paragraph="Descubre nuestras 2 espectaculares casonas, ideales para grupos o familias de 5 hasta 11 personas. Equipadas con
               cómodas y amplias habitaciones, camas matrimoniales y camas de 1/2 plazas con su respectiva ropa de cama, baños completos, y amplios espacios comunes
               con chimenea, bosca y TV satelital, amplias cocinas totalmente equipadas, quincho con horno de barro según elección y estacionamiento privado."
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
