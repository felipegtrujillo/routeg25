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
        next: { revalidate: 604800 },
      }
    );

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();

    dataFiltrada = data.map((item) => ({
      imagen1: item.acf?.detalle1_bungalow ?? null,
      imagen2: item.acf?.detalle2_bungalow ?? null,
      imagen3: item.acf?.detalle3_bungalow ?? null,
      imagen4: item.acf?.detalle4_bungalow ?? null,
      imagen5: item.acf?.detalle5_bungalow ?? null,
      imagen6: item.acf?.detalle6_bungalow ?? null,
      imagen7: item.acf?.detalle7_bungalow ?? null,
      imagen8: item.acf?.detalle8_bungalow ?? null,
      imagen9: item.acf?.detalle9_bungalow ?? null,
      imagen10: item.acf?.detalle10_bungalow ?? null,
      precio_cabana: item.acf?.precio_cabana_bungalow ?? 'precio no disponible',
      precio_mascota: item.acf?.precio_mascota_bungalow ?? 'precio no disponible',
    }));
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }

  const cabanas = [
    'Nogal (para 3 personas)',
    'Algarrobo (para 4 personas)',
    'Ciprés (para 4 personas)',
  ];

  const caracteristicas = [
    { nombre: 'Huéspedes', valor: '3-4' },
    { nombre: 'Habitaciones', valor: '2' },
    { nombre: 'Camas', valor: '1 ó 2 de 2 plazas, de 1 ó 2 de 1 1/2' },
    { nombre: 'Cocina', valor: 'Americana Equipada' },
    { nombre: 'Estancia', valor: 'Living/comedor' },
    { nombre: 'Baños', valor: '1' },
    { nombre: 'Calefacción', valor: 'Leña o Eléctrica (según elección de cabaña)' },
    { nombre: 'Televisión', valor: '1' },
    { nombre: 'Quincho', valor: '1' },
    { nombre: 'Estacionamiento', valor: '1' },
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
        <Navbar />
        <ParallaxCabanasMain
          image="/assets/img/cabanas/bungalow3.jpeg"
          title="Bungalow"
          subtitle="De 3 a 4 personas"
          paragraph="Descubre nuestros 3 hermosos bungalows, perfectos para familias o pequeños grupos. Equipadas con 2 cómodas habitaciones, camas matrimoniales y camas de 1 1/2 plaza, todas con su ropa de cama, baño completo, TV satelital, calefacción a leña o eléctrica (según elección), cocina totalmente equipada, quincho y estacionamiento privado."
          buttonLink="#bungalow"
          buttonText="Ver Prestaciones"
          tipo="Bungalow"
          mensaje="En arrendar una cabaña Bungalow, como lo hago ?"
        />
      </div>

      <DetalleCabana
        idCabana="bungalow"
        titulo="Ideal para Familias o grupos pequeños"
        caracteristicas={caracteristicas}
        checkIn="A partir de las 12:00 hasta las 19:00"
        checkOut="Hasta las 12:00"
        lateCheckOut="Valor 50% de valor de 1 noche, salida hasta las 19:00"
        precioCabaña={primeraCabana.precio_cabana ?? 'precio no disponible'}
        precioMascota={primeraCabana.precio_mascota ?? 'precio no disponible'}
        cabañas={cabanas}
      />

      <CarouselCabanas images={images} />

      <ReservasFooter />
      <Footer />
    </div>
  );
}