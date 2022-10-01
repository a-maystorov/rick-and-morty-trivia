import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Which is the roundest pokemon?</title>
        <meta
          name="description"
          content="The answer to the most important question of all time: Which is the roundest pokemon?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
};

export default Home;
