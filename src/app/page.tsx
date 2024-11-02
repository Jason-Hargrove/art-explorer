import Head from "next/head";
import { FC } from "react";
import Map from "@/components/Map";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Art Explorer</title>
        <meta
          name="description"
          content="Explore art museums around the world"
        />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-8">
          <h1 className="text-4xl font-bold text-center md:text-left">
            Welcome to Art Explorer
          </h1>
          <Map />
        </div>
      </main>
    </div>
  );
};

export default Home;
