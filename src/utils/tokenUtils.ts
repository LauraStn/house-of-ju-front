import {cookies} from 'next/headers';

export const getToken = async () =>
  cookies().get('cookieKey')?.value
    ? cookies().get('cookieKey')?.value
    : undefined;
