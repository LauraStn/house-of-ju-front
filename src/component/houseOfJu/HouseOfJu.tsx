import Image from 'next/image';
import React from 'react';

const HouseOfJu = () => {
  return (
    <div className='flex flex-col gap-4'>
        <Image
          src={'/images/flowersHouseOfJu.png'}
          alt={''}
          width={756}
          height={323}
        //   className='self-center'
        />
      <h2 className='text-[#FFCECA] text-4xl text-center font-laBelleAurore'>
        House of Ju
      </h2>
    </div>
  );
};

export default HouseOfJu;
