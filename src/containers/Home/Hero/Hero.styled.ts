import { FONT_PJS } from '@constants';
import { Container } from '@styles/Blocks/Container';
import { laptop } from 'src/constants/Media-queries';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

export const HeroStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroContainer = styled.div`
  ${Container}
  position: relative;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  height: calc(100vh - 70px);
  /* outline: 2px solid red; */
`;

export const LeftSide = styled.div`
  width: 60%;
  margin-top: 40px;
`;

export const HeroHeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 36px;

  .hero {
    position: relative;

    .hero-title {
      font-family: ${FONT_PJS};
      text-transform: uppercase;
      font-size: 56px;
      width: 80%;
      line-height: 1.4;
      letter-spacing: 1.5px;
    }

    [class^='icon-'] {
      position: absolute;
    }

    .icon-1 {
      right: 110px;
      top: 15px;
    }

    .icon-2 {
      bottom: 18px;
      left: 130px;
    }

    @media only screen and (max-width: ${laptop}) {
      .hero-title {
        font-size: 48px;
        width: 100%;
        line-height: 1.4;
        letter-spacing: 1px;
      }

      .icon-1 {
        right: 30px;
        top: 10px;
      }

      .icon-2 {
        bottom: 15px;
        left: 110px;
      }
    }
  }

  .hero-paragraph {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const RightSide = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: hidden;

  [class^='image-'] {
    position: absolute;
    pointer-events: none;
  }

  .image-1 {
    top: -70px;
    right: -50px;

    @media only screen and (max-width: ${laptop}) {
      top: -130px;
      right: -70px;
      transform: scale(0.9);
    }
  }

  .image-2 {
    bottom: 0;
    left: 300px;

    @media only screen and (max-width: ${laptop}) {
      left: 150px;
      bottom: -30px;
      transform: scale(0.9);
    }
  }

  .image-star-icon {
    top: 45%;
    right: 30%;
    transform: translateY(-50%);
  }

  .giveMore {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .statistics {
    position: absolute;
    right: 0;
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

    @media only screen and (max-width: ${laptop}) {
      right: 80px;
    }
  }
`;
