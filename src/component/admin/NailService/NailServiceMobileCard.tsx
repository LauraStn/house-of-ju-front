import classNames from 'classnames';
import Link from 'next/link';
import {
  ReadonlyURLSearchParams,
} from 'next/navigation';
import React, {useState} from 'react';
import {BsFillTrash3Fill} from 'react-icons/bs';
import {FaPencilAlt} from 'react-icons/fa';

import {NailServiceProps} from '@/component/card/NailServiceCard';

const NailServiceMobileCard = (
  props: NailServiceProps & {
    pathName: string;
    params: ReadonlyURLSearchParams;
  }
) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        key={props.id}
        className='m-2 shadow-sm shadow-[#FE6A6A] p-5 md:mx-24 rounded-md flex flex-col lg:flex-row'
      >
        <div className='gap-2 flex flex-col lg:w-96'>
          <h2 className='text-[#FE6A6A] font-bold text-lg'>{props.name}</h2>
          <div className='flex justify-between'>
            <button
              onClick={toggleExpand}
              className='text-[#FFA79A] hover:underline self-start'
            >
              {isExpanded ? 'Voir moins' : 'Voir plus'}
            </button>
            <div className='flex gap-4 cursor-pointer text-[#FE6A6A]'>
              <Link href={`${props.pathName}?delete=${props.id}`}>
                <BsFillTrash3Fill className='hover:text-red-500' />
              </Link>
              <Link href={`${props.pathName}?edit=${props.id}`}>
                <FaPencilAlt className='hover:text-red-500' />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'transition-max-height overflow-hidden duration-500 mt-4 text-[#FE6A6A]',
            {
              'max-h-0 ease-out-expo': !isExpanded,
              'h-auto max-h-[1000px]': isExpanded,
            }
          )}
        >
          <div key={props.id}>
            <div className='gap-4 flex flex-col lg:w-96'>
              <p className=''>Durée: {props.duration} min</p>
              <p className=''>Prix: {props.price}€</p>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NailServiceMobileCard;
