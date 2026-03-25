export const revalidate = 604800; // 7 días

import CabañasSection from '../components/CabañasSection.jsx';
import Contact from '../components/common/Contact.jsx';
import Footer from '../components/common/Footer.jsx';
import Navbar from '../components/common/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import MainSection from '../components/MainSection.jsx';
import ParallaxSection from '../components/ParallaxSection';
import RestaurantSection from '../components/RestaurantSection.jsx';

export default async function Page() {
  let dataFiltrada = [];

  try {
    const res = await fetch(
      'https://api.lacalchona.cl/wp-json/wp/v2/inicio?acf_format=standard',
      {
        next: { revalidate: 604800 },
      }
    );

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json();

    dataFiltrada = data.map((item) => ({
      titulo: item.acf?.Titulo ?? 'Título no disponible',
      horario1: item.acf?.horario1 ?? 'Horario no disponible',
      horario2: item.acf?.horario2 ?? 'Horario no disponible',
      imagen1: item.acf?.restaurant ?? null,
      imagen2: item.acf?.cabanas ?? null,
    }));
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }

  const inicio = dataFiltrada[0] ?? {};

  return (
    <div className="relative z-0 bg-white">
      <div className="relative bg-hero bg-cover bg-left sm:bg-bottom h-screen w-screen">
        <Navbar />
        <Hero />
      </div>

      <MainSection />

      <ParallaxSection
        image={inicio.imagen1}
        paragraphText="Sabores que despiertan tus sentidos"
        titleText="Restaurant & Café"
      />

      <RestaurantSection data={dataFiltrada} />

      <ParallaxSection
        image={inicio.imagen2}
        paragraphText="Descanso a los pies de la Montaña"
        titleText="Cabañas & Hospedaje"
      />

      <CabañasSection />
      <Contact />
      <Footer />
    </div>
  );
}