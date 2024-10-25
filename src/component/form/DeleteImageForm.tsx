import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import React from 'react';
import {toast} from 'react-toastify';

import {deleteImageOfGallery} from '@/services/imageGalleryService';

const DeleteImageForm = (props: {
  id: number;
  pathName: string;
  setIsReload: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  function HandleDeleteImage() {
    deleteImageOfGallery(props.id)
      .then((res) => {
        if (res.status === 200) {
          router.push(props.pathName);
          props.setIsReload(true);
          toast.success('Photo supprimée !');
          return;
        }
      })
      .catch((e) => toast.error(e));
  }
  const pathName = usePathname();
  return (
    <div className='text-bittersweet text-center bg-white p-7 rounded-xl shadow-2xl'>
      <h3 className='font-jimNightshade uppercase text-3xl pb-10'>
        Supprimer une photo
      </h3>
      <div className='flex flex-col gap-4'>
        <h3>Voulez vous vraiment supprimer cette photo ?</h3>
        <div className='flex justify-around pt-3'>
          <Link
            href={pathName}
            className='py-2 px-5 cursor-pointer w-24 text-white h-10 bg-[#FFA79A] rounded-lg'
          >
            Annuler
          </Link>
          <button
            onClick={() => {
              HandleDeleteImage();
            }}
            className='py-2 px-5 cursor-pointer w-24 text-white h-10 bg-[#FFA79A] rounded-lg'
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteImageForm;
