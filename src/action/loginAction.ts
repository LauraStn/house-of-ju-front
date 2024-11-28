'use server';

import {AuthProps} from '@/component/inputs/Input';
import {loginUser} from '@/services/authService';

export const loginAction = async (
  data: Pick<AuthProps, 'email' | 'password'>
) => {
  const response = await loginUser(data);
  return response;
};
