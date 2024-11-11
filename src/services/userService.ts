
import axios from 'axios';
//TODO refactoriser avec cookies
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
     
      
      return res;
    })
    .catch((e) => {
      return e;
    });
}
