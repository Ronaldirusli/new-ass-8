import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Process } from '../components/sections/Process';
import { Services } from '../components/sections/Services';
import { Industry } from '../components/sections/Industry';
import { Portofolio } from '../components/sections/Portofolio';
import { Testimonials } from '../components/sections/Testimonial';
import { Faq } from '../components/sections/Faq';
import { Footer } from '../components/layout/Footer';
import { navItems } from '../data/mockData';

interface HomeProps {
  currentTheme: 'light' | 'dark';
  onToggleTheme: () => void;
}
export const Home: React.FC<HomeProps> = ({ currentTheme, onToggleTheme }) => {
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (currentTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [currentTheme]);

  return (
    <div className='min-h-screen bg-white  text-gray-950 dark:bg-black dark:text-gray-200 antialiased scroll-smooth'>
      <Navbar
        navItems={navItems}
        isDarkmode={currentTheme === 'dark'}
        onClick={onToggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <Industry />
        <Portofolio />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};
