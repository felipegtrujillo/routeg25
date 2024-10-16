'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Código para el ícono de Leaflet
if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
}

const center = [-33.706827, -70.332945];

// Componente para añadir un botón personalizado al mapa
const CustomButton = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    // Comprobar si el botón ya existe para evitar duplicados
    if (L.DomUtil.get('custom-button')) {
      return;
    }

    // Crear el elemento del botón
    const button = L.control({ position: 'topright' });

    button.onAdd = () => {
      const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
      div.id = 'custom-button';  // Asignar un ID para dirigir este botón
      div.innerHTML = '📍 Cómo llegar';
      div.style.backgroundColor = 'white';
      div.style.cursor = 'pointer';
      div.style.padding = '5px';

      div.onclick = () => {
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;
        window.open(googleMapsUrl, '_blank');
      };

      return div;
    };

    button.addTo(map);

    // Limpieza: eliminar el botón cuando el componente se desmonte
    return () => {
      map.removeControl(button);
    };
  }, [map, position]);

  return null;
};

const MapLeaflet = () => {
  return (
    <div className="relative h-[100%] w-[100%]">
      <MapContainer
        center={center}
        zoom={15}
        style={{ width: '100%', height: '400px' }}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center} />
        <CustomButton position={center} />
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
