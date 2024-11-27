import axios, {AxiosResponse} from 'axios';
//TODO refactoriser avec cookies
export async function getAllImagesGallery() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}image-gallery/all`,
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  return res;
  const url = `${process.env.NEXT_PUBLIC_API_URL}image-gallery/all`;

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
type ApiResponse<T> = AxiosResponse<T>;
type Response = {success: boolean; message: string};

export const uploadOneImage = async (
  formData: FormData,
  token: string
): Promise<ApiResponse<string>> => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}download-image/upload`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'multipart/form-data',
      },
    }
  );
  return res;
};

export const addImageToGallery = async (
  formData: FormData,
  token: string
): Promise<ApiResponse<Response>> => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}image-gallery/add`,
    formData,
    {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
  // const url = `${process.env.NEXT_PUBLIC_API_URL}image-gallery/add`;

  // const axiosConfig = {
  //   headers: {
  //     'content-type': 'application/json',
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  // return axios
  //   .post(url, formData, axiosConfig)
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((e) => {
  //     return e;
  //   });
};

export const deleteImageOfGallery = async (
  id: number,
  token: string
): Promise<ApiResponse<Response>> => {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}image-gallery/delete/${id}`,
    {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
