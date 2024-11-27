'use client';
import classNames from 'classnames';
import {
  add,
  addMinutes,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isToday,
  isWeekend,
  parse,
  startOfWeek,
} from 'date-fns';
import {fr} from 'date-fns/locale';
import Link from 'next/link';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {Dispatch, Fragment, SetStateAction, useState} from 'react';
import {FaArrowLeft} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa6';
import {toast} from 'react-toastify';

import {create} from '@/action/action';
import {Appointment} from '@/services/appointmentService';
import {getConsultationsRange, HoursSlot} from '@/utils/consultations';

import {NailServiceProps} from '../card/NailServiceCard';

export type PropsCalendar = {
  appointment: Appointment[];
  nailServiceList: NailServiceProps[];
  nail_service_id: Pick<NailServiceProps, 'id'>;
};

export const CustomCalendar = (props: PropsCalendar) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', today);
  const [dateToOpen, setDateToOpen] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState(false);
  const [hourSelected, setHourSelected] = useState('');
  const nailServiceSelected = props.nailServiceList.find(
    (item) => item.id === Number(props.nail_service_id.id)
  );
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const dateSelected = searchParams.get('date');
  const hours = getConsultationsRange(Number(nailServiceSelected?.duration));

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, {weekStartsOn: 1}),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), {weekStartsOn: 1}),
  });

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, {months: -1});
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, {months: 1});
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const handleShowTerm = (date: Date) => {
    if (isBefore(date, today) || isWeekend(date)) {
      return;
    }
    setDateToOpen(format(date, 'dd-MM-yyyy'));
  };

  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  const createTerm = async (day: string, hour: string) => {
    const parseHour = parse(hour, 'HH:mm', new Date());

    const addDuration = addMinutes(
      parseHour,
      Number(nailServiceSelected?.duration)
    );
    const termStart = format(parseHour, 'kk:mm');
    const termEnd = format(addDuration, 'kk:mm');

    const res: {success: boolean; message: string} = await create({
      date: day,
      duration: Number(nailServiceSelected?.duration),
      start: termStart,
      end: termEnd,
      nail_service_id: Number(nailServiceSelected?.id),
    });
    if (res.success) {
      setConfirmation(false);
      toast.success(res.message);
    }
    setDateToOpen(null);
    router.push(pathName, {scroll: false});
  };
  return (
    <div>
      {' '}
      <div className='flex items-center lg:flex-row justify-between'>
        <FaArrowLeft />
        <ButtonCalendar label='Précédent' onClick={previousMonth} />

        <ButtonCalendar label='Suivant' onClick={nextMonth} />
        <FaArrowRight />
      </div>
      <h2 className='text-center text-lg pt-5 font-semibold capitalize md:w-full text-bittersweet'>
        {format(firstDayCurrentMonth, 'MMMM yyyy', {locale: fr})}
      </h2>
      <div className='grid grid-cols-7 md:gap-7 mt-10 leading-6 text-center text-gray-500 text-2xl'>
        {weekDays.map((days) => (
          <span key={days} className='text-bittersweet text-lg'>
            {days}
          </span>
        ))}
        {days.map((day) => (
          <div
            key={day.toString()}
            className={classNames(
              'relative py-1.5 flex justify-center items-center text-base md:text-xl'
            )}
          >
            <Link
              href={`${pathName}?calendar=${
                nailServiceSelected?.id
              }&date=${format(day, 'dd-MM-yyyy')}`}
              scroll={false}
              onClick={() => handleShowTerm(day)}
              className={classNames('px-2', {
                '!text-bittersweet/30': isBefore(day, today),
                '!text-bittersweet': !isBefore(day, today),
                '!text-bittersweet/20': isWeekend(day),
                'bg-bittersweet rounded-full !text-white': isToday(day),
              })}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>
                {format(day, 'd')}
              </time>
            </Link>
          </div>
        ))}
      </div>
      <div
        className={classNames('transition-all duration-500', {
          'max-h-0 ease-out-expo invisible opacity-0': dateSelected === null,
          'max-h-[1000px] h-auto visible opacity-100':
            dateToOpen === dateSelected && dateToOpen !== null,
        })}
      >
        <DayModal
          key={new Date().getHours()}
          dateToOpen={dateToOpen as string}
          day={dateSelected as string}
          hours={hours}
          createTerm={createTerm}
          nailServiceSelected={nailServiceSelected}
          appointment={props.appointment}
          setConfirmation={setConfirmation}
          confirmation={confirmation}
          hour={hourSelected}
          setHourSelected={setHourSelected}
        />
      </div>
    </div>
  );
};

const DayModal = (props: {
  dateToOpen: string;
  day: string;
  hour: string;
  hours: HoursSlot[];
  createTerm: (day: string, hour: string) => Promise<void>;
  nailServiceSelected?: NailServiceProps;
  appointment: Appointment[];
  confirmation: boolean;
  setConfirmation: Dispatch<SetStateAction<boolean>>;
  setHourSelected: Dispatch<SetStateAction<string>>;
}) => {
  const handleConfirmation = (hour: string) => {
    props.setConfirmation(true);
    props.setHourSelected(hour);
  };

  return (
    <>
      <div
        className={classNames(
          'z-10 w-full rounded-xl text-white text-center pt-2  bg-melon overflow-hidden transition-all duration-700',
          {
            'max-h-0 ease-out-expo invisible opacity-0':
              props.dateToOpen === null,
            'max-h-[1000px] h-auto visible opacity-100':
              props.dateToOpen === props.day && !isWeekend(props.day),
          }
        )}
      >
        <h3 className='text-lg'>Créneau du {props.dateToOpen}</h3>
        <div
          className={classNames(
            ' grid grid-cols-3 place-items-center py-4 px-1 gap-y-4'
          )}
          id={props.day}
        >
          {props.hours.map((hour, hoursIndex) => {
            const hasEvent = props.appointment.some(
              (term) => term.date === props.day && term.start === hour.hours
            );

            return (
              <Fragment key={hoursIndex}>
                <button
                  onClick={() => handleConfirmation(hour.hours)}
                  key={hoursIndex}
                  className={classNames('rounded-lg px-4 py-2', {
                    'bg-bittersweet block': !hasEvent,
                    'hidden ': hasEvent,
                  })}
                >
                  {hour.hours}
                </button>
                <div
                  className={classNames(
                    'absolute z-50 top-3/4 -translate-y-3/4  text-bittersweet w-[340px] flex flex-col bg-white py-7 mx-4 rounded-xl shadow-[0_5px_10px_rgba(255,_167,_154)]',
                    {
                      invisible: !props.confirmation,
                      visible: props.confirmation,
                    }
                  )}
                >
                  <h3>Voulez vous validez ce rendez vous ?</h3>
                  <ul>
                    <li>Date : {props.day}</li>
                    <li>Heure : {props.hour}</li>
                    <li>duration : {props.nailServiceSelected?.duration}</li>
                  </ul>
                  <div className='flex gap-4 items-center justify-center'>
                    <button
                      onClick={() => props.createTerm(props.day, props.hour)}
                      className='bg-bittersweet rounded-lg py-2 px-4 text-white'
                    >
                      Valider ce RDV{' '}
                    </button>
                    <button
                      onClick={() => props.setConfirmation(false)}
                      className='bg-melon rounded-lg py-2 px-4'
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>{' '}
      </div>
    </>
  );
};

const ButtonCalendar = (props: {
  label: 'Précédent' | 'Suivant';
  onClick: () => void;
}) => {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-bittersweet hover:text-persian-plum'
    >
      <span>{props.label}</span>
    </button>
  );
};
