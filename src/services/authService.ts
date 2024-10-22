
import { AuthProps } from "@/component/Input";
import axios, { AxiosResponse } from "axios";

type Response<T> = AxiosResponse<T>
export async function registerUser(user: AuthProps):Promise<AxiosResponse<{message: string}>> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
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

export async function loginUser(user: Pick<AuthProps,"email" |"password">):Promise<Response<{token: string, role_id: number}>> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
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
