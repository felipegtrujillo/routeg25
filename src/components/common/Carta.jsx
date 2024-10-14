// src/components/PdfViewer.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/assets/img/restaurant/bar.jpg';

const Carta = () => {
  const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/lacalchona-cd046.appspot.com/o/CARTA-LA-CALCHONA.pdf?alt=media&token=b5fef067-ce63-4481-a0e7-95b5c7bbd35f';

  return (
    <div id="cartaPDF" className=" relative flex items-center justify-center h-full bg-gray-800 sm:w-[100%]  ">


        <div className=' filter contrast-10 saturate-100 brightness-80  opacity-40 '>
        <Image src={img1} alt="imageFondoCarta" style={{ objectFit: "contain" }} responsive />
        </div>

    <div className='absolute flex items-center justify-center w-full '>
    <iframe
      src={`${pdfUrl}#page=2`}
      width="100%"
      height="600px"
      style={{ border: 'none' }}
      title="PDF Viewer"
      className='lg:w-[55%] '
    />
    </div>
    </div>
  );
};

export default Carta;