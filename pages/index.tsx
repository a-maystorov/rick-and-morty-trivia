import Head from 'next/head';
import type { NextPage, GetServerSideProps, GetStaticProps } from 'next';

import { Character, GetCharacterResults } from '../types';
import { useEffect, useState } from 'react';

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  const [randomCharacter, setRandomCharacter] = useState<Character>();

  useEffect(() => {
    setRandomCharacter(
      characters[Math.floor(Math.random() * characters.length)]
    );
  }, [characters]);

  return (
    <>
      <Head>
        <title>Dead Alive or Unknown?</title>
        <meta name="description" content="Are you a real Rick and Morty fan?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen flex flex-col justify-center items-center">
        <header className="text-2xl text-center">
          What is the status of {randomCharacter?.name}?
        </header>
        <div className="p-4" />
        <section className="flex justify-around border rounded p-8 min-w-[50%]">
          <div className="bg-red-300 p-8">Dead</div>
          <div className="bg-green-300 p-8">Alive</div>
          <div className="bg-yellow-300 p-8">Unknown</div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
