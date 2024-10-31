export type Location = {
  id: number;
  name: string;
  position: { lat: number; lng: number };
  description?: string;
  image?: string;
};

export const locations: Location[] = [
    {
      id: 1,
      name: "Saint Louis Art Museum",
      position: { lat: 38.6394, lng: -90.2948 },
    },
    {
      id: 2,
      name: "Frist Art Museum",
      position: { lat: 36.1527, lng: -86.7836 },
      description: "The Frist Art Museum is a contemporary art museum in Nashville, Tennessee, that is known for its collection of modern and contemporary art.",
      image: "/images/frist-art-museum.jpg"
    },
    {
      id: 3,
      name: "Yeiser Art Center",
      position: { lat: 37.08777, lng: -88.59545 },
    },
  ];