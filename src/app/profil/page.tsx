import Image from 'next/image';
import {Fragment} from 'react';

import AppointmentCard from '@/component/card/AppointmentCard';
import {getUserAppointment} from '@/services/appointmentService';
import {getUserLogged, UserProps} from '@/services/userService';
import {getToken} from '@/utils/tokenUtils';

export type UserAppointmentProps = {
  id: number;
  date: string;
  start: string;
  end: string;
  duration: number;
  name: string;
  price: number;
};
const getAppointment = async () => {
  const userAppointment: UserAppointmentProps[] = await getUserAppointment();
  return {
    userAppointment: userAppointment,
  };
};
const getUser = async () => {
  const token = (await getToken()) as string;
  if (token === undefined) {
    return {user: undefined};
  }
  const userInfos: UserProps = await getUserLogged({token: token});
  return {
    userInfos: userInfos,
  };
};
export default async function Profil() {
  const appointments = await getAppointment();
  const user = await getUser();
  return (
    <div>
      <div className='bg-profil md:flex md:justify-center md:items-center bg-no-repeat bg-cover h-[300px] py-5 px-5 md:h-[450px] lg:bg-[center_bottom_-10rem] lg:h-[500px]'>
        <div className='bg-white bg-transparent self-center md:h-2/3 md:w-1/2 bg-opacity-75 md:self-center h-full gap-8 flex flex-col justify-center items-center border-double border-4 border-bittersweet'>
          <Image
            src={'/images/gallery-hands.webp'}
            alt={''}
            width={653}
            height={382}
            className='w-52'
          />
          <h2 className='font-jimNightshade uppercase text-2xl text-bittersweet'>
            Mon profil
          </h2>
        </div>
      </div>
      <div className='m-5 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-10 md:mx-24 rounded-md justify-around items-center flex flex-col md:flex-row pb-10'>
        <div>
          <h2 className='text-bittersweet font-jimNightshade uppercase text-3xl pb-10'>
            mes rendez-vous
          </h2>
          <div className='flex flex-col gap-5'>
            {appointments.userAppointment.map((item) => (
              <Fragment key={item.id}>
                <AppointmentCard
                  id={item.id}
                  date={item.date}
                  start={item.start}
                  end={item.end}
                  duration={item.duration}
                  name={item.name}
                  price={item.price}
                />
                {/* <div className='w-60 shadow-lg'>
                <div className='flex justify-between text-white bg-bittersweet px-4 rounded-t-lg p-2'>
                  <p className='flex items-center gap-2 justify-center'>
                    <FaRegCalendarAlt />
                    {item.date}
                  </p>
                  <p className='flex items-center gap-2 justify-center'>
                    <TbClockHour4 className='text-lg' />
                    {item.start}
                  </p>
                </div>
                <div className='bg-chardon flex flex-col'>
                  <div className='p-3'>
                    <p className='text-bittersweet text-xl underline capitalize'>
                      Prestation :
                    </p>
                    <p className='text-mona-lisa text-lg'>{item.name}</p>
                  </div>
                  <div className='flex items-center justify-between mx-4 text-bittersweet'>
                    <p className='flex gap-1 font-bold'>
                      <FaMoneyBillWave className='text-lg' />
                      {item.price}€
                    </p>
                    <p className='flex gap-1 font-bold'>
                      <IoHourglassOutline className='text-lg' />
                      {item.duration}min
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
              </div> */}
              </Fragment>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-bittersweet font-jimNightshade uppercase mt-24 text-3xl pb-10'>
            mes informations
          </h2>
        </div>
      </div>
    </div>
  );
}
