'use client'

import Navbar from '../../../components/common/Navbar';
import TitleHelpSection from '../../../components/TitleHelpSection';
import Footer from '../../../components/common/Footer.jsx';
import MainSectionTerminos from '@/src/components/MainSectionTerminos';

export default function Page() {

  return (
    <div className=' relative z-0'>
     <div className='relative z-0'>

      <Navbar/>
      <TitleHelpSection idSection="#main" name="Términos y Condiciones" text1="Reservas y Políticas" />
      </div>
     <MainSectionTerminos/>
   
     <Footer/>

  </div>
    

  );
}
