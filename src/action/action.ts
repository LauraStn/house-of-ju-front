'use server';

import {revalidateTag} from 'next/cache';

import {Appointment, createAppointment} from '@/services/appointmentService';

export const create = async (params: Appointment) => {
  const res = await createAppointment({
    date: params.date,
    duration: params.duration,
    end: params.end,
    start: params.start,
    nail_service_id: params.nail_service_id,
  });
  revalidateTag('appointment');
  return res
};
