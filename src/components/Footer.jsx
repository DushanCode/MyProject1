import React from 'react';

import { wa_logo, email_logo } from '../assets';

const Footer = () => {
  return (
    <div className='bg-footerBg h-[400px] relative'>
      <div className='container mx-auto'>
        <div className='flex items-center pt-28 lg:gap-52 md:gap-24 flex-wrap'>
          <div className='flex items-center gap-2'>
            <img src={wa_logo} alt='' className='w-[80px] h-[80px]' />
            <span className='font-bold text-2xl'>(+94) 7347276</span>
          </div>
          <div className='flex items-center gap-2'>
            <img src={email_logo} alt='' className='w-[80px] h-[80px]' />
            <span className='font-bold text-2xl'>mylibrary@library.com</span>
          </div>
        </div>
        <div className='absolute bottom-[50px] right-[50px]'>
          <button className='px-10 py-3 bg-[#bea13b] rounded-md '>
            Let's Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
