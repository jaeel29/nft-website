import type { NextPage } from 'next';
import PageLayout from '@components/PageLayout';
import Hero from '@containers/Home/Hero';
import TrustedCompanies from '@containers/Home/TrustedCompanies';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
        <title>NFT Marketplace</title>

        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='author' content='Jaber' />
        <meta name='description' content='The best NFT Marketplace' />

        <link rel='shortcut icon' href='/nft-favicon.png' type='image/x-icon' />
      </Head>

      <PageLayout>
        <Hero />
        <TrustedCompanies />
      </PageLayout>
    </>
  );
};

export default Home;
