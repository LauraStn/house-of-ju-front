import classNames from 'classnames';
import {usePathname, useSearchParams} from 'next/navigation';
import React, {Fragment, useEffect, useState} from 'react';

import {NailServiceProps} from '@/component/card/NailServiceCard';
import DeleteServiceForm from '@/component/form/DeleteServiceForm';
import EditServiceForm from '@/component/form/EditServiceForm';
import Modal from '@/component/modals/Modal';
import {useIsMobile} from '@/hook/useIsMobile';
import {getAllNailServices} from '@/services/nailService';

import NailServiceMobileCard from './NailServiceMobileCard';
import NailServiceRow from './NailServiceRow';

const NailServiceAdmin = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [nailServiceList, setNailServiceList] = useState<NailServiceProps[]>(
    []
  );
  const params = useSearchParams();
  const pathName = usePathname();

  const toggleTableVisibility = () => {
    setIsTableVisible((prev) => !prev);
  };

  useEffect(() => {
    getAllNailServices()
      .then((res) => {
        setNailServiceList(res);
      })
      .catch((e) => {
        return e;
      });
  }, []);
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div>
          <div className='flex flex-col gap-4 mx-5 my-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-8 rounded-lg'>
            <div className='flex flex-col gap-6 pb-5'>
              <h2 className='text-3xl font-jimNightshade uppercase text-[#FE6A6A]'>
                Gestion des Prestations
              </h2>
              <button
                onClick={toggleTableVisibility}
                className='py-2 bg-[#FFBCB2] self-end w-32 text-white rounded hover:bg-[#FE6A6A] transition duration-300'
              >
                {isTableVisible ? 'Masquer' : 'Afficher'}
              </button>
              <p className='text-[#FE6A6A] text-right'>
                Cliquez pour afficher/masquer les prestations
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
              <button className='ml-2 self-start py-2 bg-[#FE6A6A] w-48 mb-4 text-white rounded hover:bg-[#FFBCB2] transition duration-300'>
                Ajouter une prestation
              </button>
              {nailServiceList &&
                nailServiceList?.map((item) => (
                  <Fragment key={item.id}>
                    <NailServiceMobileCard
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      duration={item.duration}
                      price={item.price}
                      params={params}
                      pathName={pathName}
                    />
                  </Fragment>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='flex flex-col gap-4 mx-5 my-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-8 rounded-lg'>
            <div className='flex justify-between'>
              <h2 className='text-3xl font-jimNightshade uppercase text-[#FE6A6A]'>
                Gestion des Prestations
              </h2>
              <div className='flex flex-col items-end gap-4'>
                <button
                  onClick={toggleTableVisibility}
                  className='py-2 bg-[#FFBCB2] w-32 text-white rounded hover:bg-[#FE6A6A] transition duration-300'
                >
                  {isTableVisible ? 'Masquer' : 'Afficher'}
                </button>
                <p className='text-[#FE6A6A] text-right'>
                  Cliquez pour afficher/masquer le tableau
                </p>
              </div>
            </div>
            {/* <Modal>
        <div></div>
        </Modal>{' '} */}
            <div
              className={classNames(
                'transition-max-height overflow-hidden duration-500',
                {
                  'max-h-0 ease-out-expo': !isTableVisible,
                  'h-auto max-h-[1000px]': isTableVisible,
                }
              )}
            >
              <button className='self-start py-2 bg-[#FE6A6A] w-48 text-white rounded hover:bg-[#FFBCB2] transition duration-300'>
                Ajouter une prestation
              </button>
              <table className='w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5'>
                <thead className='bg-[#FFBCB2] text-white'>
                  <tr className='sm:table-row hidden'>
                    <th className='p-3 text-left'>Nom</th>
                    <th className='p-3 text-left max-w-16'>Description</th>
                    <th className='p-3 text-left'>Prix</th>
                    <th className='p-3 text-left'>Durée</th>
                    <th className='p-3 text-left'>Actions</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {nailServiceList &&
                    nailServiceList?.map((item) => (
                      <Fragment key={item.id}>
                        <NailServiceRow
                          id={item.id}
                          name={item.name}
                          description={item.description}
                          duration={item.duration}
                          price={item.price}
                          params={params}
                          pathName={pathName}
                        />
                      </Fragment>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <Modal isOpen={params.size > 0}>
        {params.has('delete') && <DeleteServiceForm />}
        {params.has('edit') && (
          <EditServiceForm
            nailService={nailServiceList}
            id={Number(params.get('edit'))} pathName={pathName}/>
        )}
      </Modal>
    </>
  );
};

export default NailServiceAdmin;