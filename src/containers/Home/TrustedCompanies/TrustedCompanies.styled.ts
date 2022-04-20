import { Container } from '@styles/Blocks/Container';
import { theme } from '@styles/Theme';
import styled from 'styled-components';

export const TrustedStyles = styled.section`
  background-color: ${theme['main-Light-2']};
`;

export const TrustedContainer = styled.div`
  ${Container}
  padding: 45px 0;
  display: flex;
  align-items: center;
  justify-content: center;

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
`;
