import React from 'react';
import {FaRegCalendarAlt} from 'react-icons/fa';
import {FaMoneyBillWave} from 'react-icons/fa6';
import {IoHourglassOutline} from 'react-icons/io5';
import {TbClockHour4} from 'react-icons/tb';

import {UserAppointmentProps} from '@/app/profil/page';

const AppointmentCard = (props: UserAppointmentProps) => {
  return (
    <div className='w-60 shadow-lg'>
      <div className='flex justify-between text-white bg-bittersweet px-4 rounded-t-lg p-2'>
        <p className='flex items-center gap-2 justify-center'>
          <FaRegCalendarAlt />
          {props.date}
        </p>
        <p className='flex items-center gap-2 justify-center'>
          <TbClockHour4 className='text-lg' />
          {props.start}
        </p>
      </div>
      <div className='bg-chardon flex flex-col'>
        <div className='p-3'>
          <p className='text-bittersweet text-xl underline capitalize'>
            Prestation :
          </p>
          <p className='text-mona-lisa text-lg'>{props.name}</p>
        </div>
        <div className='flex items-center justify-between mx-4 text-bittersweet'>
          <p className='flex gap-1 font-bold'>
            <FaMoneyBillWave className='text-lg' />
            {props.price}€
          </p>
          <p className='flex gap-1 font-bold'>
            <IoHourglassOutline className='text-lg' />
            {props.duration}min
          </p>
        </div>
      </div>
      <div className='bg-chardon flex justify-around border-t-2 border-melon p-2'>
        <button className='text-bittersweet font-bold hover:text-persian-plum'>
          Modifier
        </button>
        <button className='text-bittersweet font-bold hover:text-persian-plum'>
          Annuler
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
