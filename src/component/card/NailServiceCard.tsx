'use client';
import Image, {StaticImageData} from 'next/image';
import React from 'react';

export type NailServiceProps = {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
};

const NailServiceCard = (
  props: NailServiceProps & {
    image: StaticImageData;
    reverse: boolean;
  }
) => {
  return (
    <div
      key={props.id}
      className={`m-5 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-10 md:mx-24 rounded-md justify-around items-center flex flex-col lg:flex-row ${
        props.reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className='gap-8 flex flex-col lg:w-96'>
        <h2 className='text-bittersweet font-jimNightshade uppercase text-3xl'>
          {props.name}
        </h2>
        <p className='text-bittersweet'>Durée: {props.duration} min</p>
        <p className='text-mona-lisa'>{props.description}</p>
        <p className='text-bittersweet text-right text-xl'>
          Prix: {props.price}€
        </p>
      </div>
      <div className='self-center lg:self-auto'>
        <Image
          src={props.image.src}
          alt=''
          width={props.image.width}
          height={props.image.height}
          className='w-60 rounded-full'
        />
      </div>
    </div>
  );
};

export default NailServiceCard;
