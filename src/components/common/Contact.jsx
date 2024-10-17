import dynamic from 'next/dynamic';
import { FaMapPin } from 'react-icons/fa6';

const Map = dynamic(() => import('./Map.jsx'), { ssr: false });

const Contact = () => {

  return (
    <div className='flex flex-col justify-center items-center gap-12'>
        <div
          className='flex justify-center items-center pt-[8rem] md:pt-0'
       >
        <h2 className="text-custom-green text-center text-[2.5rem] lg:text-[3rem]">Ubicación</h2>
        <FaMapPin className='text-red-500' size={40} />
      </div>

    <div className="flex flex-col justify-center items-center h-full w-[80%] bg-black ">
      
      <h3 className='text-white text-center'> La Calchona</h3>
        <Map/>
    </div>
    </div>
  );
}

export default Contact;