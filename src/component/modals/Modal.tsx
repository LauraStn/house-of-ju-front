'use client';

import classNames from 'classnames';
import React, {PropsWithChildren} from 'react';

const Modal = (
  props: PropsWithChildren & {
    isOpen: boolean;
    className?: string;
  }
) => {
  return (
    <div
      className={classNames(
        'fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm',
        props.className,
        {hidden: !props.isOpen, block: props.isOpen}
      )}
    >
      {props.children}
    </div>
  );
};

export default Modal;
