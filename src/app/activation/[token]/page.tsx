'use client';
import {validateAccount} from '@/services/authService';
import Image from 'next/image';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import React, {useEffect} from 'react';
import {toast} from 'react-toastify';
export default async function Activation({params}: {params: {token: string}}) {
  useEffect(() => {
    validateAccount(params.token)
      .then((res) => {
        toast.success(res.data);
        return;
      })
      .catch((e) => {
        toast.error(e);
        return e;
      });
  }, []);
  return (
    <div>
      <div>
        <Image
          src={'/images/account4.jpg'}
          alt={''}
          width={2000}
          height={669}
          className=''
        />
      </div>
      <div className='flex flex-col text-lg gap-6 my-10 mx-auto p-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] rounded-lg w-[350px] md:w-[600px]'>
        <p className='text-bittersweet text-center'>
          Votre compte est activé vous pouvez à présent vous connecter a votre
          espace client.{' '}
        </p>
        <p className='text-bittersweet text-center'>
          Cliquer{' '}
          <Link href='/connexion' className='text-persian-plum'>
            ici
          </Link>{' '}
          pour retourner à la page de connexion.
        </p>
      </div>
    </div>
  );
}
