import React, { ReactNode } from 'react';
import { ButtonStyles } from './Button.styled';

const Button = ({
  fill,
  outline,
  children,
}: {
  fill?: boolean;
  outline?: boolean;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <>
      <ButtonStyles outline={outline} fill={fill ? 1 : 0}>
        {children}
      </ButtonStyles>
    </>
  );
};

export default Button;
