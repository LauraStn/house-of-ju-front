import axios, {AxiosResponse} from 'axios';

import {AuthProps} from '@/component/inputs/Input';

export const registerUser = async (user: AuthProps): Promise<AxiosResponse> => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}auth/signup`,
    user,
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  return res;
};

export const loginUser = async (
  user: Pick<AuthProps, 'email' | 'password'>
): Promise<AxiosResponse> => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}auth/signin`,
    user,
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  return res;
};

export const sendResetEmail = async (
  email: Pick<AuthProps, 'email'>
): Promise<AxiosResponse> => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}auth/reset`,
    email,
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  return res;
};
