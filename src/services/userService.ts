
import axios from 'axios';

export async function getUserLogged(params:{token:string}) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}user/one`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${params.token}`,
    },
  };

  return axios
    .get(url, axiosConfig)
    .then((res) => {
      console.log("ici");
      
      return res;
    })
    .catch((e) => {
      return e;
    });
}
