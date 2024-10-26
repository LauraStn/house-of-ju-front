'use client'

import classNames from 'classnames';
import React, {PropsWithChildren} from 'react';

const Modal = (
  props: PropsWithChildren & {
    isOpen: boolean;
  }
) => {
  return (
    <div
      className={classNames(
        'fixed inset-0 flex justify-center items-center backdrop-blur-sm',
        {hidden: !props.isOpen, block: props.isOpen}
      )}
    >
      {props.children}
    </div>
  );
};

export default Modal;
