import Head from 'next/head'
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Art Explorer</title>
        <meta name='description' content='Explore art museums around the world' />
      </Head>
      <main className='min-h-screen flex items-center justify-center bg-gray-100'>
        <h1 className='text-4xl font-bold text-center'>Welcome to Art Explorer</h1>
      </main>
    </div>
  )
}

export default Home;