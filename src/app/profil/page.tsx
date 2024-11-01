'use client';
import {getUserLogged} from '@/services/userService';
import Image from 'next/image';
import {useEffect} from 'react';

export default function Profil() {
  useEffect(() => {
    getUserLogged()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        return e;
      });
  }, []);
  return (
    <div>
      <div className='bg-profil md:flex md:justify-center md:items-center bg-no-repeat bg-cover h-[300px] py-5 px-5 md:h-[450px] lg:bg-[center_bottom_-10rem] lg:h-[500px]'>
        <div className='bg-white bg-transparent self-center md:h-2/3 md:w-1/2 bg-opacity-75 md:self-center h-full gap-8 flex flex-col justify-center items-center border-double border-4 border-[#FE6A6A]'>
          <Image
            src={'/images/gallery-hands.webp'}
            alt={''}
            width={653}
            height={382}
            className='w-52'
          />
          <h2 className='font-jimNightshade uppercase text-2xl text-[#FE6A6A]'>
            Mon profil
          </h2>
        </div>
      </div>
    </div>
  );
}
