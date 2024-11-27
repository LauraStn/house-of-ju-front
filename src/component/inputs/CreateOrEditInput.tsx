'use client';

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
      <label className='text-bittersweet font-bold' htmlFor={props.id}>
        *{props.label}
      </label>
      <input
        type={props.type}
        id={props.id} //TODO: modifier l'input duration (select) avec valeur: 30/60/90/120
        className='focus:outline-none p-2 focus:border-mona-lisa focus:ring-1 focus:ring-mona-lisa border-solid border-2 border-chardon rounded-md h-8 w-72 md:w-full'
        {...props.register(props.name, {required: true})}
        defaultValue={props.value}
      />
    </div>
  );
};

export default CreateOrCreateOrEditInput;
