import { laptop } from 'src/constants/Media-queries';
import { css } from 'styled-components';

export const Container = css`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  transition: max-width 0.3s ease-out;

  @media only screen and (max-width: ${laptop}) {
    max-width: 940px;
    transition: max-width 0.3s ease-out;
  }
`;
