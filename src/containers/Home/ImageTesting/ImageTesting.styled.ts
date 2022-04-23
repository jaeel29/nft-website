import { Container } from '@styles/Blocks/Container';
import styled from 'styled-components';

export const ImageStyles = styled.div`
  ${Container}
  border: 2px solid red;
  margin-bottom: 20px;

  .imageContainer {
    position: relative;
    width: 281px;
    height: 331px;
  }
`;
