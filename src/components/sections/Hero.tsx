import React from 'react';
import Button from '../ui/Button';
import { branchItem } from '../../data/mockData';
import imgHero from '../../assets/ImageHero.png';
import imgHeroLight from '../../assets/ImageHerolight.png';

export const Hero: React.FC = () => {
  return (
    <section
      id='home'
      className='pt-28 pb-20 md:pb-32 bg-white dark:bg-black overflow-hidden relative px-4 sm:px-6 lg:px-8 min-w-[320px]'
    >
      <div className='max-w-7xl mx-auto lg:grid lg:grid-cols-12 gap-8 items-center py-12 md:py-20 z-10'>
        <div className='lg:col-span-6 space-y-6 text-center lg:text-left'>
          <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-950 dark:text-white tracking-tight leading-tight'>
            Your Tech Partner for <br />
            <span className='text-orange-600'>Smarter Growth</span>
          </h1>
          <p className='text-xs sm:text-sm text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed'>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <div className='pt-2'>
            <Button
              label='Lets Talk'
              className='w-full sm:w-auto px-8 rounded-full'
            />
          </div>
        </div>
        <div className='mt-12 lg:mt-0 lg:col-span-6 flex justify-center relative'>
          <div className='w-full max-w-105 aspect-4/3 rounded-2xl p-4 flex items-center justify-center'>
            <img
              src={imgHeroLight}
              alt='Hero'
              className='dark:hidden object-contain'
            />
            <img
              src={imgHero}
              alt='Hero Light'
              className='dark:block hidden object-contain'
            />
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-8 mt-12'>
        <p className='text-center text-xs font-bold tracking-wider text-gray-800 dark:text-gray-700 uppercase mb-6'>
          Trusted by Global Innovators & Leading Brands{' '}
        </p>
        <div className='flex flex-wrap overflow-x-hidden relative justify-center gap-6 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-300'>
          {branchItem.map((item) => (
            <div
              key={item.name}
              className='flex items-center gap-1.5 text-white font-medium text-sm md:text-base'
            >
              <img src={item.icon} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
