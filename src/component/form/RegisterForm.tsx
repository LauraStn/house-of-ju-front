'use client';

import {Arima} from 'next/font/google';
import Image from 'next/image';
import React, {Fragment} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

import {registerUser} from '@/services/authService';

import Input, {AuthProps} from '../Input';

export type FormFields = {
  type: string;
  id: string;
  label: string;
  name: 'email' | 'password' | 'first_name' | 'last_name' | 'phone' | 'address';
};

export const arima = Arima({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-arima',
});
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<AuthProps>();

  const onSubmit: SubmitHandler<AuthProps> = (data) =>
    registerUser(data).then((res) => {
      console.log(res);

      if (res.status === 201) {
        toast.success(res.data);
      } else {
        console.log(errors);

        toast.error('Error');
      }
    });

  const formFields: FormFields[] = [
    {
      type: 'email',
      id: 'email',
      label: 'Email',
      name: 'email',
    },
    {
      type: 'text',
      id: 'first_name',
      label: 'Prénom',
      name: 'first_name',
    },
    {
      type: 'text',
      id: 'last_name',
      label: 'Nom',
      name: 'last_name',
    },
    {
      type: 'tel',
      id: 'phone',
      label: 'Téléphone',
      name: 'phone',
    },
    {
      type: 'text',
      id: 'address',
      label: 'Adresse postale',
      name: 'address',
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
        <h3 className='font-jimNightshade uppercase font-bold text-5xl text-[#FE6A6A]'>
          Bienvenue
        </h3>
        <p className='text-center font-arima text-xl text-[#FFA79A]'>
          Créer votre espace client pour prendre rendez-vous.
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
              value="S'enregistrer"
              className='cursor-pointer w-72 text-white h-10 bg-[#FFA79A] rounded-lg'
            />
          </div>
          <div className='mt-4 flex flex-col gap-3 justify-center items-center'>
            <p className='text-[#FFA79A] w-72 text-center text-xs'>
              En vous inscrivant, vous acceptez notre{' '}
              <a className=' text-[#FE6A6A] font-bold cursor-pointer'>
                politique de confidentialité
              </a>{' '}
              et le traitement de vos données personnelles.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
