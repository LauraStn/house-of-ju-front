import {NailServiceProps} from '@/component/card/NailServiceCard';
import {useIsMobile} from '@/hook/useIsMobile';
import {getAllNailServices} from '@/services/nailService';
import React, {Fragment, useEffect, useState} from 'react';
import NailServiceRow from './NailServiceRow';
import HouseOfJu from '@/component/houseOfJu/HouseOfJu';
import NailServiceMobileCard from './NailServiceMobileCard';
import {DiVim} from 'react-icons/di';

const NailServiceAdmin = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible((prev) => !prev);
  };
  const [nailServiceList, setNailServiceList] = useState<NailServiceProps[]>(
    []
  );
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
            <div className='flex flex-col gap-6'>
              <h2 className='text-4xl font-jimNightshade uppercase text-[#FE6A6A]'>
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
            {isTableVisible && (
              <div>
                {nailServiceList &&
                  nailServiceList?.map((item) => (
                    <Fragment key={item.id}>
                      <NailServiceMobileCard
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        duration={item.duration}
                        price={item.price}
                      />
                    </Fragment>
                  ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className='flex flex-col gap-4 mx-5 my-10 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-8 rounded-lg'>
            <div className='flex justify-between'>
              <h2 className='text-4xl font-jimNightshade uppercase text-[#FE6A6A]'>
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
            {isTableVisible && (
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
                        />
                      </Fragment>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NailServiceAdmin;
