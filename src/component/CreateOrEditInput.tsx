import React from 'react';
import {UseFormRegister} from 'react-hook-form';

export type CreateOrEditNailServiceProps = {
  name: string;
  description: string;
  duration: number;
  price: number;
};

type CreateOrEditInputProps = {
  type: 'text' | 'number';
  id: string;
  label: string;
  name: 'name' | 'description' | 'duration' | 'price';
  register: UseFormRegister<CreateOrEditNailServiceProps>;
  value: string | number;
};

const CreateOrCreateOrEditInput = (props: CreateOrEditInputProps) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[#FE6A6A] font-bold' htmlFor={props.id}>
        *{props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        className='focus:outline-none p-2 focus:border-[#FFA79A] focus:ring-1 focus:ring-[#FFA79A] border-solid border-2 border-[#FFF2F0] rounded-md h-8 w-96'
        {...props.register(props.name, {required: true})}
        defaultValue={props.value}
      />
    </div>
  );
};

export default CreateOrCreateOrEditInput;
