'use client';
import classNames from 'classnames';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React, {useState} from 'react';

import {Appointment} from '@/services/appointmentService';

import {NailServiceProps} from './NailServiceCard';

type Props = {nail_service: NailServiceProps; appointment: Appointment[]};
const AppointmentNailServiceCard = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        key={props.nail_service.id}
        className='m-2 shadow-sm shadow-bittersweet p-5 md:mx-24 rounded-md flex flex-col'
      >
        <div className='flex justify-between'>
          <div className='gap-2 flex flex-col lg:w-96'>
            <h2 className='text-bittersweet font-bold text-lg'>
              {props.nail_service.name}
            </h2>
            <div className='flex justify-between'>
              <button
                onClick={toggleExpand}
                className='text-mona-lisa hover:underline self-start'
              >
                {isExpanded ? 'Voir moins' : 'Voir plus'}
              </button>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'transition-max-height overflow-hidden duration-500 mt-4 text-bittersweet',
            {
              'max-h-0 ease-out-expo': !isExpanded,
              'h-auto max-h-[10000px]': isExpanded,
            }
          )}
        >
          <div
            key={props.nail_service.id}
            className=' flex flex-col gap-10 pb-11'
          >
            <div className='gap-4 flex flex-col lg:w-96'>
              <p className=''>Durée: {props.nail_service.duration} min</p>
              <p className=''>Prix: {props.nail_service.price}€</p>
              <p>{props.nail_service.description}</p>
            </div>
            <div className=''>
              <Link
                href={`${pathname}?calendar=${props.nail_service.id}`}
                className=' bg-bittersweet text-white rounded-xl px-5 py-2 h-6 hover:text-persian-plum'
                scroll={false}
              >
                Prendre Rendez vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentNailServiceCard;
