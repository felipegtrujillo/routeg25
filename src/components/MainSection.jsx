"use client";

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/legacy/image';

import img1 from '../../public/assets/img/front/fachada_home.jpg';
import img2 from '../../public/assets/img/front/front-vertical.jpg';
import { SectionWrapper } from '../hoc/index.js';
import { fadeIn } from '../utils/motion.js';

function Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  // Estado para detectar el tamaño de la pantalla
  const [isMobile, setIsMobile] = useState(false);

  // Hook para cambiar el estado dependiendo del tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 628); // Consideramos móvil si el ancho es menor o igual a 768px
    };

    // Detectamos el tamaño inicial
    handleResize();

    // Añadimos un listener al evento resize para detectar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Limpiamos el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col-reverse justify-center items-center xl:flex-row w-screen min-h-screen lg:h-screen relative overflow-hidden">
      {/* DIV1 TEXTOS */}
      <motion.div
        className="px-12 pb-32 pt-16 lg:py-64  flex flex-col justify-center items-start h-[40%] w-full lg:w-[40%] "
        variants={fadeIn("up", "spring", 0.1, 2)}
      >
        <h2 className="text-custom-yellow lg:text-[1.3rem] text-[1.1rem]">
          La Calchona
        </h2>

        <div ref={ref}>
          <motion.h3
            className="text-black lg:text-[2rem] text-[1.8rem]"
            initial={{ opacity: 1, clipPath: "inset(0 100% 100% 0)" }} // Comienza con el texto oculto
            animate={isInView ? { clipPath: "inset(0 0 0 0)" } : {}} // Se revela solo si está en el viewport
            transition={{ duration: 1.3, ease: "easeInOut" }} // Duración y suavidad de la animación
          >
            El escape perfecto,
            <br /> para vivir una experiencia en la naturaleza.
          </motion.h3>
        </div>

        <p className="text-black  lg:text-[1.2rem] text-[1rem] text-justify pb-">
          Somos una empresa de ecoturismo innovadora en el rubro, la cual brinda
          momentos y experiencias únicas e inolvidables para nuestros clientes a
          través del uso sustentable del medioambiente, sin comprometer el
          hermoso entorno natural que nos rodea y este se preserve al pasar del
          tiempo.
        </p>
      </motion.div>

      {/* DIV2 IMAGEN */}

      <motion.div

        variants={fadeIn("left", "spring", 0.1, 2)}
        className="relative px-12 py-[2rem] lg:py-64 flex flex-col justify-center items-start w-full lg:w-[60%]"
      >
        {isMobile ? (
          <div ref={container}
             style={{ y: lg }} > 
          <Image src={img2}  className="rounded-xl" alt="La calchona" placeholder="blur" fill />
          </div>
        ) : (
          <div>
          <Image src={img1} className="rounded-xl" alt="La calchona" placeholder="blur" fill />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Section, "vision");
