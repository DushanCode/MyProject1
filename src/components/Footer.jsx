import React from 'react';

const Footer = () => {
  return (
    <div className='bg-footerBg h-[400px] relative'>
      <div className='container mx-auto'>
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
