'use client';
import Image from 'next/image';
import React, {Fragment} from 'react';
import {SubmitHandler,useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

import {loginUser} from '@/services/authService';

import Input, {AuthProps} from '../Input';
import {FormFields} from './RegisterForm';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<AuthProps>();

  const onSubmit: SubmitHandler<Pick<AuthProps, 'email' | 'password'>> = (
    data
  ) =>
    loginUser(data).then((res) => {
      if (res.status === 201) {
        toast.success('Login successfull');
        // window.localStorage.setItem('token', res.data.token.access_token);
        // window.localStorage.setItem('role', res.data.role);
      } else {
        console.log(errors);
        
      }
    });
  // .catch((e) => toast.error(e));

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
      <div className='flex flex-col justify-center items-center gap-4 my-10 mx-auto p-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] rounded-lg w-[400px]'>
        <h3 className='font-jimNightshade uppercase font-bold text-5xl text-[#FE6A6A]'>
          Bienvenue
        </h3>
        <p className='text-center font-arima text-xl text-[#FFA79A]'>
          Connectez vous à espace client pour gérer vos rendez-vous.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-center items-center gap-4'
        >
          {formFields.map((field) => (
            <Fragment key={field.id}>
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
              className='cursor-pointer w-72 text-white h-10 bg-[#FFA79A] rounded-lg'
            />
          </div>
          <div className='mt-4 flex flex-col gap-3 justify-center items-center'>
            <p className='text-[#FFA79A]'>Mot de passe oublié ?</p>
            <a className='text-[#FE6A6A]' href=''>
              Réinitialiser le mot de passe
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
