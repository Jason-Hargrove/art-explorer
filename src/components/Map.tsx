"use client";

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { locations } from '@/data/locations';

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
    });

    loader
      .importLibrary('maps')
      .then(() => {
        if (mapRef.current && google) {
          const map = new google.maps.Map(mapRef.current, {
            center: { lat: 37.08777, lng: -88.59545 },
            zoom: 5,
          });

          locations.forEach((location) => {
            const marker = new google.maps.Marker({
              position: location.position,
              map,
              title: location.name,
              icon: '/icons/icons8-graffiti-art-100.png',
            });

            const infoWindow = new google.maps.InfoWindow({
              content: `<div><h2>${location.name}</h2><p>Coordinates: (${location.position.lat}, ${location.position.lng})</p></div>`,
            });

            marker.addListener('click', () => {
              infoWindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
              });
            });
          });
        }
      })
      .catch((error) => console.error('Error loading Google Maps library:', error));
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

export default Map;
