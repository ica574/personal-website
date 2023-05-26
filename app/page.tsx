import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '600'
});

const Hero = () => {
  return (
    <div className="animate-pulse h-[73%] sm:h-[90%] md:h-[90%] xl:h-[83%] 2xl:h-[90%] flex flex-col justify-center items-center text-center">
      <div className='py-2 sm:py-3'>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gradient bg-gradient-to-r from-[#F3F2FD] via-[#7466EC] to-[#5EBCD4] ${inter.className}`}>Isaac Cilia Attard</h1>
      </div>
      <div className='py-2 sm:py-3'>
        <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gradient bg-gradient-to-r from-[#F3F2FD] via-[#7466EC] to-[#5EBCD4] ${inter.className}`}>Full-stack development. AI. Quantum Computing</p>
      </div>
    </div>
  );
};


export default Hero