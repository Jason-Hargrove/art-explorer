import { FC } from "react";
import Map from '@/components/Map';

const Explore: FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Explore Art Locations</h1>
      <p className="text-lg">Discover and explore art museums, galleries, and installations around the world</p>
      <Map />
    </div>
  );
};

export default Explore;
