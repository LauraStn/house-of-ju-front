import "./globals.css";

import type { Metadata } from "next";
import { Jim_Nightshade,La_Belle_Aurore } from "next/font/google";

import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";


export const metadata: Metadata = {
  title: "House of Ju",
  description: "Generated by create next app",
};

const jim_Nightshade = Jim_Nightshade({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jim_nightshade'
})

export const laBelleAurore = La_Belle_Aurore({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-la-belle-aurore'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
    className={`${jim_Nightshade.variable} ${laBelleAurore.variable}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
