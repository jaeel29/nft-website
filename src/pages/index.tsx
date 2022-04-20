import type { NextPage } from 'next';
import PageLayout from '@components/PageLayout';
import Hero from '@containers/Home/Hero';
import TrustedCompanies from '@containers/Home/TrustedCompanies';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Hero />

      <TrustedCompanies />
    </PageLayout>
  );
};

export default Home;
