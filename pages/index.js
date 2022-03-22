import Head from 'next/head';
import Header from 'components/Molecules/Header';
import Summary from 'components/Templates/Summary';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jean Chirinos Portfolio</title>
        <meta name="description" content="Jean Chirinos Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Summary />
    </>
  );
}
