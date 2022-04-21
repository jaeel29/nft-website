import GiveMore from '@components/GiveMore';
import Button from '@components/UI/Button';
import Image from 'next/image';
import React from 'react';
import {
  ActionButtons,
  HeroContainer,
  HeroHeaderTitles,
  HeroStyled,
  LeftSide,
  RightSide,
} from './Hero.styled';

//^ Images
import Image1 from '@assets/images/Image-1.png';
import Image2 from '@assets/images/Image-2.png';

//^ Icons
import ArrowBgIcon from '@assets/icons/ArrowBgIcon';
import CircleIcon from '@assets/icons/CircleIcon';
import StarIcon from '@assets/icons/StarIcon';

const Hero = () => {
  return (
    <HeroStyled>
      <HeroContainer>
        <LeftSide>
          <HeroHeaderTitles>
            <div className='hero'>
              <h1 className='hero-title'>Choose your first nft</h1>

              <div className='icon-1'>
                <CircleIcon />
              </div>

              <div className='icon-2'>
                <ArrowBgIcon />
              </div>
            </div>

            <p className='hero-paragraph'>
              Millions of companies of all sizes — from startups to Fortune 500s — use Stripe’s
              software and APIs to accept payments, send payouts, and manage their businesses
              online.
            </p>
          </HeroHeaderTitles>

          <ActionButtons>
            <Button fill>Explore Now</Button>
            <Button outline>Sell NFT</Button>
          </ActionButtons>
        </LeftSide>

        <RightSide>
          <div className='image-1'>
            <Image src={Image1} width={532} height={500} alt='NFT photo 1' />
          </div>
          <div className='image-2'>
            <Image src={Image2} width={680} height={588} alt='NFT photo 2' />
          </div>

          <div className='image-star-icon'>
            <StarIcon />
          </div>

          <div className='giveMore'>
            <GiveMore iconName='email' iconSize={24} data='Give your<br />remote reps' />
          </div>

          <div className='statistics'>
            <div className='stat-1'>
              <span>48K+</span>
              <p>Artwork</p>
            </div>

            <div className='stat-2'>
              <span>24K+</span>
              <p>Artwork</p>
            </div>
          </div>
        </RightSide>
      </HeroContainer>
    </HeroStyled>
  );
};

export default Hero;
