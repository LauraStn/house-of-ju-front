'use client';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, {Fragment, useEffect, useState} from 'react';
import {FaUserLarge} from 'react-icons/fa6';
import {SlLogout} from 'react-icons/sl';

import {logoutAction} from '@/action/logoutAction';
import {Appointment} from '@/services/appointmentService';

import {Burger} from './Burger';

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
  is_active: boolean;
  appointments: Appointment[];
  isAdmin: boolean;
};

const Header = (props: {userLogged: User}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add('overflow-hidden');
    }
    if (!isOpen) {
      body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const logout = async () => {
    setIsOpen(false);
    await logoutAction();
  };
  const isAdmin =
    props.userLogged && props.userLogged.isAdmin ? '/admin' : '/profil';
  const userIsLogged = props.userLogged ? '/prise-de-rdv' : '/connexion';
  return (
    <div className='sticky top-0 z-50'>
      <div className='bg-bittersweet text-center text-persian-plum'>
        <span className='font-bold'>Version bêta:</span> Ce site est en cours de
        développement, si vous souhaitez prendre rdv veuillez le faire par
        téléphone.
      </div>
      <header
        className={classNames(
          'sticky md:static transition-all h-24 z-50 left-0 right-0 duration-500 bg-melon text-white  md:px-4 md:py-2 flex  md:flex-row '
        )}
      >
        <Image
          src={'/images/logojs.png'}
          alt=''
          width={513}
          height={487}
          className='h-20 self-center ml-4 w-20 sticky z-[60] md:static'
        />
        <Burger isOpen={isOpen} handleMenu={handleMenu} />
        <nav
          className={classNames(
            'fixed text-lg md:text-sm md:static md:flex md:flex-row w-full z-50 transition-all duration-500 top-0 left-0 right-0 items-center md:pt-0 h-screen md:h-auto backdrop-blur-lg md:justify-end lg:gap-16 xl:gap-60 2xl:gap-72 md:gap-12 bg-melon/70 md:bg-inherit',
            {
              'translate-x-full md:translate-x-0': !isOpen,
              'translate-x-0': isOpen,
            }
          )}
        >
          <ul
            className={classNames(
              'flex flex-col lg:text-xl md:flex-row flex-wrap gap-5 items-center pt-36 md:pt-0'
            )}
          >
            <li>
              <a href='/' onClick={() => setIsOpen(false)}>
                Accueil
              </a>
            </li>
            <li>
              <a href='/prestations' onClick={() => setIsOpen(false)}>
                Beauté des ongles
              </a>
            </li>
            <li>
              <a href={userIsLogged} onClick={() => setIsOpen(false)}>
                Prise de rendez-vous
              </a>
            </li>
            <li>
              <a href='/galerie' onClick={() => setIsOpen(false)}>
                Galerie
              </a>
            </li>
            <li>
              <a href='/' onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <div className='flex gap-5 items-center md:pt-0 lg:text-xl relative md:static z-50 justify-center md:justify-normal pt-9'>
            {props.userLogged !== undefined && (
              <>
                <button aria-label='déconnexion' onClick={() => logout()}>
                  <SlLogout className='text-[38px]' />
                </button>
                <Link
                  aria-label='profil'
                  onClick={() => setIsOpen(false)}
                  href={isAdmin}
                >
                  <FaUserLarge className='text-[38px]' />
                </Link>{' '}
              </>
            )}
            {props.userLogged === undefined && (
              <>
                <div className=' flex gap-4 flex-col md:flex-row'>
                  <Link
                    aria-label='connexion'
                    href={'/connexion'}
                    onClick={() => setIsOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link
                    aria-label='inscription'
                    href={'/inscription'}
                    onClick={() => setIsOpen(false)}
                  >
                    Inscription
                  </Link>
                </div>
              </>
            )}
          </div>
        </nav>

        {/* {isMobile ? (
        <nav className=' flex flex-row items-center justify-between'>
          <div className='flex text-3xl gap-3'>
            {props.userLogged !== null ? (
              props.userLogged.isAdmin ? (
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
                <a href='/prise-de-rdv'>Prise de rendez-vous</a>
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
              {props.userLogged !== null ? (
                 props.userLogged && props.userLogged.isAdmin ? (
                  <>
                    <button onClick={() => logoutAction()}>
                      {' '}
                      <SlLogout />
                    </button>

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
      )} */}
        {/* Je ne sais pas comment tu fais ton logout, mais moi je te fais ça, idéalement, il faudrait faire autrement mais je ne sais pas comment tu as appris */}
      </header>
    </div>
  );
};

export default Header;
