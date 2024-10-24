import React from 'react';
import {UseFormRegister} from 'react-hook-form';


export type CreateOrEditNailServiceProps = {
  name: string;
  description: string;
  duration: number;
  price: number;
};

type editInputProps = {
  type: 'text' | 'number';
  id: string;
  label: string;
  name: 'name' | 'description' | 'duration' | 'price';
  register: UseFormRegister<CreateOrEditNailServiceProps>;
  value: string | number;
};

const EditInput = (props: editInputProps) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[#FE6A6A] font-arima' htmlFor={props.id}>
        *{props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        className='focus:outline-none focus:border-[#FFA79A] focus:ring-1 focus:ring-[#FFA79A] border-solid border-2 border-[#FFF2F0] rounded-md h-8 w-72'
        {...props.register(props.name, {required: true})}
        defaultValue={props.value}
      />
    </div>
  );
};

export default EditInput;
