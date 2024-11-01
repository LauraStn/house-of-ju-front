import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import type {Metadata} from 'next';
import {Arima, Jim_Nightshade, La_Belle_Aurore} from 'next/font/google';
import {ToastContainer} from 'react-toastify';

import Footer from '@/component/footer/Footer';
import Header from '@/component/header/Header';
import {getUserLogged} from '@/services/userService';

export const metadata: Metadata = {
  title: 'House of Ju',
  description: 'Generated by create next app',
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const userLogged = await getUserLogged()
  return (
    <html lang='en'>
      <body
        className={`${jim_Nightshade.variable} ${laBelleAurore.variable} ${arima.variable} font-arima`}
      >
        <Header />
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
