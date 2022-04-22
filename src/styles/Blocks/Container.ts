import { Breakpoints } from 'src/constants/Media-queries';
import { css } from 'styled-components';

export const Container = css`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  transition: max-width 0.3s ease-out;
  padding: 0 20px;

  @media only screen and (max-width: ${Breakpoints.laptop}) {
    max-width: 1000px;
    width: 100%;
    transition: max-width 0.3s ease-out;
  }

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    max-width: 730px;
  }
`;
