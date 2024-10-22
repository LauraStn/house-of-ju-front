import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer >
        <div className="flex flex-col items-center gap-4 text-center bg-[#FFF2F0] py-10">
          <Image
          src={"/images/logojs.png"}
          alt=""
          width={100}
          height={66}
          className="h-full"
          />
          <h3 className={classNames("text-[#FE6A6A] text-3xl font-laBelleAurore")}>Prothésiste Ongulaire</h3>
          <h2 className="text-[#FFA79A] uppercase font-jimNightshade text-2xl">Julia Santin</h2>
          <hr className="h-0.5 lg:w-1/4 w-3/4 bg-[#FFBCB2]"></hr>
          <h3 className={classNames("text-[#FE6A6A] text-3xl font-laBelleAurore")}>Adresse</h3>
          <p className="text-[#FFA79A] font-labelleaurore">491 Route de la Vallée du Giffre<br/>74250 Fillinges</p><h3 className={classNames("text-[#FE6A6A] text-3xl font-laBelleAurore")}>Horaires</h3>
          <p className="text-[#FFA79A] capitalize">Mardi, mercredi, jeudi, vendredi, samedi 9h - 18h<br/>Lundi et dimanche fermé</p>
          <hr className="h-0.5 lg:w-1/4 w-3/4 bg-[#FFBCB2]"></hr>
          <div className="flex text-2xl gap-2 mb-4 text-[#FE6A6A]"><a target="blank" href="https://www.instagram.com/houseofju22/"><FaInstagram/></a> <a target="blank" href="https://www.facebook.com/julia.dijoux.507"><FaFacebook /></a></div>
        </div>
        <div className='bg-[#FFBCB2] text-[#781b1b] font-jimNightshade uppercase text-xl flex flex-col justify-center items-center gap-3 py-5'>
          <div className='lg:flex-row lg:gap-8 flex flex-col justify-center items-center gap-1'> 
            <a href="">Mentions Légales</a>
            <a href="">CGU</a>
            <a href="">Politique de confidentialité</a>
          </div>
          <p>Réalisé par<a href="https://www.linkedin.com/in/lausantin/" target='blank' className='pl-6 text-[#FE6A6A] text-3xl font-bold capitalize font-laBelleAurore'>Laura Santin</a> </p>
        </div>
    </footer>
  )
}

export default Footer
