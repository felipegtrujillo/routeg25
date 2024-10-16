
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import Image from 'next/image';

import { fadeIn, fadeImg, textVariant } from '../utils/motion.js';

import img1 from '../../public/assets/img/front/IMG_1511.jpg';
import img2 from '../../public/assets/img/front/home_front2.jpg';
import img3 from '../../public/assets/img/restaurant/servicio.jpeg';
import img4 from '../../public/assets/img/cabanas/bungalow_front.jpeg';
import img5 from '../../public/assets/img/front/IMG_1102-1-scaled.jpg';
import img6 from '../../public/assets/img/front/IMG_1116-1-scaled.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
     <div className='overflow-hidden'>
      <div className='flex justify-center items-center'>
       <h3 className="text-custom-yellow text-[2.4rem] lg:text-[2.4rem] pb-2 text-center ">Galería del Imagenes</h3>
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
