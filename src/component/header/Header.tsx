import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#FFBCB2] flex justify-between'>
      <Image
      src={"/images/logojs.png"}
      alt=""
      width={70}
      height={60}
      className="h-full"
      />
     <p>burger</p> 
    </header>
  )
}

export default Header
