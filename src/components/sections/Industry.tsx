import React, { useState } from 'react';
import { IndustryItems } from '../../data/mockData';

export const Industry: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Fintech');
  const currentIndustry =
    IndustryItems.find((i) => i.id === activeTab) || IndustryItems[0];

  return (
    <section className='py-20 bg-white dark:bg-black px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto space-y-2 mb-12'>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-950 dark:text-gray-100'>
          Built for Your Industry
        </h2>
        <p className='text-xs text-gray-500'>
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
        <div className='lg:col-span-3 flex flex-col space-y-4 border-l border-gray-800 pl-0 lg:pl-2'>
          {IndustryItems.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative pl-4 text-left font-semibold text-lg transition-all duration-300 cursor-pointer outline-none focus:outline-none ${isActive ? 'text-gray-300 font-bold' : 'text-gray-500 hover:text-gray-300'}`}
              >
                {isActive && (
                  <div className='absolute left-0 top-1/2 -translate-y-1/2 w-2 h-6 bg-orange-600 rounded-full' />
                )}
                {item.name}
              </button>
            );
          })}
        </div>

        <div className='lg:col-span-9 space-y-6'>
          <div className='space-y-4'>
            <p className='text-gray-350 text-base leading-relaxed max-w-2xl min-h-20 transition-all duration-300'>
              {currentIndustry.title}
            </p>

            <div className='w-full rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 aspect-21/9'>
              <img
                src={currentIndustry.imageURL}
                alt={currentIndustry.name}
                className='w-full h-full object-cover object-center transition-all duration-500 transform hover:scale-105'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
