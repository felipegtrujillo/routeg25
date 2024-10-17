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
    const res = await axios.get('https://www.lacalchona.cl/wp-json/wp/v2/cabanas?acf_format=standard');
    dataFiltrada = res.data.map(item => ({
      imagen1: item.acf ? item.acf.detalle1_villa: 'imagen no disponible',
      imagen2: item.acf ? item.acf.detalle2_villa: 'imagen no disponible',
      imagen3: item.acf ? item.acf.detalle3_villa: 'imagen no disponible',
      imagen4: item.acf ? item.acf.detalle4_villa: 'imagen no disponible',
      imagen5: item.acf ? item.acf.detalle5_villa : 'imagen no disponible',
      imagen6: item.acf ? item.acf.detalle6_villa: 'imagen no disponible',
      imagen7: item.acf ? item.acf.detalle7_villa: 'imagen no disponible',
      imagen8: item.acf ? item.acf.detalle8_villa: 'imagen no disponible',
      imagen9: item.acf ? item.acf.detalle9_villa : 'imagen no disponible',
      imagen10: item.acf ? item.acf.detalle10_villa: 'imagen no disponible'
    }));
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }


  const cabañas = [
    'Roble (de 5 a 7 personas)',
    'Arrayán (de 7 a 11 personas)'

];

const caracteristicas = [
  { nombre: 'Huéspedes', valor: "5 a 11 personas" },
  { nombre: 'Habitaciones', valor: "4 a 5"},
  { nombre: 'Camas', valor: "3 a 4 de 2 plazas, 3 a 4 de 1 ½ plaza" },
  { nombre: 'Cocina', valor: "Americana Equipada" },
  { nombre: 'Comedor', valor: "Independiente" },
  { nombre: 'Living', valor: "Independiente" },
  { nombre: 'Baños', valor: "2 a 4" },
  { nombre: 'Calefacción', valor: "Leña" },
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
        image="/assets/img/cabanas/villa8.jpeg"
        title="Villa"
        subtitle="De 5 a 11 personas"
        paragraph="Descubre nuestras 2 espectaculares casonas, ideales para grupos o familias de 5 hasta 11 personas. Equipadas con
               cómodas y amplias habitaciones, camas matrimoniales y camas de 1 y 1/2 plazas con su respectiva ropa de cama, baños completos, y amplios espacios comunes
               con chimenea, bosca y TV satelital, amplias cocinas totalmente equipadas, quincho con horno de barro según elección y estacionamiento privado."
        buttonLink="#villa"
        buttonText="Ver Prestaciones"
        tipo="Villa"
        mensaje="En arrendar una cabaña tipo Villa, como lo hago ?"
        
         />
     </div>

     <DetalleCabana idCabana="villa" titulo="Ideal para familias o grupos grandes" caracteristicas={caracteristicas}
                     checkIn="A partir de las 12:00 hasta las 19:00" checkOut="Hasta las 12:00" 
                     lateCheckOut="Valor 50% de valor de 1 noche, salida hasta las 19:00" precioAdulto="$30.000 por noche" precioNiño="$20.000 por noche (2 a 10 años)" precioMascota="$20.000 por total de estadia" cabañas={cabañas}/>

     <CarouselCabanas images={images}/>

     <ReservasFooter/>
     <Footer/>
  </div>
    

  );
}
