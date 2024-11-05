import { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
  return (
    <div className="p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Art Explorer</h1>
        <p className="text-lg mb-6">
          Discover and explore art locations around the world. From renowned museums to hidden galleries, Art Explorer connects you to a world of culture and creativity.
        </p>
        <Link href="/explore" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Start Exploring
        </Link>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">Explore Art Locations</h2>
          <p className="text-gray-700">
            Use our interactive map to discover art museums, galleries, and installations near and far.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">Learn About Art</h2>
          <p className="text-gray-700">
            Dive into the stories behind famous art pieces and learn about the artists who created them.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
