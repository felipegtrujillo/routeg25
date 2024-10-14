'use client'

import Navbar from '../../../components/common/Navbar';
import TitleHelpSection from '../../../components/TitleHelpSection';
import Footer from '../../../components/common/Footer.jsx';
import MainSectionFAQ from '@/src/components/MainSectionFAQ';

export default function Page() {

  return (
    <div className=' relative z-0'>
     <div className='relative z-0'>

      <Navbar/>
      <TitleHelpSection name="Preguntas Frecuentes" text1="FAQ"
      />
      </div>
       <MainSectionFAQ/>
     <Footer/>

  </div>
    

  );
}
