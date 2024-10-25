import classNames from 'classnames';
import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';
import React, {Fragment, useEffect, useState} from 'react';

import {ImageGalleryProps} from '@/component/card/ImageGalleryCard';
import UploadImageForm from '@/component/form/UploadImageForm';
import Modal from '@/component/modals/Modal';
import {useIsMobile} from '@/hook/useIsMobile';
import {getAllImagesGallery} from '@/services/imageGalleryService';

import ImageCard from './ImageCard';
import DeleteImageForm from '@/component/form/DeleteImageForm';

const GalleryAdmin = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isReload, setIsReload] = useState<boolean>(false); //TODO: faire un hook
  const [imagesList, setImagesList] = useState<ImageGalleryProps[]>([]);
  const params = useSearchParams();
  const pathName = usePathname();
  const isMobile = useIsMobile();

  const toggleTableVisibility = () => {
    setIsTableVisible((prev) => !prev);
  };

  useEffect(() => {
    getAllImagesGallery()
      .then((res) => {
        setImagesList(res);
        console.log(res);
      })
      .catch((e) => {
        return e;
      });
    setIsReload(false);
  }, [isReload]);

  return (
    <>
      {isMobile ? (
        <div>
          <div>
            <div className='flex flex-col gap-4 mx-5 my-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-8 rounded-lg'>
              <div className='flex flex-col gap-6 pb-5'>
                <h2 className='text-3xl font-jimNightshade uppercase text-[#FE6A6A]'>
                  Gestion de la galerie photos
                </h2>
                <button
                  onClick={toggleTableVisibility}
                  className='py-2 bg-[#FFBCB2] self-end w-32 text-white rounded hover:bg-[#FE6A6A] transition duration-300'
                >
                  {isTableVisible ? 'Masquer' : 'Afficher'}
                </button>
                <p className='text-[#FE6A6A] text-right'>
                  Cliquez pour afficher/masquer les photos
                </p>
              </div>
              <div
                className={classNames(
                  'transition-max-height overflow-hidden duration-500',
                  {
                    'max-h-0 ease-out-expo': !isTableVisible,
                    'h-auto max-h-[10000px]': isTableVisible,
                  }
                )}
              >
                <Link href={`${pathName}?upload=1`}>
                  <button className='ml-2 self-start mb-10 py-2 bg-[#FE6A6A] w-48 text-white rounded hover:bg-[#FFBCB2] transition duration-300'>
                    Télécharger une image
                  </button>
                </Link>
                <div className='flex flex-wrap gap-6 items-center'>
                  {imagesList &&
                    imagesList.map((image) => (
                      <Fragment key={image.id}>
                        <ImageCard
                          id={image.id}
                          image_url={image.image_url}
                          pathName={pathName}
                        />
                      </Fragment>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='flex flex-col gap-4 mx-5 my-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-8 rounded-lg'>
            <div className='flex justify-between'>
              <h2 className='text-3xl font-jimNightshade uppercase text-[#FE6A6A]'>
                Gestion de la galerie photos
              </h2>
              <div className='flex flex-col items-end gap-4'>
                <button
                  onClick={toggleTableVisibility}
                  className='py-2 bg-[#FFBCB2] w-32 text-white rounded hover:bg-[#FE6A6A] transition duration-300'
                >
                  {isTableVisible ? 'Masquer' : 'Afficher'}
                </button>
                <p className='text-[#FE6A6A] text-right'>
                  Cliquez pour afficher/masquer les photos
                </p>
              </div>
            </div>
            <div
              className={classNames(
                'transition-max-height overflow-hidden duration-500',
                {
                  'max-h-0 ease-out-expo': !isTableVisible,
                  'h-auto max-h-[1000px]': isTableVisible,
                }
              )}
            >
              <Link href={`${pathName}?upload=1`}>
                <button className='ml-2 self-start mb-10 py-2 bg-[#FE6A6A] w-48 text-white rounded hover:bg-[#FFBCB2] transition duration-300'>
                  Télécharger une image
                </button>
              </Link>
              <div className='flex flex-wrap gap-6 items-center'>
                {imagesList &&
                  imagesList.map((image) => (
                    <Fragment key={image.id}>
                      <ImageCard
                        id={image.id}
                        image_url={image.image_url}
                        pathName={pathName}
                      />
                    </Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal isOpen={params.has('upload')}>
        <UploadImageForm
          id={Number(params.get('upload'))}
          pathName={pathName}
          setIsReload={setIsReload}
        />
      </Modal>
      <Modal isOpen={params.has('delete-image')}>
        <DeleteImageForm
          id={Number(params.get('delete-image'))}
          pathName={pathName}
          setIsReload={setIsReload}
        />
      </Modal>
    </>
  );
};

export default GalleryAdmin;
