'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import {getToken} from '@/utils/tokenUtils';

// DONE Fonction logout
export const logoutAction = async () => {
  const token = await getToken();

  if (token) {
    cookies().delete('cookieKey');
    return redirect('/');
  }
  throw Error('No token provided')
};
