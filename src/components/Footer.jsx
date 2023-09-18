import React from 'react';

import { wa_logo, email_logo } from '../assets';

const Footer = () => {
  return (
    <div className='bg-footerBg h-[100px] relative'>
      <div className='container mx-auto'>
        <div className='flex items-center pt-28 lg:gap-30 md:gap-10 flex-wrap'>

                    <div className='flex items-center'>
                      <img src={wa_logo} alt='' className='w-[16px] h-[16px]' />
                      <span className='font-bold text-sm'>(+94) 716132227</span>
                    </div>
                    <div className='flex items-center '>
                      <img src={email_logo} alt='' className='w-[16px] h-[16px]' />
                      <span className='font-bold text-sm'>mylibrary@library.com</span>
                    </div>
                    <div className='flex items-center '>
                      <img src={email_logo} alt='' className='w-[16px] h-[16px]' />
                      <span className='font-bold text-sm'>mylibrary@library.com</span>
                    </div>
                    <div className='flex items-center '>
                      <img src={email_logo} alt='' className='w-[16px] h-[16px]' />
                      <span className='font-bold text-sm'>mylibrary@library.com</span>
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
