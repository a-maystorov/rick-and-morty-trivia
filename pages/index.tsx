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

      <main className="h-screen w-screen flex flex-col justify-center items-center">
        <header className="text-2xl text-center">
          Which Pokemon is rounder?
        </header>
        <div className="p-4" />
        <section className="flex justify-around border rounded p-8 min-w-[50%]">
          <div className="bg-green-300 p-8">This</div>
          <div className="bg-red-300 p-8">or</div>
          <div className="bg-yellow-300 p-8">This one</div>
        </section>
      </main>
    </>
  );
};

export default Home;
