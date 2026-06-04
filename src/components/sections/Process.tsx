import React from 'react';
import { processStep } from '../../data/mockData';

export const Process: React.FC = () => {
  return (
    <section
      id='process'
      className='py-20 bg-white dark:bg-black px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-7xl mx-auto text-center space-y-2 mb-15'>
        <h2 className='text-xl sm:text-3xl font-bold text-gray-950 dark:text-gray-100'>
          Our Process
        </h2>
        <p className='text-xs sm:text-sm text-gray-500'>
          Clear steps, Smart Execution. Results you can count on.
        </p>
      </div>
      <div className='max-w-3xl mx-auto relative'>
        <div className='absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-900 transform sm:translate-x-1/2' />
        <div className='space-y-12'>
          {processStep.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row relative item-start ${isEven ? 'sm:flex-row-reverse' : ''}`}
              >
                <div className='absolute left-4 sm:left-1/2 w-6 h-6 rounded-full bg-orange-600 text-white font-bold text-xs flex item-center justify-center transform -translate-x-1/2 z-10 shadow-lg shadow-orange-500 border-4 border-white'>
                  {step.number}
                </div>
                <div className='w-full sm:w-[45%] ml-10 sm:ml-0 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 rounded-xl p-5 hover:border-gray-800 transition-all'>
                  <h3 className='text-sm font-bold text-gray-950 dark:text-gray-100'>
                    {step.title}
                  </h3>
                  <p className='text-xs text-gray-400 dark:text-gray-400 mt-2 leading-relaxed'>
                    {step.description}
                  </p>
                </div>
                <div className='hidden sm:block w-[45%]'></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
