'use client';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

import {createNailService} from '@/services/nailService';

import CreateOrEditInput, {
  CreateOrEditNailServiceProps,
} from '../CreateOrEditInput';

const CreateServiceForm = (props: {
  id: number;
  pathName: string;
  setIsReload: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
  } = useForm<CreateOrEditNailServiceProps>();

  const onSubmit: SubmitHandler<CreateOrEditNailServiceProps> = async (
    data
  ) => {
    createNailService({
      ...data,
      price: Number(data.price),
      duration: Number(data.duration),
    }).then((res) => {
      if (res.status === 201) {
        router.push(props.pathName);
        props.setIsReload(true);
        toast.success('Prestation ajoutée');
      } else {
        toast.error("Echec de l'ajout");
      }
    });
  };

  return (
    <div className='text-bittersweet bg-white p-7 rounded-xl shadow-2xl'>
      <h3 className=' font-jimNightshade uppercase text-4xl pb-10'>
        Ajouter une prestation
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <CreateOrEditInput
          type={'text'}
          id='name'
          label={'Nom'}
          name={'name'}
          register={register}
          value={''}
        />
        <div className='flex flex-col'>
          <label htmlFor='description' className='font-bold'>
            *Description
          </label>
          <textarea
            id='description'
            {...register('description')}
            cols={10}
            rows={8}
            className='focus:outline-none focus:border-[#FFA79A] focus:ring-1 focus:ring-[#FFA79A] border-solid border-2 border-[#FFF2F0] rounded-md p-3 text-justify'
          ></textarea>
        </div>

        <CreateOrEditInput
          type={'number'}
          id='price'
          label={'Prix'}
          name={'price'}
          register={register}
          value={''}
        />
        <CreateOrEditInput
          type={'number'}
          id='duration'
          label={'Durée'}
          name={'duration'}
          register={register}
          value={''}
        />
        <div className='flex justify-around'>
          <Link
            href={props.pathName} scroll={false}
            className='py-2 px-5 cursor-pointer w-24 text-white h-10 bg-[#FFA79A] rounded-lg'
          >
            Annuler
          </Link>
          <input
            type='submit'
            value='Valider'
            className='cursor-pointer w-24 text-white h-10 bg-[#FFA79A] rounded-lg'
          />
        </div>
      </form>
    </div>
  );
};

export default CreateServiceForm;
