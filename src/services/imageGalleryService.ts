import axios, {AxiosResponse} from 'axios';

export async function getAllImagesGallery() {
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

type Response = AxiosResponse<string>;
export async function uploadImage(formData: FormData): Promise<Response> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}download-image/upload`;

  const axiosConfig = {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return axios
    .post(url, formData, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function addImageToGallery(formData: FormData) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}image-gallery/add`;

  const axiosConfig = {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return axios
    .post(url, formData, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function deleteImageOfGallery(id: number) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}image-gallery/delete/${id}`;

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