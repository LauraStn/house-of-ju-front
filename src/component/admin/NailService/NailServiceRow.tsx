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
      <tr className='sm:table-row text-[#FE6A6A] flex flex-col sm:flex-row mb-2 sm:mb-0'>
        <td className='border-[#FFF2F0] font-bold w-40 border p-3 sm:text-left'>
          {props.name}
        </td>
        <td
          className='border-[#FFF2F0] border max-w-40 p-3 sm:text-left truncate cursor-pointer'
          onClick={openModal}
          title='Cliquer pour voir la description complète'
        >
          {props.description}
          <p className='text-right text-[#FE6A6A] font-bold'>Voir plus...</p>
        </td>
        <td className='border-[#FFF2F0] border w-24 p-3 sm:text-left'>
          {props.price}€
        </td>
        <td className='border-[#FFF2F0] border w-24 p-3 sm:text-left '>
          {props.duration}min
        </td>
        <td className='border-[#FFF2F0] border w-24 p-3 sm:text-left text-red-400 cursor-pointer'>
          <div className='flex justify-around'>
            <Link href={`${props.pathName}?delete=${props.id}`}>
              <BsFillTrash3Fill className='hover:text-red-500' />
            </Link>
            <Link href={`${props.pathName}?edit=${props.id}`}>
              <FaPencilAlt />
            </Link>
          </div>
        </td>
      </tr>

      {/* Déplacer le Modal en dehors du tbody */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-5 rounded-lg shadow-lg max-w-md w-full'>
              <h3 className='text-lg text-[#FE6A6A] font-bold mb-4'>
                Description Complète
              </h3>
              <p className='text-[#FFBCB2]'>{props.description}</p>
              <button
                className='mt-4 bg-[#FFBCB2] text-white px-4 py-2 rounded hover:bg-[#FE6A6A] transition duration-300'
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
