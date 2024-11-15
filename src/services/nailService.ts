import axios, {AxiosResponse} from 'axios';

import {CreateOrEditNailServiceProps} from '@/component/inputs/CreateOrEditInput';

export async function getAllNailServices() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}nail-service/all`,
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  return res.data;
}

type ApiResponse<T> = AxiosResponse<T>;
type Response = {success: boolean; message: string};
export const createNailService = async (
  nailService: CreateOrEditNailServiceProps,
  token: string
): Promise<ApiResponse<Response>> => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}nail-service/add`,
    nailService,
    {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const editNailService = async (
  id: number,
  nailService: CreateOrEditNailServiceProps,
  token: string
): Promise<ApiResponse<Response>> => {
  const res = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}nail-service/update/${id}`,
    nailService,
    {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
export const deleteNailService = async (
  id: number,
  token: string
): Promise<ApiResponse<Response>> => {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}nail-service/delete/${id}`,
    {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
