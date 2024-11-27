'use client';
import {setCookie} from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';
import {useRouter} from 'next/navigation';
import React, {Fragment} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

import {loginUser} from '@/services/authService';
import {getUserLogged} from '@/services/userService';

import Input, {AuthProps} from '../../inputs/Input';
import Modal from '../../modals/Modal';
import {FormFields} from './RegisterForm';
import SendMailReset from './SendMailReset';
import {loginAction} from '@/action/loginAction';

const LoginForm = () => {
  const params = useSearchParams();
  const pathName = usePathname();
  const {register, handleSubmit} = useForm<AuthProps>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Pick<AuthProps, 'email' | 'password'>> = async (
    data
  ) => {
    const res = await loginAction(data);
    if (res.statusCode !== 201) {
      toast.error(res.message);
      return;
    }
    toast.success(res.message);
    setCookie('cookieKey', res.token.access_token);
    const token = res.token.access_token;
    if (!token) {
      return toast.error('Connexion impossible');
    }
    const user = await getUserLogged({token: token});
    if (user.isAdmin) {
      return router.push('/admin');
    }
    return router.push('/profil');
  };

  const formFields: FormFields[] = [
    {
      type: 'email',
      id: 'email',
      label: 'Email',
      name: 'email',
    },
    {
      type: 'password',
      id: 'password',
      label: 'Mot de passe',
      name: 'password',
    },
  ];
  return (
    <div>
      <div>
        <Image
          src={'/images/registLogin.webp'}
          alt={''}
          width={2000}
          height={669}
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-4 my-10 mx-auto p-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] rounded-lg w-[350px] md:w-[400px]'>
        <h3 className='font-jimNightshade uppercase font-bold text-3xl text-bittersweet'>
          Ravie de vous revoir
        </h3>
        <p className='text-center font-arima text-xl text-mona-lisa'>
          Connectez vous à espace client pour gérer vos rendez-vous.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-center items-center gap-4'
        >
          {formFields.map((field) => (
            <Fragment key={field.label}>
              <Input
                type={field.type}
                id={field.id}
                label={field.label}
                name={field.name}
                register={register}
              />
            </Fragment>
          ))}
          <div className='mt-10'>
            <input
              type='submit'
              value='Se connecter'
              className='cursor-pointer w-72 text-white h-10 bg-mona-lisa rounded-lg'
            />
          </div>
          <div className='mt-4 flex flex-col gap-3 justify-center items-center'>
            <p className='text-mona-lisa'>Mot de passe oublié ?</p>
            <Link
              className='text-bittersweet cursor-pointer'
              href={`${pathName}?reset=1`}
              scroll={false}
            >
              Réinitialiser le mot de passe
            </Link>
          </div>
        </form>
      </div>
      <Modal isOpen={params.has('reset')}>
        <SendMailReset pathName={pathName} />
      </Modal>
    </div>
  );
};

export default LoginForm;
