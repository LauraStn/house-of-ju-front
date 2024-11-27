'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

import {updateNailService} from '@/action/action';

import {NailServiceProps} from '../../card/NailServiceCard';
import CreateOrEditInput, {
  CreateOrEditNailServiceProps,
} from '../../inputs/CreateOrEditInput';

const EditServiceForm = (props: {
  nailService: NailServiceProps[];
  id: number;
  pathName: string;
  setIsReload: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const nailService = props.nailService.find((nail) => nail.id === props.id);

  const {register, handleSubmit} = useForm<CreateOrEditNailServiceProps>();

  const onSubmit: SubmitHandler<CreateOrEditNailServiceProps> = async (
    data
  ) => {
    const res = await updateNailService(props.id, {
      ...data,
      price: Number(data.price),
      duration: Number(data.duration),
    });
    // editNailService().then((res) => {
    if (res.success) {
      router.push(props.pathName);
      props.setIsReload(true);
      return toast.success(res.message);
    } else {
      return toast.error('Echec de la modification');
    }
  };

  return (
    <div className='text-bittersweet w-[350px] lg:h-[650px] lg:w-[500px] md:w-[400px] h-[650px] z-50 scroll-auto bg-white p-7 rounded-xl shadow-2xl'>
      <h3 className=' font-jimNightshade uppercase text-2xl lg:text-4xl pb-10'>
        Modifier une prestation
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <CreateOrEditInput
          type={'text'}
          id={nailService?.name as string}
          label={'Nom'}
          name={'name'}
          register={register}
          value={nailService?.name as string}
        />
        <div className='flex flex-col'>
          <label htmlFor='description' className='font-bold'>
            *Description
          </label>
          <textarea
            id={nailService?.name}
            {...register('description')}
            defaultValue={nailService?.description}
            cols={10}
            rows={8}
            className='focus:outline-none focus:border-mona-lisa focus:ring-1 focus:ring-mona-lisa border-solid border-2 border-chardon rounded-md p-3 text-justify'
          ></textarea>
        </div>

        <CreateOrEditInput
          type={'number'}
          id={nailService?.name as string}
          label={'Prix'}
          name={'price'}
          register={register}
          value={nailService?.price as number}
        />
        <CreateOrEditInput
          type={'number'}
          id={nailService?.name as string}
          label={'Durée'}
          name={'duration'}
          register={register}
          value={nailService?.duration as number}
        />
        <div className='flex justify-around'>
          <Link
            href={props.pathName}
            scroll={false}
            className='py-2 px-5 cursor-pointer w-24 text-white h-10 bg-mona-lisa rounded-lg'
          >
            Annuler
          </Link>
          <input
            type='submit'
            value='Valider'
            className='cursor-pointer w-24 text-white h-10 bg-mona-lisa rounded-lg'
          />
        </div>
      </form>
    </div>
  );
};

export default EditServiceForm;
