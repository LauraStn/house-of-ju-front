// 'use client';
import React from 'react';

import GalleryAdmin from '@/component/admin/gallery/GalleryAdmin';
import NailServiceAdmin from '@/component/admin/NailService/NailServiceTable';

export default function Admin() {
  return (
    <div>
      <div className='bg-admin bg-cover bg-no-repeat h-[300px] flex justify-center py-5 px-5 md:h-[450px] lg:bg-[center_bottom_-10rem] lg:h-[500px]'>
        <div className='bg-white bg-transparent md:w-96 md:p-auto text-center bg-opacity-65 h-24 gap-8 flex flex-col justify-center items-center border-double border-4 border-melon'>
          <h2 className='font-jimNightshade uppercase text-2xl text-bittersweet'>
            Tableau de bord - administrateur
          </h2>
        </div>
      </div>
      <NailServiceAdmin />
      <GalleryAdmin />
    </div>
  );
}
