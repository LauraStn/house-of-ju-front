'use client';
import {deleteUserAppointment} from '@/action/action';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import React from 'react';
import {toast} from 'react-toastify';

const DeleteAppointmentForm = (props: {id: number}) => {
  const router = useRouter();
  const pathName = usePathname();
  async function HandleDeleteAppointment() {
    const res = await deleteUserAppointment(props.id);

    if (res.success) {
      router.push(pathName);
      return toast.success(res.message);
    }
    return toast.error('Erreur lors de la suppression');
  }

  return (
    <div className='text-bittersweet text-center bg-white w-[350px] md:w-[400px] h-[250px] z-50 pt-7 rounded-xl shadow-2xl'>
      <h3 className='font-jimNightshade uppercase text-3xl pb-10'>
        Supprimer un rendez-vous
      </h3>
      <div className='flex flex-col gap-4'>
        <h3>Voulez vous vraiment annuler ce rendez-vous ?</h3>
        <div className='flex justify-around pt-3'>
          <Link
            href={'/profil'}
            scroll={false}
            className='py-2 px-5 cursor-pointer w-24 text-white h-10 bg-mona-lisa rounded-lg'
          >
            Non
          </Link>
          <button
            onClick={() => {
              HandleDeleteAppointment();
            }}
            className='py-2 px-5 cursor-pointer w-24 text-white h-10 bg-mona-lisa rounded-lg'
          >
            Oui
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAppointmentForm;
