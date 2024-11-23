import { motion } from 'framer-motion';
import Image from 'next/image';

import img1 from '../../public/assets/img/restaurant/gallery/1g.jpg';
import img2 from '../../public/assets/img/restaurant/gallery/2g.jpg';
import img3 from '../../public/assets/img/restaurant/gallery/3g.jpg';
import img4 from '../../public/assets/img/restaurant/gallery/4g.jpg';
import img5 from '../../public/assets/img/restaurant/gallery/5g.jpg';
import img6 from '../../public/assets/img/restaurant/gallery/6g.jpg';
import { SectionWrapper } from '../hoc';
import {
  fadeImg,
  fadeIn,
} from '../utils/motion.js';

// Arreglo de objetos con imágenes y descripciones
const images = [
  { img: img1, alt: '' },
  { img: img2, alt: '' },
  { img: img3, alt: '' },
  { img: img4, alt: '' },
  { img: img5, alt: '' },
  { img: img6, alt: '' },
];

const GalleryRestaurant = () => {
  return (
    <div className=' flex flex-col bg-black min-h-screen '>
       <div className='flex justify-center items-start pt-8 '>
        <h3 className="text-custom-yellow text-[2.4rem] lg:text-[2.4rem]  text-center  ">Algunos de nuestros platos</h3>
       </div>
      <motion.div
        className="sm:px-8 px-4 sm:py-16 grid grid-col-1 lg:grid-cols-3 gap-4 mx-2 h-full"
        variants={fadeIn('left', 'spring', 0.1, 3)}
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="w-full h-[340px] object-cover"
            variants={fadeImg("right", "spring", index * 0.01, 3)}
          >
            <Image
              src={item.img}
              alt={item.alt}
              title={item.alt}
              className="w-full h-full rounded-[2rem]"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GalleryRestaurant;
