import React from 'react'
import Image from 'next/image'
import camp from '../public/camp.svg'
import star from '../public/star.svg'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
      <div className='hero-map'></div>

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src={camp}
          alt='camp'
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />
        <h1 className='bold-53 lg:bold-88'>Putuk Truno Camp Area</h1>
        <p className='regular-16 mt-16 text-gray-400 xl:max-w-[520px]'>
          We want to be on each of your 
          journeys seeking the satisfaction
          of seeing the incorruptible beauty
          of nature. We can help you on an 
          adventure around the world in 
          just one app
        </p>
        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
              <Image
                src={star}
                alt='star'
                key={index}
                width={24}
                height={24}
              />
            ))}
          </div>


          <p className='bold-16 lg:bold-20 text-blue-700'>198K

          <span className='regular-16 lg:regular-20 ml-1'>
            Excellent Reviews
          </span>
          </p>
          
        </div>
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
            <Button
             type ="button" 
            title="Download app"
            variant="btn_green"/>


             <Button
             type ="button" 
            title="How we work"
            icon='/play.svg'
            variant="btn_white_text"
            />
            
        </div>
      </div>

      <div className='relative flex flex-1 items-start
      '>
        <div className='relative z-20 w-[268px]
        flex-col gap-8 rounded-3xl bg-green-950 px-7 py-8'>
            <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                    <p className='regular-16 text-gray-400'>Location</p>
                    <Image src='/close.svg' alt='close' width={24} height={24}/>

                </div>
                <p className='bold-20 text-white'>Nyanza_Rukali</p>
                <div className='flex items-center justify-between'>
                   <div className='flex flex-col'>
                    <p className='regular-16 font-semibold block text-gray-400'>Distance</p>
                    <p className='bold-20 text-white'>173.28 mi</p>

                   </div>

                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
