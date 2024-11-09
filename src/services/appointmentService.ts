import axios from 'axios';

import {getToken} from '@/utils/tokenUtils';

export type Appointment = {
  date: string;
  duration: number;
  start: string;
  end: string;
  nail_service_id: number;
};

export const getAppointment = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}appointment/all`,
    {
      next: {tags: ['appointment']},
    }
  );
  return await response.json();
};

export const createAppointment = async (params: Appointment) => {
  const token = await getToken();
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}appointment/add`,
    {
      date: params.date,
      duration: params.duration,
      start: params.start,
      end: params.end,
      nail_service_id: params.nail_service_id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const getUserAppointment = async () => {
  const token = await getToken();
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}appointment/user`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
