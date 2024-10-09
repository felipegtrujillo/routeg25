'use client'

import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -33.706827,
  lng: -70.332945,
};

const options = {
  // Puedes personalizar las opciones del mapa aquí
  zoom: 15,
};

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <div className="relative h-[100%] w-[100%]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={options.zoom}
        options={options}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Map;
