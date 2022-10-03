import Head from 'next/head';
import type { GetServerSideProps, NextPage } from 'next';

import { Character, GetCharacterResults } from '../types';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  const [randomCharacter, setRandomCharacter] = useState<Character>();
  const [answer, setAnswer] = useState('');
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setRandomCharacter(
      characters[Math.floor(Math.random() * characters.length)]
    );
    setAnswer('');
  }, [characters, points]);

  const handleChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const choice: HTMLButtonElement = e.currentTarget;

    if (
      choice.name.toLocaleLowerCase() ===
      randomCharacter?.status.toLocaleLowerCase()
    ) {
      setAnswer('Correct!');
      setTimeout(() => setPoints((prev) => prev + 1), 2000);
    } else {
      setAnswer('Wrong!');
      setTimeout(() => setPoints((prev) => prev - 1), 2000);
    }
  };

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
        {randomCharacter && (
          <Image
            src={randomCharacter.image}
            alt={randomCharacter.name}
            width={200}
            height={200}
            className="rounded"
          />
        )}

        <div className="p-4" />

        {answer && (
          <p
            className={`text-3xl text-center pb-8 ${
              answer === 'Correct!' ? 'text-green-400' : 'text-red-400'
            }`}>
            {answer}
          </p>
        )}

        <section className="flex justify-around border rounded p-8 min-w-[50%] text-black font-bold">
          <button
            className="bg-red-400 px-8 py-4 rounded cursor-pointer hover:brightness-90"
            onClick={(e) => {
              handleChoice(e);
            }}
            name="Dead">
            Dead
          </button>

          <button
            className="bg-green-400 px-8 py-4 rounded cursor-pointer hover:brightness-90"
            onClick={(e) => {
              handleChoice(e);
            }}
            name="Alive">
            Alive
          </button>

          <button
            className="bg-yellow-400 px-8 py-4 rounded cursor-pointer hover:brightness-90"
            onClick={(e) => {
              handleChoice(e);
            }}
            name="Unknown">
            Unknown
          </button>
        </section>

        <div className="p-4" />

        <footer className="text-2xl text-center">Points: {points}</footer>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
