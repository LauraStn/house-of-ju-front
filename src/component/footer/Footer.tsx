import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#FFBCB2] text-[#781b1b] font-jimNightshade uppercase text-xl flex flex-col justify-center items-center gap-3 py-5'>
        <div className='lg:flex-row lg:gap-8 flex flex-col justify-center items-center gap-1'> 
          <a href="">Mentions Légales</a>
          <a href="">CGU</a>
          <a href="">Politique de confidentialité</a>
        </div>
        <p>Réalisé par<a href="https://www.linkedin.com/in/lausantin/" target='blank' className='pl-6 text-[#FE6A6A] text-3xl font-bold capitalize font-laBelleAurore'>Laura Santin</a> </p>
    </footer>
  )
}

export default Footer
