import React from 'react';
import { serviceCardItem } from '../../data/mockData';

export const Services: React.FC = () => {
  return (
    <section
      id='services'
      className='py-20 bg-white text-gray-950 dark:bg-black dark:text-gray-200 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-7xl mx-auto text-center space-y-3 mb-16'>
        <h2 className='text-xl sm:text-3xl font-bold text-gray-950 dark:text-gray-100  tracking-tight'>
          Smart IT Solutions That Grow With You
        </h2>
        <p className='text-xs text-gray-500'>
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {serviceCardItem.map((service, idx) => (
          <div
            key={idx}
            className='bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 rounded-xl p-6 transition-all duration-300 hover:border-gray-800 hover:translate-y-0.5'
          >
            <div className='text=xl mb-4 bg-white dark:bg-gray-800 w-20 h-20 flex items-center justify-center'>
              <img
                src={service.icon}
                alt={service.title}
                className='w-full h-full object-contain'
              />
            </div>
            <h3 className='text-sm font-bold text-gray-950 dark:text-gray-100 mb-2'>
              {service.title}
            </h3>
            <p className='text-xs text-gray-400 leading-relaxed'>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
