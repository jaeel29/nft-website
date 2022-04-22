import React, { ReactNode } from 'react';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import { PageLayoutStyle } from './PageLayout.styled';

const PageLayout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default PageLayout;
