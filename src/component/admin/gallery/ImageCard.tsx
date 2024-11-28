'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {BsFillTrash3Fill} from 'react-icons/bs';

import {ImageGalleryProps} from '@/component/card/ImageGalleryCard';

const ImageCard = (props: ImageGalleryProps & {pathName: string}) => {
  return (
    <div className='flex flex-col items-end gap-3 p-4 rounded-lg mb-6 shadow-lg text-bittersweet shadow-melon'>
      <Link href={`${props.pathName}?delete-image=${props.id}`} scroll={false}>
        <BsFillTrash3Fill className='hover:text-red-500' />
      </Link>
      <Image
        src={`http://localhost:3003/download-image/view/${props.image_url}`}
        alt={'photos de mains manucurées'}
        width={1200}
        height={2000}
        className='self-center max-w-32'
      />
    </div>
  );
};

export default ImageCard;
