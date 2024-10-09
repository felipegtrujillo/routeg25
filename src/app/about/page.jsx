'use client'

import Navbar from '../../components/common/Navbar';
import HeroSections from '../../components/HeroSections.jsx';
import Footer from '../../components/common/Footer.jsx';

import MainSectionAbout  from '../../components/MainSectionAbout.jsx'
import DetailSectionAbout from '../../components/DetailSectionAbout.jsx'
import ServiciosAbout from '../../components/ServiciosAbout'
import Gallery from '../../components/Gallery.jsx'

export default function Page() {

  return (
    <div className="relative z-0">
    <div className="relative bg-about bg-no-repeat bg-center h-screen"> 
     <Navbar/>
     <HeroSections idSection="#main" name="Sobre Nosotros" text1="Nuestra Vision" text2="Infraestructura" text3="Servicios Ofrecidos"
     buttonName="Saber más"/>
     </div>
     <MainSectionAbout/>
     <DetailSectionAbout/>
     <ServiciosAbout/>
     <Gallery/>
     <Footer/>

  </div>
    

  );
}
