import React from 'react';

import {UserProps} from '@/services/userService';

const UserInfoCard = (props: UserProps) => {
  return (
    <div className='text-mona-lisa flex flex-col gap-5 my-10'>
      <p>
        <span className='text-bittersweet font-bold'>Email:</span> {props.email}
      </p>
      <p>
        <span className='text-bittersweet font-bold'>Nom complet:</span>{' '}
        {props.first_name} {props.last_name}
      </p>
      <p>
        <span className='text-bittersweet font-bold'>Adresse postale:</span>{' '}
        {props.address}
      </p>
      <p>
        <span className='text-bittersweet font-bold'>Téléphone:</span>{' '}
        {props.phone}
      </p>
    </div>
  );
};

export default UserInfoCard;
