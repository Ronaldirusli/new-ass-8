import React, { useState } from 'react';
import logofb from '../../assets/Socialmedia.png';
import logoig from '../../assets/Socialmedia1.png';
import logoln from '../../assets/Socialmedia2.png';
import logotiktok from '../../assets/Socialmedia3.png';

export const Footer: React.FC = () => {
  type FormState = {
    name: string;
    email: string;
    message: string;
    services: string[];
  };

  const [FormData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    services: [],
  });
  const sosmedia = [
    { icon: logofb, href: 'https://www.facebook.com' },
    { icon: logoig, href: 'https://www.instagram.com' },
    { icon: logoln, href: 'https://www.linkedin.com' },
    { icon: logotiktok, href: 'https://www.tiktok.com' },
  ];
  const handleCheckbox = (service: string) => {
    if (FormData.services.includes(service)) {
      setFormData({
        ...FormData,
        services: FormData.services.filter((s) => s !== service),
      });
    } else {
      setFormData({
        ...FormData,
        services: [...FormData.services, service],
      });
    }
  };
  const availableServices = [
    'Web Development',
    'Mobile Apps Development',
    'UI/UX Design',
    'Cloud Solutions',
    'Software Development',
    'Others',
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', FormData);
    alert('Thankyou for reaching out! We will contact you soon.');
  };
  return (
    <footer className='bg-white dark:bg-black pt-20 pb-12 px-4 sm:px-6 lg:px-8'>
      <div
        id='contact'
        className='max-w-3xl mx-auto text-center space-y-6 mb-12'
      >
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white tracking-tight'>
          Ready to Start? Let's Talk.
        </h2>
        <p className='text-xs text-gray-500'>
          Tell us what you beed, and we'll get back to you soon.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className='max-w-2xl mx-auto space-y-6 mb-24'
      >
        <div className='space-y-2'>
          <label className='block text-xs font-semibold text-gray-950 dark:text-gray-100 uppercase tracking-wide'>
            Name
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            value={FormData.name}
            onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
            className='w-full bg-gray-100 dark:bg-black border border-gray-800 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors'
            required
          />
        </div>
        <div className='space-y-2'>
          <label className='block text-xs font-semibold dark:text-gray-200 uppercase tracking-wide'>
            Email
          </label>
          <input
            type='email'
            placeholder='Enter your email'
            value={FormData.email}
            onChange={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
            className='w-full bg-gray-100 dark:bg-black border border-gray-800 rounded-xl px-4 py-3 text-xs text-gray-950 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors'
            required
          />
        </div>
        <div className='space-y-2'>
          <label className='block text-xs font-semibold text-gray-950 dark:text-gray-100 uppercase tracking-wide'>
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Enter your message'
            value={FormData.message}
            onChange={(e) =>
              setFormData({ ...FormData, message: e.target.value })
            }
            className='w-full bg-gray-100 dark:bg-black border border-gray-800 rounded-xl px-4 py-3 text-xs text-gray-950 placeholder-gray-400 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors'
            required
          />
        </div>
        <div className='space-y-3'>
          <label className='block text-xs font-semibold text-gray-950 dark:text-gray-100 uppercase tracking-wider'>
            Services
          </label>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {availableServices.map((item: string, index: number) => (
              <div key={index}>
                <label
                  key={index}
                  className='flex items-center space-x-3 bg-gray-100 dark:bg-black border border-gray-950 rounded-xl p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-950 transition-colors select-none'
                >
                  <span className='text-xs text-gray-400 font-medium'>
                    {item}
                  </span>
                </label>
                <input
                  type='checkbox'
                  checked={FormData.services.includes(item)}
                  onChange={() => handleCheckbox(item)}
                  className='form-checkbox h-4 w-4 accent-orange-600 dark:border-gray-800 bg-white  border-gray-100 dark:bg-black rounded focus:ring-0'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='pt-4'>
          <button
            type='submit'
            className='w-full bg-orange-600 text-white py-3.5 rounded-full font-bold text-xs tracking-wider uppercase hover:bg-orange-700 transition-all cursor-pointer'
          >
            Send Message
          </button>
        </div>
      </form>
      <div className='max-w-7xl mx-auto bg-gray-200 dark:bg-gray-950 border border-gray-200 dark:border-gray-900 rounded-2xl p-8 md:p-12 space-y-12'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
          <h3 className='text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight leading-tight'>
            LET'S DISCUSS <br className='hidden sm:inline' />
            YOUR IDEAS
          </h3>
          <div className='flex items-center gap-2 select-none'>
            <div className='w-4 h-4 bg-orange-600 rounded-sm transform rotate-12 flex items-center justify-center'>
              <div className='w-1 h-1 bg-black rounded-sm'></div>
            </div>
            <span className='text-black dark:text-white font-bold text-sm tracking-tight'>
              Your <span className='text-gray-400 font-medium'>Logo</span>
            </span>
          </div>
        </div>
        <div className='w-full h-px bg-gray-300 dark:bg-gray-900'></div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex flex-wrap justify-center gap-6 sm:gap-8'>
            {['About', 'Service', 'Projects', 'Testimonials', 'FAQ'].map(
              (item) => (
                <a
                  // key={item.id}
                  // href={item.href}
                  className='text-xs font-semibold text-gray-950 dark:text-gray-100 hover:text-white uppercase transition-colors'
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className='flex items-center gap-3'>
            {sosmedia.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target='_blank'
                className='w-8 h-8 rounded-full bg-gray-300 dark:bg-black border border-gray-100 dark:border-gray-900 flex items-center justify-center hover:border-gray-800 transition-colors'
              >
                <img
                  src={social.icon}
                  alt='social media'
                  className='w-4 h-4 object-contain'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
