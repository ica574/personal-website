import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen'>
      <div className="text-center animate-pulse text-gradient bg-gradient-to-r from-[#F3F2FD] via-[#7466EC] to-[#5EBCD4]">
        <div className='p-1'>
          <h1 className={`text-4xl sm:text-6xl font-bold`}>Isaac Cilia Attard</h1>
        </div>
        <div className='p-1'>
          <p className={`text-lg sm:text-2xl md:text-3xl font-bold`}>Full-stack development. AI. Quantum Computing</p>
        </div>
      </div>
    </div>
  );
};


export default Hero