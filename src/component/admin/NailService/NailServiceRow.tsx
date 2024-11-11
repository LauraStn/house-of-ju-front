'use client';
import Link from 'next/link';
import {ReadonlyURLSearchParams} from 'next/navigation';
import React, {useState} from 'react';
import {BsFillTrash3Fill} from 'react-icons/bs';
import {FaPencilAlt} from 'react-icons/fa';

import {NailServiceProps} from '@/component/card/NailServiceCard';
import Modal from '@/component/modals/Modal';

const NailServiceRow = (
  props: NailServiceProps & {
    pathName: string;
    params: ReadonlyURLSearchParams;
  }
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr className='sm:table-row text-bittersweet flex flex-col sm:flex-row mb-2 sm:mb-0'>
        <td className='border-chardon font-bold w-40 border p-3 sm:text-left'>
          {props.name}
        </td>
        <td
          className='border-chardon border max-w-40 p-3 sm:text-left truncate cursor-pointer'
          onClick={openModal}
          title='Cliquer pour voir la description complète'
        >
          {props.description}
          <p className='text-right text-bittersweet font-bold'>Voir plus...</p>
        </td>
        <td className='border-chardon border w-24 p-3 sm:text-left'>
          {props.price}€
        </td>
        <td className='border-chardon border w-24 p-3 sm:text-left '>
          {props.duration}min
        </td>
        <td className='border-chardon border w-24 p-3 sm:text-left text-red-400 cursor-pointer'>
          <div className='flex justify-around'>
            <Link href={`${props.pathName}?delete=${props.id}`} scroll={false}>
              <BsFillTrash3Fill className='hover:text-red-500' />
            </Link>
            <Link href={`${props.pathName}?edit=${props.id}`} scroll={false}>
              <FaPencilAlt />
            </Link>
          </div>
        </td>
      </tr>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-5 rounded-lg shadow-lg max-w-md w-full'>
              <h3 className='text-lg text-bittersweet font-bold mb-4'>
                Description Complète
              </h3>
              <p className='text-melon'>{props.description}</p>
              <button
                className='mt-4 bg-melon text-white px-4 py-2 rounded hover:bg-bittersweet transition duration-300'
                onClick={closeModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default NailServiceRow;
