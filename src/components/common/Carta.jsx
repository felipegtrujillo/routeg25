"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from '../../../public/assets/img/restaurant/bar.jpg';

const Carta = () => {
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga
  const [hasError, setHasError] = useState(false); // Estado para manejar errores

  const pdfUrl =
    "https://firebasestorage.googleapis.com/v0/b/lacalchona-cd046.appspot.com/o/CARTA-LA-CALCHONA.pdf?alt=media&token=b5fef067-ce63-4481-a0e7-95b5c7bbd35f";
  const googleDocsViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(
    pdfUrl
  )}&embedded=true`;

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false); // Si se carga, eliminamos cualquier error previo
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true); // Si hay un error, activamos el estado de error
  };

  useEffect(() => {
    // Configura un temporizador para recargar la página después de 4 segundos
    const timer = setTimeout(() => {
      if (isLoading) {
        window.location.reload(); // Recargar la página si todavía está cargando
      }
    }, 3000);

    // Limpia el temporizador si el componente se desmonta o si se carga el PDF
    return () => clearTimeout(timer);
  }, [isLoading]); // Se ejecuta cuando cambia isLoading

  return (
    <div
      id="cartaPDF"
      className="relative flex items-center justify-center bg-gray-800 min-w-screen min-h-screen"
    >
      <div className="filter contrast-10 saturate-100 brightness-80 opacity-40">
        <Image
          src={img1}
          alt="imageFondoCarta"
          style={{ objectFit: "contain" }}
          responsive
        />
      </div>

      <div className="absolute flex items-center justify-center w-full h-full">
        {isLoading && (
          <p className="text-white text-xl">Cargando la carta...</p>
        )}
        {hasError ? (
          <div className="text-white text-center">
            <p>No se pudo cargar la carta. Intenta recargar la página.</p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
              onClick={() => window.location.reload()}
            >
              Recargar página
            </button>
          </div>
        ) : (
          <iframe
            src={googleDocsViewerUrl}
            onLoad={handleLoad}
            onError={handleError}
            style={{ border: "none" }}
            title="PDF Viewer"
            className="w-full h-full lg:w-[55%] lg:h-[80%]"
          />
        )}
      </div>
    </div>
  );
};

export default Carta;
