import Image from 'next/image';
import React, { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import {
  DropdownMenu,
  HeaderStyle,
  Nav,
  NavItem,
  NavItemIcon,
  NavList,
  RightStyle,
} from './Header.styled';
import Logo from '@assets/svg/Logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CalendarIcon from '@assets/icons/CalendarIcon';
import Menu from '@config/menus.json';
import Icon from '@components/UI/Icon';
import useClickOutside from '@hooks/useOnClickOutside';
import useOnClickOutside from '@hooks/useOnClickOutside';
import SubmenuItem from './SubmenuItem';

const Header = () => {
  const [visibleSubmenu, setVisibleSubMenu] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  const toggle = () => setVisibleSubMenu((prev) => !prev);

  useOnClickOutside(menuRef, () => {
    setVisibleSubMenu(false);
  });

  return (
    <HeaderStyle>
      <div className='image'>
        <Image src={Logo} width={36} height={36} alt='Logo' />
      </div>

      <Nav>
        <NavList>
          {Menu.mainMenu.map((item, index) =>
            item.subMenu ? (
              <DropdownMenu key={index}>
                <NavItemIcon ref={menuRef} onClick={toggle} visibleSubmenu={visibleSubmenu}>
                  <a className='nav-link'>{item.name}</a>
                  <Icon size={16} name='arrow-bottom' />
                </NavItemIcon>

                {visibleSubmenu && (
                  <div className='submenu'>
                    {item.subMenu.map((subMenu, index) => (
                      <SubmenuItem key={index} subMenu={subMenu} />
                    ))}
                  </div>
                )}
              </DropdownMenu>
            ) : (
              <NavItem key={index} active={router.pathname === `${item.url}`}>
                <Link href={`${item.url}`}>
                  <a className='nav-link'>{item.name}</a>
                </Link>
              </NavItem>
            )
          )}
        </NavList>
      </Nav>

      <RightStyle>
        <CalendarIcon />
      </RightStyle>
    </HeaderStyle>
  );
};

export default Header;
