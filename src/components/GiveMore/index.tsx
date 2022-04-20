import React, { ReactNode } from 'react';
import Icon from '../UI/Icon';
import { GiveMoreStyles } from './GiveMore.styled';

const GiveMore = ({
  iconName,
  iconSize,
  data,
}: {
  iconName: string;
  iconSize?: number;
  data: string;
}) => {
  return (
    <>
      <GiveMoreStyles>
        <div className='inner'>
          <div className='icon'>
            <Icon name={iconName} size={iconSize} />
          </div>

          <div dangerouslySetInnerHTML={{ __html: data }} className='children' />
        </div>
      </GiveMoreStyles>
    </>
  );
};

export default GiveMore;
