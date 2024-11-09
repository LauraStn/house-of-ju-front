'use client';
import classNames from 'classnames';
import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';
import React, {useState} from 'react';
import {RxCross2} from 'react-icons/rx';

import {Appointment} from '@/services/appointmentService';

import {CustomCalendar} from '../calendar/CustomCalendar';
import Modal from '../modals/Modal';
import {NailServiceProps} from './NailServiceCard';

type Props = {nail_service: NailServiceProps; appointment: Appointment[]};
const CalendarNailServiceCard = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const params = useSearchParams();
  const calendarIsOpen = params.has('calendar');
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        key={props.nail_service.id}
        className='m-2 shadow-sm shadow-[#FE6A6A] p-5 md:mx-24 rounded-md flex flex-col lg:flex-row'
      >
        <div className='flex justify-between'>
          <div className='gap-2 flex flex-col lg:w-96'>
            <h2 className='text-[#FE6A6A] font-bold text-lg'>
              {props.nail_service.name}
            </h2>
            <div className='flex justify-between'>
              <button
                onClick={toggleExpand}
                className='text-[#FFA79A] hover:underline self-start'
              >
                {isExpanded ? 'Voir moins' : 'Voir plus'}
              </button>
              {/* <div className='flex gap-4 cursor-pointer text-[#FE6A6A]'>
            <Link href={`${props.pathName}?delete=${props.id}`} scroll={false}>
              <BsFillTrash3Fill className='hover:text-red-500' />
            </Link>
            <Link href={`${props.pathName}?edit=${props.id}`} scroll={false}>
              <FaPencilAlt className='hover:text-red-500' />
            </Link>
          </div> */}
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'transition-max-height overflow-hidden duration-500 mt-4 text-[#FE6A6A]',
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
                href={`${pathname}?calendar=1`}
                className=' bg-bittersweet text-white rounded-xl px-5 py-2 h-6 hover:text-persian-plum'
              >
                Prendre Rendez vous
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={calendarIsOpen} className='pt-32 overflow-auto'>
        <div className='text-bittersweet w-[350px] flex flex-col bg-white p-7 rounded-xl shadow-2xl'>
          <Link
            href={pathname}
            className='cursor-pointer self-end pb-5 text-2xl hover:text-persian-plum m-2'
          >
            <RxCross2 />
          </Link>
          <CustomCalendar
            appointment={props.appointment}
            nail_service={{
              id: props.nail_service.id,
              duration: props.nail_service.duration,
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default CalendarNailServiceCard;
