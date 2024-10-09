// app/page.tsx (o page.ts)
'use client';


import Navbar from '../../components/common/Navbar';
import HeroSections from '../../components/HeroSections.jsx';
import CartaPre from '../../components/CartaPre.jsx'
import Carta from '../../components/common/Carta.jsx';
import Footer from '../../components/common/Footer.jsx';
import ParallaxSection from '../../components/ParallaxSection';
import ReservasMesasFooter from '../../components/ReservasMesaFooter';

import img1 from '../../../public/assets/img/restaurant/barra.jpg';


export default function Page() {

  return (
    <div className='relative z-0'> 
    <div className="relative bg-restaurant bg-no-repeat bg-center h-screen "> 
      <Navbar/>
      <HeroSections idSection="#cartaPDF" name="Restaurant" text1="Sabores que despiertan tus sentidos" text2="Bebidas que calman tu sed" text3="A los pies de la Montaña"
       buttonName="Ver Carta"/>
     </div>
     <CartaPre/>
     <ParallaxSection 
        key="parallax-carta"
        image={img1}
        paragraphText="Conoce en detalle nuestro menu"
        titleText="Carta"
      />

     <Carta/>
     <ReservasMesasFooter/>
     <Footer/>
  </div>
    

  );
}
