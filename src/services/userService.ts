import axios from 'axios';

export type UserProps = {
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
};
export const getUserLogged = async (params: {token: string}) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}user/one`, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${params.token}`,
    },
  });
  return res.data;
};
