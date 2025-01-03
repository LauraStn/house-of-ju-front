import Image from 'next/image';
import Link from 'next/link';
import {Fragment} from 'react';
import {RxCross2} from 'react-icons/rx';

import {CustomCalendar} from '@/component/calendar/CustomCalendar';
import AppointmentNailServiceCard from '@/component/card/AppointmentNailServiceCard';
import {NailServiceProps} from '@/component/card/NailServiceCard';
import Modal from '@/component/modals/Modal';
import {
  Appointment as AppointmentProps,
  getAppointment,
} from '@/services/appointmentService';
import {getAllNailServices} from '@/services/nailService';

const getData = async () => {
  const nailServiceList: NailServiceProps[] = await getAllNailServices();
  const appointmentList: AppointmentProps[] = await getAppointment();
  return {
    nailServiceList: nailServiceList,
    appointmentList: appointmentList,
  };
};
type ParamsProps = {
  searchParams: {
    calendar: Promise<{[key: string]: string | string[] | undefined}>;
  };
};
export default async function Appointment(props: ParamsProps) {
  const data = await getData();

  return (
    <>
      <div>
        <div className='bg-rdv md:flex md:justify-center md:items-center bg-no-repeat bg-cover h-[300px] py-5 px-5 md:h-[450px] lg:bg-[center_bottom_-10rem] lg:h-[500px]'>
          <div className='bg-white bg-transparent self-center md:h-2/3 md:w-1/2 bg-opacity-75 md:self-center h-full gap-8 flex flex-col justify-center items-center border-double border-4 border-bittersweet'>
            <Image
              src={'/images/gallery-hands.webp'}
              alt={'dessin de mains manucurées'}
              width={653}
              height={382}
              className='w-52'
            />
            <h2 className='font-jimNightshade uppercase text-2xl text-bittersweet'>
              Prendre rendez-vous
            </h2>
          </div>
        </div>
        <div className='my-10 mx-5 md:mx-auto shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-2 rounded-md items-center flex flex-col lg:w-1/2'>
          <div>
            <p className='text-bittersweet p-5 text-center'>
              Vous pouvez prendre rendez-vous en ligne, aucun accompte ne vous
              sera demandé, le paiement se fera sur place.
            </p>
          </div>
          <div className='flex flex-col'>
            {data.nailServiceList.map((item) => (
              <Fragment key={item.id}>
                <AppointmentNailServiceCard
                  nail_service={{
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    duration: item.duration,
                    price: item.price,
                  }}
                  appointment={data.appointmentList}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={props.searchParams.calendar !== undefined}
        className='pt-72 h-screen overflow-auto'
      >
        <div className='text-bittersweet w-[350px] flex flex-col bg-white p-7 rounded-xl shadow-2xl'>
          <Link
            href={'/prise-de-rdv'}
            className='cursor-pointer self-end pb-5 text-2xl hover:text-persian-plum m-2'
            scroll={false}
          >
            <RxCross2 />
          </Link>
          <CustomCalendar
            appointment={data.appointmentList}
            nailServiceList={data.nailServiceList}
            nail_service_id={{
              id: Number(props.searchParams.calendar),
            }}
          />
        </div>
      </Modal>
    </>
  );
}
