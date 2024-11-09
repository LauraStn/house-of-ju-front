import axios from 'axios';

import {CreateOrEditNailServiceProps} from '@/component/inputs/CreateOrEditInput';

export async function getAllNailServices() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}nail-service/all`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
    },
  };

  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export async function createNailService(
  nailService: CreateOrEditNailServiceProps
) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}nail-service/add`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return axios
    .post(url, nailService, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function editNailService(
  id: number,
  nailService: CreateOrEditNailServiceProps
) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}nail-service/update/${id}`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  return axios
    .patch(url, nailService, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function deleteNailService(id: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}nail-service/delete/${id}`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
