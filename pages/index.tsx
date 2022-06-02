import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/Container/Container';
import useDarkMode from '../hooks/useDarkMode';

const Home: NextPage = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <Container>
      <main className="flex justify-items-center flex-col">
        <h1 className="text-4xl font-extrabold text-primary">Mehmet Temel</h1>
        <h2 className="text-primary">Front End Developer</h2>
        <h2 className="text-primary">Front End Developer2</h2>
        <h2 className="text-primary">Front End Developer3</h2>
      </main>
    </Container>
  );
};

export default Home;
