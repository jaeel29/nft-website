import React, { ReactNode } from 'react';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import { InnerChildren, PageLayoutStyle } from './PageLayout.styled';

const PageLayout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <>
      <PageLayoutStyle>
        <Header />
        <InnerChildren>{children}</InnerChildren>
        {/* <Footer /> */}
      </PageLayoutStyle>
    </>
  );
};

export default PageLayout;
