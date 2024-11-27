'use server';

import {AuthProps} from '@/component/inputs/Input';
import {loginUser} from '@/services/authService';

export const loginAction = async (
  data: Pick<AuthProps, 'email' | 'password'>
) => {
  const response = await loginUser(data);
  return response;
};

// .then(async (res) => {
//     if (res.status === 201) {
//       toast.success('Connecté ! Redirection vers le profile');
//       setCookie('cookieKey', res.data.token.access_token);
//       const token = res.data.token.access_token;
//       if (!token) {
//         return toast.error('Connexion impossible');
//       }
//       const user = await getUserLogged({token: token});
//       if (user.isAdmin) {
//         return router.push('/admin');
//       }
//       return router.push('/profil');
//     }
