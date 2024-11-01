'use client';

import {useIsMobile} from '@/hook/useIsMobile';
import {userIsAdmin} from '@/utils/isAdmin';
import {userIsConnected} from '@/utils/isConnected';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {FaUserLarge} from 'react-icons/fa6';
import {RxHamburgerMenu} from 'react-icons/rx';
import {SlLogout} from 'react-icons/sl';

const Header = () => {
  const isMobile = useIsMobile();
  // const isConnected = userIsConnected();
  // const isAdmin = userIsAdmin();
  const [isConnected, setIsConnected] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Les états ne seront mis à jour qu'après le rendu initial du serveur
    setIsConnected(userIsConnected());
    setIsAdmin(userIsAdmin());
  }, []);
  return (
    <header className='bg-[#FFBCB2] text-white px-4 py-2'>
      {isMobile ? (
        <nav className=' flex flex-row items-center justify-between'>
          <div className='flex text-3xl gap-3'>
            {isConnected ? (
              isAdmin ? (
                <>
                  <Link href={'/admin'}>
                    <FaUserLarge />
                  </Link>
                </>
              ) : (
                <>
                  <Link href={'/profil'}>
                    <FaUserLarge />
                  </Link>
                </>
              )
            ) : (
              <Link href={'/connexion'}>
                <FaUserLarge className='text-4xl' />
              </Link>
            )}
          </div>
          <div>
            <Image
              src={'/images/logojs.png'}
              alt=''
              width={513}
              height={487}
              className='h-20 w-20'
            />
          </div>
          <div>
            <RxHamburgerMenu className='text-4xl' />
          </div>
        </nav>
      ) : (
        <nav className=' flex flex-row items-center justify-between lg:text-xl'>
          <div>
            <Image
              src={'/images/logojs.png'}
              alt=''
              width={513}
              height={487}
              className='h-20 w-20'
            />
          </div>
          <div>
            <ul className='flex flex-wrap gap-5 items-center'>
              <li>
                <a href='/'>Accueil</a>
              </li>
              <li>
                <a href='/prestations'>Beauté des ongles</a>
              </li>
              <li>
                <a href='/'>Prise de rendez-vous</a>
              </li>
              <li>
                <a href='/galerie'>Galerie</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
          </div>
          {isMobile ? (
            <div>
              <FaUserLarge />
            </div>
          ) : (
            <div className='flex text-3xl gap-3'>
              {isConnected ? (
                isAdmin ? (
                  <>
                    <Link href={'/'}>
                      <SlLogout />
                    </Link>
                    <Link href={'/admin'}>
                      <FaUserLarge />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href={'/'}>
                      <SlLogout />
                    </Link>
                    <Link href={'/profil'}>
                      <FaUserLarge />
                    </Link>
                  </>
                )
              ) : (
                <div className='text-base flex gap-4'>
                  <Link href={'/connexion'}>Connexion</Link>
                  <Link href={'/inscription'}>Inscription</Link>
                </div>
              )}
            </div>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
