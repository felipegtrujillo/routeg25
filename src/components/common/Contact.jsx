'use client';


import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc/index.js';
/* import { slideIn } from '../utils/motion.js'; */

import Map from './Map.jsx';

const Contact = () => {

  return (
    <div className='flex justify-center items-center '>
    <div className="flex flex-col justify-center items-center h-full w-[80%] bg-black ">
      <h3 className='text-white text-center'> La Calchona</h3>
        <Map/>
    </div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
