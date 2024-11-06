import { FC } from "react";
import Link from "next/link";

const Home: FC = () => {
  return (
    <div className="home-container p-4">
      <section className="hero-section relative flex items-center justify-center h-[400px] text-white mb-8 rounded-lg overflow-hidden">
        <picture className="hero-image-wrapper absolute inset-0 w-full h-full">
          <source
            srcSet="/images/hero-desktop.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="/images/hero-mobile.jpg"
            alt="Art Explorer Hero"
            className="hero-image object-cover w-full h-full"
          />
        </picture>
        <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="hero-content relative z-10 text-center p-4">
          <h1 className="hero-title text-4xl font-bold mb-4">Welcome to Art Explorer</h1>
          <p className="hero-description text-lg mb-6">
            Discover and explore art locations around the world. From renowned
            museums to hidden galleries, Art Explorer connects you to a world of
            culture and creativity.
          </p>
          <Link
            href="/explore"
            className="cta-button inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      <section className="features-section grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="feature-card p-4 border rounded-lg shadow bg-white">
          <h2 className="feature-title text-2xl font-semibold mb-2">Explore Art Locations</h2>
          <p className="feature-description text-gray-700">
            Use our interactive map to discover art museums, galleries, and
            installations near and far.
          </p>
        </div>
        <div className="feature-card p-4 border rounded-lg shadow bg-white">
          <h2 className="feature-title text-2xl font-semibold mb-2">Learn About Art</h2>
          <p className="feature-description text-gray-700">
            Dive into the stories behind famous art pieces and learn about the
            artists who created them.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
