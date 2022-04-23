import { theme } from '@styles/Theme';
import { Breakpoints } from 'src/constants/Media-queries';
import styled from 'styled-components';

export const GiveMoreStyles = styled.div`
  width: 170px;
  height: 170px;
  border-top-left-radius: 170px;
  background-color: ${theme.neutral1};
  overflow: hidden;
  position: relative;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -40%);
    width: 60%;
    /* outline: 2px solid red; */

    .icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(180deg, #ffb77c 0%, #ff5915 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: scale(1);
      transition: all 0.3s ease-out;
      cursor: pointer;

      svg {
        fill: ${theme['main-Light']};
      }

      &:hover {
        transform: scale(1.15);
      }
    }

    .children {
      font-size: 15px;
      line-height: 1.3;
      font-weight: 400;
      color: ${theme['main-Light']};
      /* width: 70%; */
    }
  }

  @media only screen and (max-width: ${Breakpoints.laptop}) {
    display: none;
  }
`;
