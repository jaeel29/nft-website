import CalendarIcon from '@assets/icons/CalendarIcon';
import ColorPalette from '@assets/icons/ColorPaletteIcon';
import DesignerIcon from '@assets/icons/DesignerIcon';
import DeveloperIcon from '@assets/icons/DeveloperIcon';
import Icon from '@components/UI/Icon';
import Link from 'next/link';
import React from 'react';
import { SubItemStyled } from './SubmenuItem.styled';

const obj: any = {
  developer: <DeveloperIcon />,
  designer: <ColorPalette />,
  graphic: <DesignerIcon />,
};

const SubmenuItem = ({ subMenu }: { subMenu: any }) => {
  return (
    <SubItemStyled>
      <Link href={subMenu.url} passHref>
        <div className='inner'>
          <div className='item-icon'>{obj[subMenu.icon]}</div>

          <li className='item-title'>
            <span className='title'>{subMenu.title}</span>
            <p className='paragraph'>{subMenu.description}</p>
          </li>
        </div>
      </Link>
    </SubItemStyled>
  );
};

export default SubmenuItem;
