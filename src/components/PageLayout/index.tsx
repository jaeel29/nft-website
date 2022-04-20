import React, { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
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
