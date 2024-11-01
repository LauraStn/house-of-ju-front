'use client';
import Image from 'next/image';
import React, {Fragment, useEffect, useState} from 'react';

import ImageGalleryCard, {
  ImageGalleryProps,
} from '@/component/card/ImageGalleryCard';
import {getAllImagesGallery} from '@/services/imageGalleryService';

export default function Gallery() {
  const [imagesList, setImagesList] = useState<ImageGalleryProps[]>([]);

  useEffect(() => {
    getAllImagesGallery()
      .then((res) => {
        setImagesList(res);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  return (
    <div>
      <div className='bg-gallery-flowers md:flex md:justify-center md:items-center bg-no-repeat bg-cover h-[300px] py-5 px-5 md:h-[450px] lg:bg-[center_bottom_-10rem] lg:h-[500px]'>
        <div className='bg-white bg-transparent self-center md:h-2/3 md:w-1/2 bg-opacity-75 md:self-center h-full gap-8 flex flex-col justify-center items-center border-double border-4 border-[#FE6A6A]'>
          <Image
            src={'/images/gallery-hands.webp'}
            alt={''}
            width={653}
            height={382}
            className='w-52'
          />
          <h2 className='font-jimNightshade uppercase text-2xl text-[#FE6A6A]'>
            Galerie photos
          </h2>
        </div>
      </div>
      <div className='flex flex-col gap-4 mx-5 my-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-8 rounded-lg'>
        <h3 className='font-jimNightshade self-center uppercase text-[#FE6A6A] text-4xl'>
          Ongles des mains
        </h3>
        <div className='flex flex-wrap md:flex-row items-center gap-10 flex-col'>
          {imagesList &&
            imagesList.map((image) => (
              <Fragment key={image.id}>
                <ImageGalleryCard id={image.id} image_url={image.image_url} />
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
