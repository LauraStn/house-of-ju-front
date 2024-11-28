import {format, isAfter, isBefore} from 'date-fns';
import Image from 'next/image';
import {Fragment} from 'react';

import AppointmentCard from '@/component/card/AppointmentCard';
import DeleteAppointmentForm from '@/component/form/appointment/DeleteAppointmentForm';
import Modal from '@/component/modals/Modal';
import UserInfoCard from '@/component/profil/UserInfoCard';
import {getUserAppointment} from '@/services/appointmentService';
import {getUserLogged, UserProps} from '@/services/userService';
import {getToken} from '@/utils/tokenUtils';

type UserAppointmentProps = {
  id: number;
  date: string;
  start: string;
  end: string;
  duration: number;
  name: string;
  price: number;
  datetime?: string;
};

// type SortedAppointmentsProps = {
//   past: UserAppointmentProps[];
//   upcoming: UserAppointmentProps[];
// };

const getAppointment = async () => {
  const userAppointment: UserAppointmentProps[] = await getUserAppointment();
  const today = new Date();
  const pastAppointments: UserAppointmentProps[] = [];
  const upcomingAppointments: UserAppointmentProps[] = [];

  userAppointment.forEach((item) => {
    try {
      const [day, month, year] = item.date.split('-');
      const formattedDate = `${year}-${month}-${day}`;
      const dateString = `${formattedDate}T${item.start}:00`;
      const datetime = new Date(dateString).toISOString();
      const isPast = isBefore(datetime, today);
      const isFuture = isAfter(datetime, today);

      const newItem: UserAppointmentProps = {
        ...item,
        datetime: format(datetime, "yyyy-MM-dd'T'HH:mm:ssXXX"),
      };

      if (isPast) {
        pastAppointments.push(newItem);
      } else if (isFuture) {
        upcomingAppointments.push(newItem);
      }
    } catch (error) {
      return error;
    }
  });
  return {past: pastAppointments, upcoming: upcomingAppointments};
};

const getUser = async () => {
  const token = (await getToken()) as string;
  const userInfos: UserProps = await getUserLogged({token: token});
  return {
    userInfos: userInfos,
  };
};
type ParamsProps = {
  searchParams: {
    delete: Promise<{[key: string]: string | string[] | undefined}>;
  };
};
export default async function Profil(props: ParamsProps) {
  const appointments = await getAppointment();

  const user = await getUser();
  return (
    <div>
      <div className='bg-profil md:flex md:justify-center md:items-center bg-no-repeat bg-cover h-[300px] py-5 px-5 md:h-[450px] lg:bg-[center_bottom_-10rem] lg:h-[500px]'>
        <div className='bg-white bg-transparent self-center md:h-2/3 md:w-1/2 bg-opacity-75 md:self-center h-full gap-8 flex flex-col justify-center items-center border-double border-4 border-bittersweet'>
          <Image
            src={'/images/gallery-hands.webp'}
            alt={'dessin de mains manucurées'}
            width={653}
            height={382}
            className='w-52'
          />
          <h2 className='font-jimNightshade uppercase text-2xl text-bittersweet'>
            Mon profil
          </h2>
        </div>
      </div>
      <div className='mx-5 mt-10 mb-24 shadow-[0_10px_20px_rgba(255,_167,_154,_1)] p-10 md:mx-24 rounded-md justify-around flex flex-col md:flex-row '>
        <div>
          <h2 className='text-bittersweet font-jimNightshade uppercase text-3xl pb-10'>
            mes rendez-vous
          </h2>
          <div className='flex flex-col gap-5'>
            {appointments.upcoming.map((item) => (
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
              </Fragment>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-bittersweet font-jimNightshade uppercase text-3xl pb-10'>
            mes informations
          </h2>
          {/* <Link
            href=''
            className=' text-bittersweet'
            scroll={false}
          >
            Modifier mes infos
          </Link> */}
          <UserInfoCard
            email={user.userInfos.email}
            first_name={user.userInfos.first_name}
            last_name={user.userInfos.last_name}
            address={user.userInfos.address}
            phone={user.userInfos.phone}
          />
        </div>
      </div>
      <Modal
        isOpen={props.searchParams.delete !== undefined}
        className='pt-72 h-screen overflow-auto'
      >
        <DeleteAppointmentForm id={Number(props.searchParams.delete)} />
      </Modal>
    </div>
  );
}
