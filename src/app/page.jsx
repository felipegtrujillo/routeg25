

import Hero from "../components/Hero";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MainSection from "../components/MainSection.jsx";
import RestaurantSection from "../components/RestaurantSection.jsx";
import CabañasSection from "../components/CabañasSection.jsx";
import ParallaxSection from "../components/ParallaxSection";
import Contact from "../components/common/Contact.jsx";

import Image from "next/image";

import axios from "axios";

import bg from '../../public/assets/img/front/home_front3.jpg';


/* import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.1 } },
}; */

export default async function Page() {
  const res = await axios.get("https://www.lacalchona.cl/wp-json/wp/v2/inicio");
  const dataAtencion = res.data.map((item) => ({
    titulo: item.acf ? item.acf.titulo_horario : "Título no disponible",
    horario1: item.acf ? item.acf.horario : "Horario no disponible",
    horario2: item.acf ? item.acf.horario2 : "Horario no disponible",
  }));

  return (
    <div className="relative z-0 bg-white ">
      
      <div className="relative z-1 ">
          <Image
              src={bg} // Ruta de tu imagen en el directorio `public`
              alt="Background"
              layout="fill" // Hace que la imagen ocupe todo el contenedor
              objectFit="cover" // Para que la imagen mantenga su proporción
              quality={75} // Puedes ajustar la calidad de la imagen (por defecto es 75)
              priority // Hace que la imagen tenga mayor prioridad de carga
              className="z-0"
            />
            <div className="relative z-1">
                <Navbar />
                <Hero />
           </div>
      </div>

      <MainSection />

      {/*       <motion.div key="parallax-restaurant" initial="hidden" animate="visible" exit="exit" variants={variants}> */}
      <ParallaxSection
        image="/assets/img/restaurant/cocteleria.jpg"
        paragraphText="Sabores que despiertan tus sentidos"
        titleText="Restaurant & Café"
      />
      {/*       </motion.div> */}

      <RestaurantSection data={dataAtencion} />
      {/* 
      <motion.div key="parallax-cabañas" initial="hidden" animate="visible" exit="exit" variants={variants}> */}
      <ParallaxSection
        image="/assets/img/front/piscina.jpg"
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
