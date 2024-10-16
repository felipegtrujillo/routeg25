// src/components/PdfViewer.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/assets/img/restaurant/bar.jpg';

const Carta = () => {
  const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/lacalchona-cd046.appspot.com/o/CARTA-LA-CALCHONA.pdf?alt=media&token=b5fef067-ce63-4481-a0e7-95b5c7bbd35f';
  const googleDocsViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

  return (
    <div id="cartaPDF" className=" relative flex items-center justify-center bg-gray-800 min-w-screen min-h-screen  ">


            <div className=' filter contrast-10 saturate-100 brightness-80  opacity-40 '>
            <Image src={img1} alt="imageFondoCarta" style={{ objectFit: "contain" }} responsive />
            </div>

          <div className='absolute flex items-center justify-center w-full h-full  '>
          <iframe
            src={googleDocsViewerUrl}

            style={{ border: 'none' }}
            title="PDF Viewer"
            className='  w-full h-full lg:w-[55%] lg:h-[80%] '
          />
          </div>
    </div>
  );
};

export default Carta;
