import { motion } from 'framer-motion';
import Image from 'next/image';

import img4 from '../../public/assets/img/cabanas/bungalow_front.jpeg';
import img5 from '../../public/assets/img/front/about1.jpg';
import img6 from '../../public/assets/img/front/about3.jpg';
import img1 from '../../public/assets/img/front/about4.jpg';
import img2 from '../../public/assets/img/front/home_front2.jpg';
import img3 from '../../public/assets/img/restaurant/servicio.jpeg';
import { SectionWrapper } from '../hoc';
import {
  fadeImg,
  fadeIn,
} from '../utils/motion.js';

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
     <div className='overflow-hidden'>
      <div className='flex justify-center items-center'>
       <h3 className="text-custom-rojo text-[2.4rem] lg:text-[2.4rem] pb-2 text-center ">Galería del Imágenes</h3>
      </div>
    <motion.div
      className="sm:px-8 px-4 sm:py-16 py-10 grid grid-col-1 lg:grid-cols-3 gap-4 mx-2 overflow-auto"
      variants={fadeIn('left', 'spring', 0.1, 3)}
    >

      {images.map((img, index) => (
              <motion.div key={index+1}  className="w-full h-[340px] object-cover "
              variants={fadeImg("right", "spring", index * 0.01 , 3)}>
        <Image
          key={index}
          src={img}
          alt=""
          className="w-full h-full rounded-[2rem] "
        />
         </motion.div>
      ))}

    </motion.div>
    </div>
  );
}

export default SectionWrapper(Gallery, "gallery");
