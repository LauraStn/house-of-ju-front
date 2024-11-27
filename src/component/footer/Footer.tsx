import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {FaFacebook, FaInstagram} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col items-center gap-4 text-center bg-chardon py-10'>
        <Image
          src={'/images/logojs.png'}
          alt=''
          width={100}
          height={66}
          className='h-full'
        />
        <h3 className='text-bittersweet text-3xl font-laBelleAurore'>
          Prothésiste Ongulaire
        </h3>
        <h2 className='text-mona-lisa uppercase font-jimNightshade text-2xl'>
          Julia Santin
        </h2>
        <hr className='h-0.5 lg:w-1/4 w-3/4 bg-melon'></hr>
        <h3 className='text-bittersweet text-3xl font-laBelleAurore'>
          Adresse
        </h3>
        <p className='text-mona-lisa font-labelleaurore'>
          491 Route de la Vallée du Giffre
          <br />
          74250 La Roche-sur-Foron
        </p>
        <h3
          className={classNames('text-bittersweet text-3xl font-laBelleAurore')}
        >
          Horaires
        </h3>
        <p className='text-mona-lisa capitalize'>
          Lundi, Mardi, mercredi, jeudi, vendredi, 9h - 18h
          <br />
          Samedi et dimanche fermé
        </p>
        <hr className='h-0.5 lg:w-1/4 w-3/4 bg-melon'></hr>
        <div className='flex text-2xl gap-2 mb-4 text-bittersweet'>
          <Link
            aria-label='instagram'
            target='blank'
            href='https://www.instagram.com/houseofju22/'
          >
            <FaInstagram />
          </Link>{' '}
          <Link
            aria-label='facebook'
            target='blank'
            href='https://www.facebook.com/julia.dijoux.507'
          >
            <FaFacebook />
          </Link>
        </div>
      </div>
      <div className='bg-melon text-persian-plum font-jimNightshade uppercase text-xl flex flex-col justify-center items-center gap-3 py-5'>
        <nav className='lg:flex-row lg:gap-8 flex flex-col justify-center items-center gap-1'>
          <a href='/mentions-legales'>Mentions Légales</a>
          <a href='/cgu'>CGU</a>
          <a href='/politique-de-confidentialite'>
            Politique de confidentialité
          </a>
        </nav>
        <p>
          Réalisé par
          <a
            href='https://www.linkedin.com/in/lausantin/'
            target='blank'
            className='pl-6 text-bittersweet text-3xl font-bold capitalize font-laBelleAurore'
          >
            Laura Santin
          </a>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
