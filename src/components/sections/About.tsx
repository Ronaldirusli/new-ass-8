import React from 'react';
import { resultData } from '../../data/mockData';

export const About: React.FC = () => {
  return (
    <section
      id='about'
      className='py-20 bg-white text-gray-950 dark:bg-black dark:text-gray-200 px-4 sm:px-6 lg:px-80'
    >
      <div className='max-w-7xl mx-auto bg-white dark:bg-black text-center space-y-3 mb-16'>
        <h2 className='text-xl sm:text-3xl font-bold text-gray-950 dark:text-white tracking-tight'>
          End-to End IT Solutions That Drive Results
        </h2>
        <p className='text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto'>
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </div>
      <div className='max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center'>
        {resultData.map((item) => (
          <div
            key={item.number}
            className='aspect-square rounded-full bg-gray-150 dark:bg-gray-800 border border-gray-600 flex flex-col items-center justify-center text-center p-4 dark:hover:bg-orange-500 hover:bg-gray-200'
          >
            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600'>
              {item.number}
            </div>
            <div className='text-xs sm:text-xs lg:text-sm text-gray-950 mt-1 max-w-27.5 font-medium leading-tight'>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
