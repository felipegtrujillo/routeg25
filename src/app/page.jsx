

import Hero from '../components/Hero.jsx';
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';
import MainSection from '../components/MainSection.jsx';
import RestaurantSection from '../components/RestaurantSection.jsx';
import CabañasSection from '../components/CabañasSection.jsx';
import ParallaxSection from '../components/ParallaxSection';
import Contact from "../components/common/Contact.jsx";

import axios from 'axios';

/* import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.1 } },
}; */

export default async function Page() {

  const res = await axios.get('https://www.lacalchona.cl/wp-json/wp/v2/inicio?acf_format=standard');
  const dataFiltrada = res.data.map(item => ({
    titulo: item.acf ? item.acf.titulo_horario : 'Título no disponible',
    horario1: item.acf ? item.acf.horario : 'Horario no disponible',
    horario2: item.acf ? item.acf.horario2 : 'Horario no disponible',
    imagen1: item.acf ? item.acf.restaurant : 'imagen no disponible',
    imagen2: item.acf ? item.acf.cabanas : 'imagen no disponible',
  }));

  return (
    <div className="relative z-0 bg-white ">
      <div className="relative bg-hero bg-no-repeat bg-center h-screen">
        <Navbar />
        <Hero />
      </div>

      <MainSection />

{/*       <motion.div key="parallax-restaurant" initial="hidden" animate="visible" exit="exit" variants={variants}> */}
        <ParallaxSection 
          image={dataFiltrada[0].imagen1} /*  "/assets/img/restaurant/cocteleria.jpg" */
          paragraphText="Sabores que despiertan tus sentidos"
          titleText="Restaurant & Café"
        />
{/*       </motion.div> */}

      <RestaurantSection data={dataFiltrada} />
{/* 
      <motion.div key="parallax-cabañas" initial="hidden" animate="visible" exit="exit" variants={variants}> */}
        <ParallaxSection 
          image={dataFiltrada[0].imagen2}
          paragraphText="Descanso a los pies de la Montaña"
          titleText="Cabañas & Hospedaje"
        />
{/*       </motion.div> */}

      <CabañasSection />
      <Contact />
      <Footer />
    </div>
  );
}
