export const dynamic = 'force-dynamic';

import axios from 'axios';

import CabañasSection from '../components/CabañasSection.jsx';
import Contact from '../components/common/Contact.jsx';
import Footer from '../components/common/Footer.jsx';
import Navbar from '../components/common/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import MainSection from '../components/MainSection.jsx';
import ParallaxSection from '../components/ParallaxSection';
import RestaurantSection from '../components/RestaurantSection.jsx';

export default async function Page() {

  const res = await axios.get('https://api.lacalchona.cl/wp-json/wp/v2/inicio?acf_format=standard');
  
  const dataFiltrada = res.data.map(item => ({
    titulo: item.acf ? item.acf.Titulo : 'Título no disponible',
    horario1: item.acf ? item.acf.horario1 : 'Horario no disponible',
    horario2: item.acf ? item.acf.horario2 : 'Horario no disponible',
    imagen1: item.acf ? item.acf.restaurant : 'imagen no disponible',
    imagen2: item.acf ? item.acf.cabanas : 'imagen no disponible',
  }));

  return (
    <div className="relative z-0 bg-white ">
      <div className="relative bg-hero bg-cover bg-no-repeat bg-[top_15%] sm:bg-bottom h-screen w-screen">
        <Navbar />
        <Hero />
      </div>

      <MainSection/>

        <ParallaxSection 
          image={dataFiltrada[0].imagen1} 
          paragraphText="Sabores que despiertan tus sentidos"
          titleText="Restaurant & Café"
        />

      <RestaurantSection data={dataFiltrada} />

        <ParallaxSection 
          image={dataFiltrada[0].imagen2}
          paragraphText="Descanso a los pies de la Montaña"
          titleText="Cabañas & Hospedaje"
        />

      <CabañasSection />
      <Contact />
      <Footer />
    </div>
  );
}
