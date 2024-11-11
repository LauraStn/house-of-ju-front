'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

import {addImageToGallery, uploadImage} from '@/services/imageGalleryService';

export type AddImageGallery = {
  file?: File[];
};

const UploadImageForm = (props: {
  id: number;
  pathName: string;
  setIsReload: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {register, handleSubmit} = useForm<AddImageGallery>();
  const router = useRouter();

  const [previewUrl, setPreviewUrl] = useState<{src: string; name: string}>();
  const resetPreview = () => {
    setPreviewUrl({name: '', src: ''});
  }; // TODO: refactoriser

  const onSubmit: SubmitHandler<AddImageGallery> = async (data) => {
    if (data.file && data.file[0]) {
      const formData = new FormData();
      formData.append('file', data.file[0]);

      try {
        const uploadResponse = await uploadImage(formData);
        const filename = uploadResponse.data;
        formData.delete('file');
        formData.append('image_url', filename);

        const res = await addImageToGallery(formData);

        if (res.status === 201) {
          toast.success('Image ajouté à la galerie');
          router.push(props.pathName);
          props.setIsReload(true);
          resetPreview();
        }
      } catch (e) {
        return e;
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl({name: file.name, src: imageUrl});
    }
  };

  return (
    <div className='text-bittersweet bg-white p-7 rounded-xl shadow-2xl'>
      <h3 className='font-jimNightshade uppercase text-3xl pb-10 text-center'>
        Ajouter une image à la galerie
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 justify-around'>
          <label
            htmlFor=''
            className='relative p-5 w-3/4 self-center text-center text-white bg-melon rounded-lg cursor-pointer'
          >
            <input
              type='file'
              id='file'
              accept='image/*'
              className='cursor-pointer top-0 right-8 opacity-0 absolute  focus:outline-none focus:border-mona-lisa focus:ring-1 focus:ring-mona-lisa border-solid border-2 border-chardon rounded-md h-full'
              {...register('file', {required: true})}
              onChange={handleFileChange}
            />
            Cliquer ici pour choisir un fichier
          </label>

          {previewUrl?.src && (
            <div className='m-4 flex flex-col gap-4 items-center'>
              <Image
                src={previewUrl.src}
                alt="Aperçu de l'image"
                width={150}
                height={150}
                className='rounded-md'
              />
              <p>{previewUrl.name}</p>
            </div>
          )}

          <div className='flex pt-10 justify-around'>
            <Link
              href={props.pathName}
              scroll={false}
              onClick={resetPreview}
              className='py-2 px-5 cursor-pointer w-24 text-white h-10 bg-mona-lisa rounded-lg'
            >
              Annuler
            </Link>

            <input
              type='submit'
              value='Valider'
              className='cursor-pointer w-24 text-white h-10 bg-mona-lisa rounded-lg'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadImageForm;
