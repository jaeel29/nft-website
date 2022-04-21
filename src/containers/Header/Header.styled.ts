import { Container } from '@styles/Blocks/Container';
import { theme } from '@styles/Theme';
import Link from 'next/link';
import { Breakpoints } from 'src/constants/Media-queries';
import styled, { css } from 'styled-components';

export const HeaderStyles = styled.div`
  /* position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: white; */
`;

export const HeaderContainer = styled.header`
  ${Container}
  height: 70px;
  display: flex;
  align-items: center;

  .image {
    display: flex;
    margin-right: 48px;
  }
`;

export const Nav = styled.nav`
  display: block;

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    display: none;
  }
`;

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
      left: 52px;
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
  display: flex;
  margin-left: auto;

  .calendar-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 10%;
    transition: all 0.2s ease-out;
    margin-right: 12px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.main};
      border-radius: 50%;
    }
  }
`;

export const BurgerIcon = styled.button<{ activeHeader: boolean }>`
  width: 36px;
  height: 36px;
  display: none;
  position: relative;

  @media only screen and (max-width: ${Breakpoints.tablet}) {
    display: block;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 16px;
      left: 6px;
      width: 20px;
      height: 2px;
      border-radius: 2px;
      transition: transform 0.2s ease-out;
      background: ${theme.neutral1};
      z-index: 101;
    }

    &::before {
      transform: translateY(-4px);
    }

    &::after {
      transform: translateY(4px);
    }

    ${({ activeHeader }) =>
      activeHeader &&
      css`
        &::before {
          transform: translateY(0) rotate(-45deg);
        }

        &::after {
          transform: translateY(0) rotate(45deg);
        }
      `}
  }
`;

export const NavbarMobile = styled.div<{ activeHeader: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: ${theme['main-Light']};
  transition: all 0.3 ease-out;

  ${({ activeHeader }) =>
    activeHeader &&
    css`
      display: block;
    `}
`;
