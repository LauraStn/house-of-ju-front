'use client';

import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  handleMenu: () => void;
};

export const Burger = (props: Props) => {
  const burgerClasses = [
    classNames('duration-500 block w-10 h-[2px] bg-white transition-all', {
      'transition-transform  duration-500 rotate-45 translate-y-4':
        props.isOpen,
    }),
    classNames('duration-500 block w-10 h-[2px] bg-white mx-auto', {
      'duration-500 invisible opacity-0 ': props.isOpen,
    }),
    classNames('duration-500 block w-10 h-[2px] bg-white transition-all', {
      'transition-transform  duration-500 -rotate-45 translate-y-2':
        props.isOpen,
    }),
  ];

  const handleClick = () => {
    props.handleMenu();
  };
  return (
    <div
      className={classNames(
        ' sticky top-24 flex h-[40px] flex-col gap-2 right-7 w-10 ml-auto self-center md:hidden cursor-pointer z-[60] min-[320px]:scale-[.8] sm:scale-100 -translate-y-4',
        {
          'gap-[1px]': props.isOpen,
        }
      )}
      onClick={handleClick}
    >
      <span className={burgerClasses[0]}></span>
      <span className={burgerClasses[1]}></span>
      <span className={burgerClasses[2]}></span>
    </div>
  );
};
