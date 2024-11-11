import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import type {Metadata} from 'next';
import {Arima, Jim_Nightshade, La_Belle_Aurore} from 'next/font/google';
import {ToastContainer} from 'react-toastify';

import Footer from '@/component/footer/Footer';
import Header from '@/component/header/Header';
import {getUserLogged} from '@/services/userService';
import {getToken} from '@/utils/tokenUtils';

export const metadata: Metadata = {
  title: 'House of Ju',
  description: 'Services de manucures et soins esthétiques professionnels pour des mains impeccables.',
};

const jim_Nightshade = Jim_Nightshade({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jim_nightshade',
});

export const laBelleAurore = La_Belle_Aurore({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-la-belle-aurore',
});

export const arima = Arima({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-arima',
});

const getData = async () => {
  const token = (await getToken()) as string;
  const user = await getUserLogged({token: token});

  return {user};
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();

  return (
    <html lang='fr'>
      <body
        className={`${jim_Nightshade.variable} ${laBelleAurore.variable} ${arima.variable} font-arima`}
      >
        {/* DONE vérif admin dans les cookies  J'ai ajouté les infos du user depuis le call getData, il faut peut etre crée un type pour les infos du user */}
        {/* TODO Genre type User = {id:number etc... pour être bien  reconnupar typescript} */}
        <Header userLogged={data.user.data} />
        <ToastContainer
          position='bottom-center'
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme='light'
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
