import { FONT_INTER } from '@constants';
import { theme } from '@styles/Theme';
import styled, { css } from 'styled-components';

export const ButtonStyles = styled.button<{ outline?: boolean; fill?: number }>`
  padding: 13px 20px;
  border-radius: 50px;
  font-size: 15px;
  font-family: ${FONT_INTER};
  font-weight: 500;
  transition: all 0.2s ease-out;

  ${({ fill }) =>
    fill &&
    css`
      color: ${theme.white};
      background-color: ${theme.blue};

      &:hover {
        background-color: ${theme.neutral1};
      }
    `}

  ${({ outline }) =>
    outline &&
    css`
      box-shadow: inset 0 0 0 1.5px ${theme.black};
      background-color: transparent;
      color: ${theme.black};

      &:hover {
        background-color: transparent;
        box-shadow: inset 0 0 0 2px ${theme.blue};
        color: ${theme.blue};
      }
    `}
`;
