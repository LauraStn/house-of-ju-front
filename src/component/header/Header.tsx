import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-[#FFBCB2] text-white flex items-center justify-between'>
      <Image
        src={'/images/logojs.png'}
        alt=''
        width={513}
        height={487}
        className='h-20 w-20'
      />
      <nav>
        <ul className='flex gap-8 items-center'>
          <li>
            <a href='/login'>Login</a>
          </li>
          <li>
            <a href='/register'>Register</a>
          </li>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/admin'>Admin</a>
          </li>
          <li>
            <a href='/gallery'>Galerie</a>
          </li>
          <li>
            <a href='/services'>Beauté des ongles</a>
          </li>
        </ul>
      </nav>
      <p>burger</p>
    </header>
  );
};

export default Header;
