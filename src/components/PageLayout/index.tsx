import React, { ReactNode } from 'react';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import { PageLayoutStyle } from './PageLayout.styled';

const PageLayout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <>
      <PageLayoutStyle>
        <Header />
        {children}
        {/* <Footer /> */}
      </PageLayoutStyle>
    </>
  );
};

export default PageLayout;
