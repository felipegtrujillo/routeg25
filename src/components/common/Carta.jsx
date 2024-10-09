// src/components/PdfViewer.jsx
'use client';

import React from 'react';

const Carta = () => {
  const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/lacalchona-cd046.appspot.com/o/CARTA-LA-CALCHONA.pdf?alt=media&token=b5fef067-ce63-4481-a0e7-95b5c7bbd35f';

  return (
    <div id="cartaPDF" className="flex items-center justify-center h-screen bg-carta  bg-center bg-cover sm:w-[100%]  ">
    <iframe
      src={`${pdfUrl}#page=2`}
      width="100%"
      height="600px"
      style={{ border: 'none' }}
      title="PDF Viewer"
      className='lg:w-[55%] '
    />
    </div>
  );
};

export default Carta;