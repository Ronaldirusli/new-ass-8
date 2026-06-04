import React from 'react';
import { testimonials } from '../../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section
      id='testimonials'
      className='py-20 bg-white text-gray-950 dark:bg-black dark:text-gray-200 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-7xl mx-auto text-center space-y-2 mb-16 dark:text-gray-950'>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-950 dark:text-gray-200'>
          What Partners Say About Working With Us
        </h2>
        <p className='text-xs text-gray-500'>
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        {testimonials.map((testi, i) => (
          <div
            key={i}
            className='bg-gray-200 text-gray-950 dark:bg-gray-850 border border-orange-500 rounded-xl p-6 flex flex-col justify-between space-y-6 relative group hover:border-gray-800 transition-colors'
          >
            <div className='space-y-4'>
              <div className='flex gap-1 text-xs text-orange-600'>
                {Array.from({ length: testi.rating }).map((_, sIdx) => (
                  <span key={sIdx}>★</span>
                ))}
              </div>
              <p className='text-xs text-gray-350 leading-relaxed font-medium'>
                "{testi.quote}"
              </p>
            </div>

            <div className='flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-950'>
              <img
                src={testi.avatarURL}
                alt={testi.name}
                className='w-8 h-8 rounded-full object-cover bg-gray-800'
              />
              <div>
                <h4 className='text-xs font-bold text-gray-950 dark:text-gray-100'>
                  {testi.name}
                </h4>
                <p className='text-xs text-orange-500'>
                  {testi.role} @ <span className='text-center'></span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
