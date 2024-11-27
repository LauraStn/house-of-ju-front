import axios, {AxiosResponse} from 'axios';

import {AuthProps} from '@/component/inputs/Input';

import apiClient from '../../lib/axiosApi';

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

type LoginResponse = {
  message: string;
  statusCode: number;
  token: {access_token: string};
};
export const loginUser = async (
  user: Pick<AuthProps, 'email' | 'password'>
): Promise<LoginResponse> => {
  const res = await apiClient.post('auth/signin', user, {
    headers: {
      'content-type': 'application/json',
    },
  });
  return res.data;
};

type Response = {
  success: boolean;
  message: string;
};
export const sendResetPasswordEmail = async (
  email: Pick<AuthProps, 'email'>
): Promise<AxiosResponse<Response>> => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}auth/reset`,
    email,
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  console.log(res);

  return res;
};

export const validateAccount = async (token: string) => {
  const res = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}auth/activate/${token}`,
    {},
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  return res;
};
