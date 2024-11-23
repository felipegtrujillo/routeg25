// app/page.tsx (o page.ts)
'use client';

import img1 from '../../../public/assets/img/restaurant/barra.jpg';
import CartaPre from '../../components/CartaPre.jsx';
import Carta from '../../components/common/Carta.jsx';
import Footer from '../../components/common/Footer.jsx';
import Navbar from '../../components/common/Navbar';
import HeroSections from '../../components/HeroSections.jsx';
import ParallaxSection from '../../components/ParallaxSection';
import ReservasMesasFooter from '../../components/ReservasMesaFooter';
import GalleryRestaurant from '@/src/components/GalleryRestaurant';

export default function Page() {

  const page = 'https://firebasestorage.googleapis.com/v0/b/lacalchona-cd046.appspot.com/o/CARTA-LA-CALCHONA.pdf?alt=media&token=b5fef067-ce63-4481-a0e7-95b5c7bbd35f'

  return (
    <div className='relative z-0'> 
    <div className="relative bg-restaurant bg-no-repeat bg-center h-screen "> 
      <Navbar/>
      <HeroSections idSection="#cartaPDF" name="Restaurant" text1="Sabores que despiertan tus sentidos" text2="Bebidas que calman tu sed" text3="A los pies de la Montaña"
       buttonName="Ver Carta" isRestaurant={true} page={page}/>
     </div>
     <CartaPre/>
     <ParallaxSection 
        key="parallax-carta"
        image={img1}
        paragraphText="Conoce en detalle nuestro menú"
        titleText="Carta"
      />
     <Carta/>
     <GalleryRestaurant/>
     <ReservasMesasFooter/>
     <Footer/>
  </div>
    

  );
}
