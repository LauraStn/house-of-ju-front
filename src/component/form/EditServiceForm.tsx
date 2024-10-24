import Link from 'next/link';
import React from 'react';
import {
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {toast} from 'react-toastify';

import {editNailService} from '@/services/nailService';

import {NailServiceProps} from '../card/NailServiceCard';
import EditInput, {CreateOrEditNailServiceProps} from '../EditInput';

const EditServiceForm = (props: {
  nailService: NailServiceProps[];
  id: number;
  pathName: string;
}) => {
  const nailService = props.nailService.find((nail) => nail.id === props.id);
  console.log(nailService);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<CreateOrEditNailServiceProps>();

  const onSubmit: SubmitHandler<CreateOrEditNailServiceProps> = (data) =>
    editNailService(props.id, data).then((res) => {
      if (res.status === 201) {
        toast.success('Login successfull');
        window.localStorage.setItem('token', res.data.token.access_token);
        window.localStorage.setItem('role', res.data.role);
      } else {
        console.log(errors);

      }
    });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white flex flex-col gap-4'
    >
      <EditInput
        type={'text'}
        id={nailService?.name as string}
        label={'Nom'}
        name={'name'}
        register={register}
        value={nailService?.name as string}
      />
      <div className='flex flex-col'>
        <label htmlFor='description'>*Description</label>
        <textarea
          id={nailService?.name}
          {...register('description')}
          value={nailService?.description}
          cols={10}
          rows={8}
          className='focus:outline-none focus:border-[#FFA79A] focus:ring-1 focus:ring-[#FFA79A] border-solid border-2 border-[#FFF2F0] rounded-md h-8 w-72'
        ></textarea>
      </div>

      <EditInput
        type={'number'}
        id={nailService?.name as string}
        label={'Prix'}
        name={'price'}
        register={register}
        value={nailService?.price as number}
      />
      <EditInput
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
          className='py-2 px-5 cursor-pointer w-24 text-white h-10 bg-[#FFA79A] rounded-lg'
        >
          annuler
        </Link>
        <input
          type='submit'
          value='Valider'
          className='cursor-pointer w-24 text-white h-10 bg-[#FFA79A] rounded-lg'
        />
      </div>
    </form>
  );
};

export default EditServiceForm;
