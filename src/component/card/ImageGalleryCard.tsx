import Image from 'next/image';
import React from 'react';

export type ImageGalleryProps = {
  id: number;
  image_url: string;
};
const ImageGalleryCard = (props: ImageGalleryProps) => {
  return (
    <Image
      src={`http://localhost:3000/image/view/${props.image_url}`}
      // src={'/images/image6.jpg'}
      alt=''
      width={1200}
      height={2000}
      className='w-72'
    />
  );
};

export default ImageGalleryCard;
