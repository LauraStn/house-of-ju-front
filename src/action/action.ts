'use server';

import {revalidatePath, revalidateTag} from 'next/cache';

import {CreateOrEditNailServiceProps} from '@/component/inputs/CreateOrEditInput';
import {
  Appointment,
  createAppointment,
  deleteOneAppointmentByUser,
} from '@/services/appointmentService';
import {
  addImageToGallery,
  deleteImageOfGallery,
  uploadOneImage,
} from '@/services/imageGalleryService';
import {
  createNailService,
  deleteNailService,
  editNailService,
} from '@/services/nailService';
import {getToken} from '@/utils/tokenUtils';

export const create = async (params: Appointment) => {
  const res = await createAppointment({
    date: params.date,
    duration: params.duration,
    end: params.end,
    start: params.start,
    nail_service_id: params.nail_service_id,
  });
  revalidateTag('appointment');
  return res;
};

export const upload = async (formData: FormData) => {
  const token = await getToken();
  // if (token === undefined) {
  //   return 'Erreur token';
  // }
  const res = await uploadOneImage(formData, token as string);
  const filename = res.data;
  formData.delete('file');
  formData.append('image_url', filename);
  const resp = await addImageToGallery(formData, token as string);
  return resp.data;
};

export const deleteImage = async (id: number) => {
  const token = await getToken();
  const res = await deleteImageOfGallery(id, token as string);
  return res.data;
};

export const addNailService = async (
  nailService: CreateOrEditNailServiceProps
) => {
  const token = await getToken();
  // if (token === undefined) {
  //   return 'Erreur token';
  // }
  const res = await createNailService(nailService, token as string);
  revalidatePath('/admin');
  return res.data;
};

export const updateNailService = async (
  id: number,
  nailService: CreateOrEditNailServiceProps
) => {
  const token = await getToken();
  const res = await editNailService(id, nailService, token as string);
  revalidatePath('/admin');
  return res.data;
};

export const deleteNailServiceAction = async (id: number) => {
  const token = await getToken();
  const res = await deleteNailService(id, token as string);
  revalidatePath('/admin');
  return res.data;
};

export const deleteUserAppointment = async (id: number) => {
  const token = await getToken();
  const res = await deleteOneAppointmentByUser(id, token as string);
  revalidatePath('/profil');
  return res;
};
