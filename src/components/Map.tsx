"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { locations } from "@/data/locations";
import InfoWindowContent from "./InfoWindowContent";
import ReactDOMServer from "react-dom/server";

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
    });

    loader
      .importLibrary("maps")
      .then(() => {
        if (mapRef.current && google) {
          const newMap = new google.maps.Map(mapRef.current, {
            center: { lat: 37.08777, lng: -88.59545 },
            zoom: 5,
          });
          setMap(newMap);
        }
      })
      .catch((error) =>
        console.error("Error loading Google Maps library:", error)
      );
  }, []);

  useEffect(() => {
    if (map) {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];

      filteredLocations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: location.position,
          map,
          title: location.name,
          icon: "/icons/icons8-graffiti-art-100.png",
          animation: google.maps.Animation.DROP,
        });

        const infoWindowContent = ReactDOMServer.renderToString(
          <InfoWindowContent
            name={location.name}
            description={location.description}
            image={location.image}
          />
        );

        const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent,
        });

        marker.addListener("click", () => {
          infoWindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(() => {
            marker.setAnimation(null);
          }, 1200);
        });

        markersRef.current.push(marker);
      });
    }
  }, [map, filteredLocations]);

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="text"
        placeholder="Search for a location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-11/12 max-w-md"
      />
      <div ref={mapRef} className="w-full h-[500px] rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;
