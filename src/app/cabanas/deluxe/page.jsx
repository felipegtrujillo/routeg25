export const revalidate = 604800; // 7 días

import CarouselCabanas from '../../../components/common/CarouselCabanas.jsx';
import DetalleCabana from '../../../components/common/DetalleCabana.jsx';
import Footer from '../../../components/common/Footer.jsx';
import Navbar from '../../../components/common/Navbar.jsx';
import ReservasFooter from '../../../components/common/ReservasFooter.jsx';
import ParallaxCabanasMain from '../../../components/ParallaxCabanasMain.jsx';

export default async function Page() {
  let dataFiltrada = [];

  try {
    const res = await fetch(
      'https://api.lacalchona.cl/wp-json/wp/v2/cabanas?acf_format=standard',
      {
        next: { revalidate: 604800 }, // mismo valor
      }
    );

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();

    dataFiltrada = data.map((item) => ({
      imagen1: item.acf?.detalle1_deluxe ?? null,
      imagen2: item.acf?.detalle2_deluxe ?? null,
      imagen3: item.acf?.detalle3_deluxe ?? null,
      imagen4: item.acf?.detalle4_deluxe ?? null,
      imagen5: item.acf?.detalle5_deluxe ?? null,
      imagen6: item.acf?.detalle6_deluxe ?? null,
      imagen7: item.acf?.detalle7_deluxe ?? null,
      imagen8: item.acf?.detalle8_deluxe ?? null,
      imagen9: item.acf?.detalle9_deluxe ?? null,
      imagen10: item.acf?.detalle10_deluxe ?? null,
      precio_cabana: item.acf?.precio_cabana_deluxe ?? 'precio no disponible',
      precio_mascota: item.acf?.precio_mascota_deluxe ?? 'precio no disponible',
    }));
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }

  const cabanas = [
    'Guayacán','Maitén','Acacio','Bollenar','Peumo',
    'Alerce','Araucaria','Espino','Sauce','Lenga','Mañio'
  ];

  const caracteristicas = [
    { nombre: 'Huéspedes', valor: "2" },
    { nombre: 'Habitaciones', valor: "1"},
    { nombre: 'Camas', valor: "1 de 2 plazas" },
    { nombre: 'Cocina', valor: "Americana Equipada" },
    { nombre: 'Estancia', valor: "Living/comedor" },
    { nombre: 'Baños', valor: "1" },
    { nombre: 'Calefacción', valor: "Leña o Eléctrica" },
    { nombre: 'Televisión', valor: "1" },
    { nombre: 'Quincho', valor: "1" },
    { nombre: 'Estacionamiento', valor: "1" }
  ];

  const primeraCabana = dataFiltrada[0] ?? {};

  const images = [
    primeraCabana.imagen1,
    primeraCabana.imagen2,
    primeraCabana.imagen3,
    primeraCabana.imagen4,
    primeraCabana.imagen5,
    primeraCabana.imagen6,
    primeraCabana.imagen7,
    primeraCabana.imagen8,
    primeraCabana.imagen9,
    primeraCabana.imagen10,
  ].filter(Boolean);

  return (
    <div className="relative z-0"> 
      <div className="relative bg-no-repeat bg-center h-screen z-50"> 
        <Navbar/>
        <ParallaxCabanasMain
          image="/assets/img/cabanas/balcon.jpeg"
          title="Deluxe"
          subtitle="Hasta 2 personas"
          paragraph="Contamos con 11 cabañas dobles independientes..."
          buttonLink="#deluxe"
          buttonText="Ver Prestaciones"
          tipo="Deluxe"
          mensaje="En arrendar una cabaña Deluxe, como lo hago ?"
        />
      </div>

      <DetalleCabana 
        idCabana="deluxe" 
        titulo="Ideal para parejas" 
        caracteristicas={caracteristicas}
        checkIn="A partir de las 12:00 hasta las 19:00" 
        checkOut="Hasta las 12:00" 
        lateCheckOut="Valor 50% de valor de 1 noche, salida hasta las 19:00" 
        precioCabaña={primeraCabana.precio_cabana}
        precioMascota={primeraCabana.precio_mascota}
        cabañas={cabanas}
      />

      <CarouselCabanas images={images}/>
      <ReservasFooter/>
      <Footer/>
    </div>
  );
}