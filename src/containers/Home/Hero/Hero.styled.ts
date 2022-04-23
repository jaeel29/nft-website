import { FONT_PJS } from '@constants';
import { Container } from '@styles/Blocks/Container';
import { Breakpoints } from 'src/constants/Media-queries';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const HeroStyled = styled.section``;

export const HeroContainer = styled.div`
  ${Container}
  position: relative;
  padding: 80px 0 0 20px;
  display: flex;
  justify-content: center;
  height: calc(85vh - 70px);

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    height: calc(100vh - 70px);
    flex-direction: column;
    padding: 40px 20px 0 20px;
    justify-content: flex-start;
  }

  @media only screen and (max-width: ${Breakpoints.mobile}) {
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

  @media only screen and (max-width: ${Breakpoints.mobile}) {
    margin: 0 auto;
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

      @media only screen and (max-width: ${Breakpoints.mobile}) {
        width: 100%;
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
        top: -20px;
        right: -30px;
      }

      @media only screen and (max-width: ${Breakpoints.mobile}) {
        display: none;
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

      @media only screen and (max-width: ${Breakpoints.mobile}) {
        display: none;
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
  position: relative;
  width: 100%;
  /* border: 2px solid red; */

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    margin-top: auto;
  }

  [class^='image-'] {
    pointer-events: none;
    width: 281px;
    height: 331px;
    position: relative;
    /* border: 2px solid red; */
  }

  .image-1 {
    top: -160px;
    right: -260px;

    @media only screen and (max-width: ${Breakpoints.laptop}) {
      right: -200px;
    }

    @media only screen and (max-width: ${Breakpoints.tablet}) {
      display: none;
    }
  }

  .image-2 {
    bottom: -37px;

    @media only screen and (max-width: ${Breakpoints.laptop}) {
    }

    @media only screen and (max-width: ${Breakpoints.tablet}) {
      position: relative;
      width: 350px;
      height: 413px;
      bottom: auto;
      left: 50%;
      transform: scale(1) translateX(-50%);
    }

    @media only screen and (max-width: ${Breakpoints.mobile}) {
      position: relative;
      width: 281px;
      height: 331px;
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
    right: 20px;
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

    @media only screen and (max-width: ${Breakpoints.mobile}) {
      display: none;
    }
  }
`;
