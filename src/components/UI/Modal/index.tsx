import { NextPage } from 'next';
import React, { ReactNode, useEffect, useState } from 'react';
import { BackDrop } from './Modal.styled';
import { createPortal } from 'react-dom';

const ModalComponent = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode | ReactNode[];
}) => {
  return (
    <>
      {children}
      <BackDrop onClick={onClose} />
    </>
  );
};

const Modal = ({
  children,
  onClose,
}: {
  onClose: () => void;
  children: ReactNode | ReactNode[];
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const modal = document.querySelector('#modal-root')!;

  return (
    <>
      {mounted
        ? createPortal(<ModalComponent onClose={onClose}>{children}</ModalComponent>, modal)
        : null}
    </>
  );
};

export default Modal;
