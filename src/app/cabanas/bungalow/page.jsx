// app/page.tsx (o page.ts)

import axios from 'axios';

import CarouselCabanas from '../../../components/common/CarouselCabanas.jsx';
import DetalleCabana from '../../../components/common/DetalleCabana.jsx';
import Footer from '../../../components/common/Footer.jsx';
import Navbar from '../../../components/common/Navbar.jsx';
import ReservasFooter from '../../../components/common/ReservasFooter.jsx';
import ParallaxCabanasMain from '../../../components/ParallaxCabanasMain.jsx';

export default async function Page() {

  let dataFiltrada = [];
  try {
    const res = await axios.get('https://www.administracion.lacalchona.cl/wp-json/wp/v2/cabanas?acf_format=standard');
    dataFiltrada = res.data.map(item => ({
      imagen1: item.acf ? item.acf.detalle1_bungalow : 'imagen no disponible',
      imagen2: item.acf ? item.acf.detalle2_bungalow : 'imagen no disponible',
      imagen3: item.acf ? item.acf.detalle3_bungalow : 'imagen no disponible',
      imagen4: item.acf ? item.acf.detalle4_bungalow : 'imagen no disponible',
      imagen5: item.acf ? item.acf.detalle5_bungalow : 'imagen no disponible',
      imagen6: item.acf ? item.acf.detalle6_bungalow : 'imagen no disponible',
      imagen7: item.acf ? item.acf.detalle7_bungalow : 'imagen no disponible',
      imagen8: item.acf ? item.acf.detalle8_bungalow : 'imagen no disponible',
      imagen9: item.acf ? item.acf.detalle9_bungalow : 'imagen no disponible',
      imagen10: item.acf ? item.acf.detalle10_bungalow : 'imagen no disponible',
      precio_cabana: item.acf ? item.acf.precio_cabana_bungalow : 'precio no disponible',
      precio_mascota: item.acf ? item.acf.precio_mascota_bungalow : 'precio no disponible',
    }));
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }

    const cabañas = [
      'Nogal (para 3 personas)',
      'Algarrobo (para 4 personas',
      'Ciprés (para 4 personas)' 
  ];

  
  const caracteristicas = [
    { nombre: 'Huéspedes', valor: "3-4" },
    { nombre: 'Habitaciones', valor: "2"},
    { nombre: 'Camas', valor: "1 ó 2 de 2 plazas, de 1 ó 2 de 1 1/2" },
    { nombre: 'Cocina', valor: "Americana Equipada" },
    { nombre: 'Estancia', valor: "Living/comedor" },
    { nombre: 'Baños', valor: "1" },
    { nombre: 'Calefacción', valor: "Leña o Eléctrica (según eleccion de cabaña)" },
    { nombre: 'Televisión', valor: "1" },
    { nombre: 'Quincho', valor: "1" },
    { nombre: 'Estacionamiento', valor: "1" }
  ];

  const images = dataFiltrada.length > 0 ? [
    dataFiltrada[0].imagen1,
    dataFiltrada[0].imagen2,
    dataFiltrada[0].imagen3,
    dataFiltrada[0].imagen4,
    dataFiltrada[0].imagen5,
    dataFiltrada[0].imagen6,
    dataFiltrada[0].imagen7,
    dataFiltrada[0].imagen8,
    dataFiltrada[0].imagen9,
    dataFiltrada[0].imagen10,
  
  ] : [];

  return (
    <div className="relative z-0"> 

     <div className="relative  bg-no-repeat bg-center h-screen  z-50"> 
       <Navbar/>
       <ParallaxCabanasMain
        image="/assets/img/cabanas/bungalow3.jpeg"
        title="Bungalow"
        subtitle="Hasta 4 personas"
        paragraph="Descubre nuestros 3 hermosos bungalows, perfectos para familias o pequeños grupos. Equipadas con 2 cómodas habitaciones, Camas matrimoniales y camas de 1 1/2 plaza todas con su ropa de cama, baño completo, TV satelital, calefacción a leña o eléctrica (según elección), cocina totalmente equipada, quincho y estacionamiento privado."
        buttonLink="#bungalow"
        buttonText="Ver Prestaciones"
        tipo="Bungalow"
        mensaje="En arrendar una cabaña Bungalow, como lo hago ?"
         />
     </div>

     <DetalleCabana idCabana="bungalow" titulo="Ideal para Familias o grupos pequeños" caracteristicas={caracteristicas}
                     checkIn="A partir de las 12:00 hasta las 19:00" checkOut="Hasta las 12:00" 
                     lateCheckOut="Valor 50% de valor de 1 noche, salida hasta las 19:00" precioCabaña={ dataFiltrada[0].precio_cabana }  precioMascota={ dataFiltrada[0].precio_mascota }  cabañas={cabañas}/>
     <CarouselCabanas images={images}/>

     <ReservasFooter/>

     <Footer/>
  </div>
    

  );
}
