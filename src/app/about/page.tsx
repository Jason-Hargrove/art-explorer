// src/app/about/page.tsx
import { FC } from 'react';

const About: FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Art Explorer</h1>
      <p className="text-lg">
        Art Explorer is a platform dedicated to helping users discover art locations across the globe. Whether you’re interested in famous museums or hidden galleries, we bring art closer to you.
      </p>
      <p className="mt-4 text-lg">
        Our mission is to connect people with art and culture through a seamless and interactive experience.
      </p>
    </div>
  );
};

export default About;
