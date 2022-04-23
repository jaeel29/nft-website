import { Container } from '@styles/Blocks/Container';
import { theme } from '@styles/Theme';
import { Breakpoints } from 'src/constants/Media-queries';
import styled from 'styled-components';

export const TrustedStyles = styled.section`
  background-color: ${theme['main-Light-2']};
`;

export const TrustedContainer = styled.div`
  ${Container}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;

  .icon {
    /* outline: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    transform: scale(0.97);
    cursor: pointer;

    &:hover {
      filter: grayscale(100%);
    }
  }

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    .icon {
      transform: scale(0.7);
    }
  }

  @media only screen and (max-width: ${Breakpoints.mobile}) {
    overflow-x: scroll;
  }
`;
