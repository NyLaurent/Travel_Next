import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
   <footer className='flexCenter mb-24'>

    <div className='padding-container max-container flex w-full
    flex-col gap-14'>
      <div className='flex flex-col items-start
      justify-center gap-[10%]
      md:flex-row'>
        <Link href="/" className='mb-10'>
        <Image
        src="hilink-logo.svg"
        alt='logo'
        width={74}
        height={29}/>
        </Link>


        <div></div>
      </div>

    </div>

   </footer>
  )
}

export default Footer