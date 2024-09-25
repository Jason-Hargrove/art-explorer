import Head from 'next/head'
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title> Art Explorer</title>
      </Head>
      <main>
        <h1>Welcome to Art Explorer</h1>
      </main>
    </div>
  )
}

export default Home;