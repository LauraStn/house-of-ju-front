import classNames from 'classnames';
import React, { useState} from 'react';

import {useIsMobile} from '@/hook/useIsMobile';

import ImageCard from './ImageCard';

const GalleryAdmin = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible((prev) => !prev);
  };

  const isMobile = useIsMobile();
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
                    'h-auto max-h-[1000px]': isTableVisible,
                  }
                )}
              >
                <button className='ml-2 self-start mb-10 py-2 bg-[#FE6A6A] w-48 text-white rounded hover:bg-[#FFBCB2] transition duration-300'>
                  Télécharger une image
                </button>
                <div className='flex flex-wrap gap-6 items-center'>
                  <ImageCard id={0} image_url={''} />
                  <ImageCard id={0} image_url={''} />
                  <ImageCard id={0} image_url={''} />
                  <ImageCard id={0} image_url={''} />
                  <ImageCard id={0} image_url={''} />
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
                'transition-max-height overflow-hidden duration-500 p-8',
                {
                  'max-h-0 ease-out-expo': !isTableVisible,
                  'h-auto max-h-[1000px]': isTableVisible,
                }
              )}
            >
              <button className='ml-2 self-start mb-10 py-2 bg-[#FE6A6A] w-48 text-white rounded hover:bg-[#FFBCB2] transition duration-300'>
                Télécharger une image
              </button>
              <div className='flex flex-wrap gap-6 items-center'>
                <ImageCard id={0} image_url={''} />
                <ImageCard id={0} image_url={''} />
                <ImageCard id={0} image_url={''} />
                <ImageCard id={0} image_url={''} />
                <ImageCard id={0} image_url={''} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryAdmin;
