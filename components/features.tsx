import React from 'react';
import phone from '../public/phone.png';
import Image from 'next/image';
import { FEATURES } from '@/constants';

const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container flex relative w-full justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src={phone}
            alt='phone'
            width={440}
            height={1000}
            className='feature-phone'
          />
        </div>

        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              src='/camp.svg'
              alt='camp'
              width={50}
              height={50}
              className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
            />
            <h2 className='bold-40 lg:bold-64'>Our features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20
          lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start mb-6'>
      <div className='rounded-full bg-green-50 p-4 lg:p-4 flex items-center justify-center'>
        <Image
          src={icon}
          alt='icon'
          width={28}
          height={28}
          className='rounded-full'
        />
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30
      lg:mt-[30px] lg:bg-none'>{description}</p>
    </li>
  );
};

export default Features;
