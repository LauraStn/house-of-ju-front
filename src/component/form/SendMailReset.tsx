'use client';
import {sendResetEmail} from '@/services/authService';
import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {toast} from 'react-toastify';
import {AuthProps} from '../Input';
import {useRouter} from 'next/navigation';
import {RxCross2} from 'react-icons/rx';
import Link from 'next/link';

const SendMailReset = (props: {pathName: string}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<AuthProps>();

  const onSubmit: SubmitHandler<Pick<AuthProps, 'email'>> = (data) =>
    sendResetEmail(data).then((res) => {
      if (res.status === 201) {
        toast.success('Email envoyé avec lien de réinitialisation');
        router.push(props.pathName);
      } else {
        toast.error("Ce email n'est lié à aucun compte");
      }
    });
  return (
    <div className='text-bittersweet w-[450px] flex flex-col bg-white p-7 rounded-xl shadow-2xl'>
      <Link href={props.pathName} scroll={false} className='cursor-pointer self-end'>
        <RxCross2 />
      </Link>
      <div className='p-4 flex flex-col justify-center items-center gap-2'>
        <h3 className=' font-jimNightshade uppercase text-4xl pb-5'>
          Mot de passe oublié
        </h3>
        <p className='text-center text-mona-lisa w-72 pb-10'>
          Entrez votre email pour réinitialiser votre mot de passe
        </p>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col justify-center items-center gap-4'
          >
            <div className='flex flex-col'>
              <label
                className='text-[#FE6A6A] font-arima'
                htmlFor='description'
              >
                *Email
              </label>
              <input
                type='email'
                id='email'
                className='focus:outline-none p-2 focus:border-[#FFA79A] focus:ring-1 focus:ring-[#FFA79A] border-solid border-2 border-[#FFF2F0] rounded-md h-8 w-72'
                {...register('email', {required: true})}
              />
            </div>

            <div className='mt-10'>
              <input
                type='submit'
                value='Envoyer'
                className='cursor-pointer w-72 text-white h-10 bg-[#FFA79A] rounded-lg'
              />
            </div>
            <div className='mt-4 flex flex-col gap-3 justify-center items-center'></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMailReset;
