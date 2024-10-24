import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

const DeleteServiceForm = () => {
  const pathName = usePathname();
  return (
    <div>
      <h3>Vouleez vous supprimez</h3>
      <Link href={pathName} className='text-red-600'>
        annuler
      </Link>
      <button className='text-green-600'>valider</button>
    </div>
  );
};

export default DeleteServiceForm;
