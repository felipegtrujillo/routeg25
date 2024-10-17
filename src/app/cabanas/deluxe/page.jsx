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
          imagen1: item.acf ? item.acf.detalle1_deluxe : 'imagen no disponible',
          imagen2: item.acf ? item.acf.detalle2_deluxe : 'imagen no disponible',
          imagen3: item.acf ? item.acf.detalle3_deluxe : 'imagen no disponible',
          imagen4: item.acf ? item.acf.detalle4_deluxe : 'imagen no disponible',
          imagen5: item.acf ? item.acf.detalle5_deluxe : 'imagen no disponible',
          imagen6: item.acf ? item.acf.detalle6_deluxe : 'imagen no disponible',
          imagen7: item.acf ? item.acf.detalle7_deluxe : 'imagen no disponible',
          imagen8: item.acf ? item.acf.detalle8_deluxe : 'imagen no disponible',
          imagen9: item.acf ? item.acf.detalle9_deluxe : 'imagen no disponible',
          imagen10: item.acf ? item.acf.detalle10_deluxe : 'imagen no disponible',
        }));
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }

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
        { nombre: 'Huéspedes', valor: "2" },
        { nombre: 'Habitaciones', valor: "1"},
        { nombre: 'Camas', valor: "1 de 2 plazas" },
        { nombre: 'Cocina', valor: "Americana Equipada" },
        { nombre: 'Estancia', valor: "Living/comedor" },
        { nombre: 'Baños', valor: "1" },
        { nombre: 'Calefacción', valor: "Leña o Eléctrica (según elección de cabaña)" },
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
      <div className="relative bg-no-repeat bg-center h-screen z-50"> 
        <Navbar/>
        <ParallaxCabanasMain
          image="/assets/img/cabanas/balcon.jpeg"
          title="Deluxe"
          subtitle="Hasta 2 personas"
          paragraph="Contamos con 11 cabañas dobles independientes, ideal para parejas. Con cama matrimonial con ropa de cama, TV satelital por cable, baño en suite y calefacción a leña ó eléctrica según elección de cabaña. Incluye cocina full equipada, quincho y estacionamiento privado."
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
        precioCabaña="$100.000 por noche" 
        precioMascota="$20.000" 
        cabañas={cabañas}
      />

      <CarouselCabanas images={images}/>

      <ReservasFooter/>
      <Footer/>
    </div>
  );
}
