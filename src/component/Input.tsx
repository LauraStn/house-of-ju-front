'use client'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
export type AuthProps = {
    email: string;
    first_name: string;
    last_name: string;
    address: string;
    password: string;
    phone: number
};

type inputProps = {
    type: string
    id: string
    label: string
    name: "email" | "password" | "first_name" | "last_name" | "phone" | "address"
    register:UseFormRegister<AuthProps>
}

const Input = (props: inputProps) => {

  return (
    <div className='flex flex-col'>
        <label className='text-[#FE6A6A] font-arima' htmlFor={props.id}>*{props.label}</label>
        <input type={props.type} id={props.id} className='focus:outline-none focus:border-[#FFA79A] focus:ring-1 focus:ring-[#FFA79A] border-solid border-2 border-[#FFF2F0] rounded-md h-8 w-72'
        {...props.register(props.name, { required: true })} />
    </div>
  )
}

export default Input
