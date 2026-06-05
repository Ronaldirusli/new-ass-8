import React, { useState } from 'react';
import { faqItems } from '../../data/mockData';
import imgFaq from '../../assets/Consult.png';
import type { FaqItem } from '../../types';

export const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section
      id='faq'
      className='py-20 bg-white dark:bg-black dark:text-white text-gray-950 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-7xl mx-auto text-center space-y-2 mb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          <div className='lg:col-span-8 space-y-8'>
            <div>
              <h2 className='text-4xl font-bold tracking-tight mb-2'>
                Need Help? Start Here
              </h2>
              <p className='text-gray-500 text-sm'>
                Everything you need to know - all in one place.
              </p>
            </div>
            <div className='border-t border-gray-900 divide-y divide-gray-900'>
              {faqItems.map((item: FaqItem, index: number) => {
                const isActive = index === activeIndex;
                return (
                  <div key={index} className='py-5 transition-all duration-300'>
                    <button
                      onClick={() => toggleFaq(index)}
                      className='w-full flex justify-between items-center text-left font-semibold text-lg text-gray-950 dark:text-white hover:text-gray-300 cursos-pointer focus:outline-none'
                    >
                      <span className='pr-4'>{item.question}</span>
                      <span className='text-2xl font-light text-gray-400 select-none'>
                        {isActive ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                    >
                      <p className='text-sm text-gray-400 leading-relaxed max-w-2xl'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='lg:col-span-4 w-full pt-4 lg:pt-0'>
            <div className='bg-orange-500 rounded-3xl p-6 flex flex-col justify-between space-y-6'>
              <div className='space-y-2'>
                <h3 className='text-2xl font-bold text-white leading-tight'>
                  Let's talk it through
                </h3>
                <p className='text-orange-100 text-xs leading-relaxed'>
                  book a free consultation with our team.
                </p>
              </div>
              <div className='w-full h-44 rounded-2xl overflow-hidden bg-gray-950'>
                <img
                  src={imgFaq}
                  alt='Consultation'
                  className='w-full h-full object-cover object-center'
                />
              </div>
              <button className='w-full bg-white text-black text-xs font-bold py-3.5 px-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer text-center'>
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
