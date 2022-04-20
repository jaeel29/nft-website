import { theme } from '@styles/Theme';
import styled from 'styled-components';

export const SubItemStyled = styled.div`
  border-radius: 8px;
  padding: 15px 0;
  cursor: pointer;

  &:hover {
    background-color: ${theme['main-Light-2']};
  }

  &:not(:last-child) {
    margin-bottom: 2px;
  }

  .inner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 10px;
    padding-right: 40px;

    .item-icon {
    }

    .item-title {
      /* outline: 2px solid red; */
      display: flex;
      flex-direction: column;
      gap: 6px;

      .title {
        font-size: 16px;
        font-weight: 500;
        color: ${theme.darkBlue};
      }

      .paragraph {
        font-size: 14px;
        font-weight: 400;
        color: ${theme.gray};
        white-space: nowrap;
      }
    }
  }
`;
