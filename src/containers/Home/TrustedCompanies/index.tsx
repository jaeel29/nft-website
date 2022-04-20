import React from 'react';
import { TrustedContainer, TrustedStyles } from './TrustedCompanies.styled';
import AmazonLogo from '@assets/icons/AmazonLogo';
import ShopifyLogo from '@assets/icons/ShopifyLogo';
import DailymotionLogo from '@assets/icons/DaylimotionLogo';
import GoogleLogo from '@assets/icons/GoogleLogo';
import SlackLogo from '@assets/icons/SlackLogo';

const TrustedCompanies = () => {
  return (
    <TrustedStyles>
      <TrustedContainer>
        <div className='icon'>
          <AmazonLogo />
        </div>
        <div className='icon'>
          <ShopifyLogo />
        </div>
        <div className='icon'>
          <DailymotionLogo />
        </div>
        <div className='icon'>
          <GoogleLogo />
        </div>
        <div className='icon'>
          <SlackLogo />
        </div>
      </TrustedContainer>
    </TrustedStyles>
  );
};

export default TrustedCompanies;
