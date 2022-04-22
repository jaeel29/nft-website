import { FONT_PJS } from '@constants';
import { Container } from '@styles/Blocks/Container';
import { Breakpoints } from 'src/constants/Media-queries';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const HeroStyled = styled.section``;

export const HeroContainer = styled.div`
  ${Container}
  position: relative;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  height: calc(100vh - 70px);

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  width: 60%;
  margin-top: 40px;

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    width: auto;
  }

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    margin: 0 90px;
  }
`;

export const HeroHeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 36px;
  /* border: 2px solid red; */

  .hero {
    position: relative;

    .hero-title {
      font-family: ${FONT_PJS};
      text-transform: uppercase;
      font-size: 56px;
      width: 80%;
      line-height: 1.4;
      letter-spacing: 1.5px;

      @media only screen and (max-width: ${Breakpoints.laptop}) {
        font-size: 48px;
        width: 100%;
        line-height: 1.4;
        letter-spacing: 1px;
      }

      @media only screen and (max-width: ${Breakpoints.tablet}) {
        text-align: center;
        width: 80%;
        margin: auto;
        line-height: 1.3;
      }
    }

    [class^='icon-'] {
      position: absolute;
    }

    .icon-1 {
      right: 110px;
      top: 15px;

      @media only screen and (max-width: ${Breakpoints.laptop}) {
        right: 30px;
        top: 10px;
      }

      @media only screen and (max-width: ${Breakpoints.tablet}) {
        /* display: none; */
        top: -50px;
        right: -30px;
      }
    }

    .icon-2 {
      bottom: 18px;
      left: 130px;

      @media only screen and (max-width: ${Breakpoints.laptop}) {
        bottom: 15px;
        left: 110px;
      }

      @media only screen and (max-width: ${Breakpoints.tablet}) {
        left: auto;
        right: 50px;
      }
    }
  }

  .hero-paragraph {
    font-size: 16px;
    line-height: 1.5;

    @media only screen and (max-width: ${Breakpoints.tablet}) {
      text-align: center;
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const RightSide = styled.div`
  width: 100%;
  flex-grow: 1;
  /* border: 2px solid red; */

  [class^='image-'] {
    pointer-events: none;
    width: 280px;
    height: 330px;
    position: relative;
    /* border: 2px solid red; */
  }

  .image-1 {
    top: -160px;
    right: -260px;

    @media only screen and (max-width: ${Breakpoints.laptop}) {
      top: -130px;
      right: -20px;
      transform: scale(0.8);
    }

    @media only screen and (max-width: ${Breakpoints.tablet}) {
      display: none;
    }
  }

  .image-2 {
    bottom: -190px;
    left: auto;

    @media only screen and (max-width: ${Breakpoints.laptop}) {
      left: 150px;
      bottom: -30px;
      transform: scale(0.9);
    }

    @media only screen and (max-width: ${Breakpoints.tablet}) {
      left: 0;
    }
  }

  .star-icon {
    position: absolute;
    top: 45%;
    right: 38%;
    transform: translateY(-50%);

    @media only screen and (max-width: ${Breakpoints.tablet}) {
      display: none;
    }
  }

  .giveMore {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .statistics {
    position: absolute;
    right: 20px;
    top: 40%;
    display: flex;
    flex-direction: column;
    gap: 36px;

    [class^='stat-'] {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: ${theme.neutral1};

      span {
        font-size: 26px;
        font-weight: 700;
        font-family: ${FONT_PJS};
      }

      p {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.7;
        color: ${theme.gray};
      }
    }

    @media only screen and (max-width: ${Breakpoints.laptop}) {
      right: 20px;
    }

    @media only screen and (max-width: ${Breakpoints.tablet}) {
      display: none;
    }
  }
`;
