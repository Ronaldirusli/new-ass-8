import React, { useState } from 'react';
import type { NavItem } from '../../types';
import Button from '../ui/Button';
interface NavbarProps {
  navItems: NavItem[];
  isDarkmode?: boolean;
  onClick?: () => void;
  currentTheme: 'light' | 'dark';
  onToggleTheme: () => void;
}
export const Navbar: React.FC<NavbarProps> = ({
  navItems,
  isDarkmode = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='bg-white text-gray-900 dark:bg-black dark:text-white backdrop-blur-md fixed w-full top-0 left-0 z-50 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-8 h-20'>
        <div className='w-5 h-5 bg-orange-600 rounded-sm transform rotate-12 flex items-center justify-center shadow-lg shadow-orange-500'>
          <div className='w-2 h-2 bg-white dark:bg-black rounded-sm'></div>
        </div>
        <span className='dark:text-white text-gray-950 font-bold text-lg tracking-tight'>
          Your <span className='text-gray-400 font-medium'>Logo</span>
        </span>
      </div>
      <div className='hidden md:flex justify-center items-center space-x-8'>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className='text-gray-800 dark:text-gray-400 dark:hover:text-white hover:text-gray-800 font-medium text-sm transition-colors duration-200'
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className='hidden lg:flex items-center gap-4'>
        <Button
          type='button'
          className='p-2 px-4 py-1.5 rounded-full dark:bg-gray-900 dark:text-gray-300 bg-gray-200 text-gray-800 transition-all text-xs cursor-pointer focus:outline-none'
        >
          {isDarkmode ? 'Switch to light mode' : 'Switch to dark mode'}
        </Button>
      </div>
      <div className='hidden lg:flex items-center gap-4'>
        <Button
          type='button'
          onClick={toggleMenu}
          className='bg-orange-600 dark:text-white text-gray-800 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-orange-600'
        >
          Let's Talk
        </Button>
      </div>
      <div className='flex lg:hidden'>
        <button
          onClick={toggleMenu}
          className='text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-900 transition-colors duration-200'
          aria-label={
            isDarkmode ? 'Switch to light mode' : 'Switch to dark mode'
          }
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden'>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className='text-gray-400 hover:text-white font-medium text-sm transition-colors duration-200'
            >
              {item.label}
            </a>
          ))}
          <Button
            onClick={toggleMenu}
            className='bg-orange-500 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-orange-600'
          >
            Let's Talk
          </Button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
