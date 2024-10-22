import Image from 'next/image'
import React, { Fragment } from 'react'
import Input, { AuthProps } from '../Input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { registerUser } from '@/services/authService'
import { Arima } from 'next/font/google'
import { toast } from 'react-toastify'

export type FormFields = {
    type:string,
    id:string,
    label:string,
    name:"email" | "password" | "first_name" | "last_name" | "phone" | "address"
}

export const arima = Arima({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-arima'
})
const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<AuthProps>();
    
      const onSubmit: SubmitHandler<AuthProps> = (data) =>
        registerUser(data)
      
          .then((res) => {
            console.log(res);

            if (res.status === 201) {
              // toast.success(res.data.message)
            } else {
              console.log(res);
              // toast.error(res.data.message)
            }
          })
          // .catch((e) => toast.error(e));

    const formFields: FormFields[] = [{
        type:"email",
        id:"email",
        label:"Email",
        name:"email"
    },{
        type:"text",
        id:"first_name",
        label:"Prénom",
        name:"first_name"
    },{
        type:"text",
        id:"last_name",
        label:"Nom",
        name: "last_name"
    },{
        type:"tel",
        id:"phone",
        label:"Téléphone",
        name:"phone"
    },{
        type:"text",
        id:"address",
        label:"Adresse postale",
        name:"address"
    },{
        type:"password",
        id:"password",
        label:"Mot de passe",
        name:"password"
    },
]

  return (
    <div>
        <div>
            <Image 
            src={"/images/registLogin.webp"} 
            alt={""}
            width={2000}
            height={669}/>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 my-10 mx-auto p-10 shadow-2xl rounded-lg w-[400px]'>
            <h3 className='font-jimNightshade uppercase font-bold text-5xl text-[#FE6A6A]'>Bienvenue</h3>
            <p  className='text-center font-arima text-xl text-[#FFA79A]'>Créer votre espace client pour prendre rendez-vous.</p>
            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col justify-center items-center gap-4'>
                {formFields.map(field => 
                <Fragment key={field.id}>
                    <Input type={field.type} id={field.id} label={field.label} name={field.name} register={register}/>
                </Fragment>
                )}
            <div className='mt-10'>
                <input type="submit" value="S'enregistrer" className='cursor-pointer w-72 text-white h-10 bg-[#FFA79A] rounded-lg'/>
            </div>
            <div className='mt-4 flex flex-col gap-3 justify-center items-center'>
                <p className='text-[#FFA79A]'>Mot de passe oublié ?</p>
                <a className='text-[#FE6A6A]' href="">Réinitialiser le mot de passe</a>
            </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
