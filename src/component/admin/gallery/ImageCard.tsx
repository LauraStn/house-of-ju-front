import Image from 'next/image';
import React from 'react';
import {BsFillTrash3Fill} from 'react-icons/bs';

import {ImageGalleryProps} from '@/component/card/ImageGalleryCard';

const ImageCard = (props: ImageGalleryProps) => {
  return (
    <div className='flex flex-col items-end gap-3 p-4 rounded-lg mb-6 shadow-lg shadow-melon'>
      <BsFillTrash3Fill className='cursor-pointer text-bittersweet' />
      <Image
        src={`http://localhost:3000/image/view/${props.image_url}`}
        // src={'/images/image6.jpg'}
        alt={''}
        width={1200}
        height={2000}
        className='self-center w-32'
      />
    </div>
  );
};

export default ImageCard;
