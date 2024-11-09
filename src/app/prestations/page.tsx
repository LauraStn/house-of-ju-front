'use client';
import Image from 'next/image';
import React, {Fragment, useEffect, useState} from 'react';

import NailServiceCard, {
  NailServiceProps,
} from '@/component/card/NailServiceCard';
import {getAllNailServices} from '@/services/nailService';

import ongle1 from '../../../public/images/ongle1.webp';
import ongle2 from '../../../public/images/ongle2.webp';
import ongle3 from '../../../public/images/ongle3.webp';
import ongle4 from '../../../public/images/ongle4.webp';
import ongle5 from '../../../public/images/ongle5.webp';
import ongle6 from '../../../public/images/ongle6.webp';

export default function Services() {
  
  const [nailServiceList, setNailServiceList] = useState<NailServiceProps[]>(
    []
  );
  useEffect(() => {
    getAllNailServices()
      .then((res) => {
        setNailServiceList(res);
      })
      .catch((e) => {
        return e;
      });
  }, []);
  const nailImages = [ongle1, ongle2, ongle3, ongle4, ongle5, ongle6];
  
  return (
    <div>
      <div className='bg-nails1 md:flex md:justify-center md:items-center bg-no-repeat bg-cover h-[300px] py-5 px-5 md:h-[450px] lg:bg-[center_bottom_-10rem] lg:h-[500px]'>
        <div className='bg-white bg-transparent self-center md:h-2/3 md:w-1/2 bg-opacity-75 md:self-center h-full gap-8 flex flex-col justify-center items-center border-double border-4 border-[#FFBCB2]'>
          <Image
            src={'/images/main5.webp'}
            alt={''}
            width={352}
            height={302}
            className='w-32'
          />
          <h2 className='font-jimNightshade uppercase text-2xl text-[#FE6A6A]'>
            Beauté des ongles
          </h2>
        </div>
      </div>
      <div className='flex flex-col gap-10 my-12'>
        {nailServiceList &&
          nailServiceList?.map((item, index) => (
            <Fragment key={item.id}>
              <NailServiceCard
                description={item.description}
                duration={item.duration}
                name={item.name}
                price={item.price}
                id={item.id}
                image={nailImages[index]}
                reverse={index % 2 !== 0} //reverse les images en desktop
              />
            </Fragment>
          ))}
      </div>
    </div>
  );
}
