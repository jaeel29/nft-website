import type { NextPage } from 'next';
import PageLayout from '@components/PageLayout';
import Hero from '@containers/Home/Hero';
import TrustedCompanies from '@containers/Home/TrustedCompanies';
import Head from 'next/head';
import ImageTesting from '@containers/Home/ImageTesting';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
        <title>NFT Marketplace</title>

        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='keyword' content='' />
        <meta name='author' content='Jaber' />
        <meta name='description' content='The best NFT Marketplace' />

        {/* <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:width' content='1200' />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={metaDescription} /> */}

        <link rel='shortcut icon' href='/nft-favicon.png' type='image/x-icon' />
        {/* <link rel='icon' href='/favicon.png' /> */}
      </Head>

      <PageLayout>
        <Hero />
        <TrustedCompanies />
        {/* <ImageTesting /> */}
      </PageLayout>
    </>
  );
};

export default Home;
