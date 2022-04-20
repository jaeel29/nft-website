import { theme } from '@styles/Theme';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  /* background-color: ${theme['main-Light']}; */
  border-bottom: 1px solid ${theme['main-Light']};

  .image {
    display: flex;
    margin-right: 48px;
  }
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DropdownMenu = styled.div`
  position: relative;

  .submenu {
    position: absolute;
    z-index: 100;
    padding: 10px;
    background-color: ${theme['main-Light']};
    border-radius: 8px;
    top: calc(100% + 12px);
    border: 1px solid ${theme.main};
    box-shadow: 0px 18px 78px rgba(15, 30, 50, 0.1),
      0px 5.46664px 15.8807px rgba(15, 30, 50, 0.0380155);

    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: ${theme['main-Light']};
      transform: rotate(45deg);
      top: -6px;
      left: 16px;
      border-radius: 2px;
      border-top: 1px solid ${theme.main};
      border-left: 1px solid ${theme.main};
    }
  }
`;

export const NavItem = styled.li<{ active?: boolean }>`
  border-radius: 8px;
  padding: 10px;
  color: ${theme.neutral1};
  font-size: 14px;
  font-weight: 400;
  transition: all 0.2s ease-out;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      color: ${theme.blue};
      font-weight: 500;
      border-bottom: 3px solid ${theme.blue};
    `}

  .nav-link {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: ${theme.main};
  }
`;

export const NavItemIcon = styled(NavItem)<{ visibleSubmenu?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;

  svg {
    transform: rotate(0deg);
    transition: all 0.2s ease-out;
  }

  ${({ visibleSubmenu }) =>
    visibleSubmenu &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;

export const RightStyle = styled.div`
  margin-left: auto;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 10%;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${theme.main};
    border-radius: 50%;
  }
`;
