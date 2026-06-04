import React from 'react';
import { projectItems } from '../../data/mockData';

export const Portofolio: React.FC = () => {
  return (
    <section
      id='projects'
      className='py-20 bg-white dark:bg-black px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-7xl mx-auto items-center space-y-2 mb-16'>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-950 dark:text-gray-100 text-center '>
          From Vision to Launch! Projects We’re Proud Of
        </h2>
        <p className='text-xs text-gray-500 text-center'>
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projectItems.map((project, index) => (
          <div
            key={index}
            className='group flex flex-col space-y-4 bg-white dark:bg-gray-950 relative'
          >
            <div className='w-full aspect-4/3 rounded-2xl overflow-hidden bg-gray-950 border border-gray-100 dark:border-gray-900 group-hover:border-gray-950 transition-all duration-300 shadow-xl'>
              <img
                src={project.imageURL}
                alt={project.title}
                className='w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500'
              />
            </div>
            <div className='space-y-1 px-1'>
              <p className='text-xs text-orange-600 font-semibold tracking-wide'>
                {project.tag}
              </p>
              <h3 className='text-base font-bold text-gray-950 dark:text-gray-100 tracking-tight group-hover:text-gray-200 transition-colors'>
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
