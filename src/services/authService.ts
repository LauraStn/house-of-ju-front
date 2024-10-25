import axios, {AxiosResponse} from 'axios';

import {AuthProps} from '@/component/Input';

export async function registerUser(
  user: AuthProps
): Promise<AxiosResponse<{message: string}>> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
    },
  };
  return axios
    .post(url, user, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function loginUser(
  user: Pick<AuthProps, 'email' | 'password'>
): Promise<AxiosResponse> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
    },
  };
  return axios
    .post(url, user, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
