import Image from 'next/image';
import React, { useRef, useState } from 'react';
import {
  BurgerIcon,
  DropdownMenu,
  HeaderContainer,
  HeaderStyles,
  Nav,
  NavbarMobile,
  NavItem,
  NavItemIcon,
  NavList,
  RightStyle,
} from './Header.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CalendarIcon from '@assets/icons/CalendarIcon';
import Menu from '@config/menus.json';
import Icon from '@components/UI/Icon';
import useOnClickOutside from '@hooks/useOnClickOutside';
import SubmenuItem from './SubmenuItem';
import ModalX from './ModalX';
import Modal from '@components/UI/Modal';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [visibleSubmenu, setVisibleSubMenu] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const router = useRouter();
  const [activeHeader, setActiveHeader] = useState(false);

  const toggleSubMenu = () => setVisibleSubMenu((prev) => !prev);
  const toggleModal = () => setModalIsOpen((prev) => !prev);
  const toggleHeader = () => setActiveHeader((prev) => !prev);

  useOnClickOutside(menuRef, () => {
    setVisibleSubMenu(false);
  });

  return (
    <HeaderStyles>
      <HeaderContainer>
        <div className='image'>
          <Image src={'/Logo.svg'} width={36} height={36} alt='Logo' />
        </div>

        <Nav activeHeader={activeHeader}>
          <NavList>
            {Menu.mainMenu.map((item, index) =>
              item.subMenu ? (
                <DropdownMenu key={index}>
                  <NavItemIcon
                    ref={menuRef}
                    onClick={toggleSubMenu}
                    visibleSubmenu={visibleSubmenu}
                  >
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
          <div className='calendar-icon'>
            <CalendarIcon onClick={toggleModal} />
          </div>

          <BurgerIcon activeHeader={activeHeader} onClick={toggleHeader} />
        </RightStyle>
      </HeaderContainer>

      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <ModalX />
        </Modal>
      )}
    </HeaderStyles>
  );
};

export default Header;
