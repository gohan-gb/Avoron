import React from 'react';
import Button from '../../components/Button';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Image Container */}
      <div className="flex items-center justify-center p-2">
        <img
          src="https://images.unsplash.com/photo-1659727640714-7e9a1d8b31cb?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="godimage"
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg brightness-50 opacity-90"
        />
      </div>

      {/* Text Over Image */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 max-w-full">
        <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-custom-lg xl:text-custom-xl font-bold  text-yellow1 mt-20 mb-2">
          Avoron
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-yellow2 mt-2">
          Adorn the Divine with Avoron – where grace meets craftsmanship
        </h2>
        <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-light max-w-3xl mx-auto break-words mt-2" >
          Shop our premium selection of goddess hair, dresses, temple swings, <br className="hidden md:block" /> and traditional accessories to enrich your devotional space with elegance.
        </p>
        <div className='mt-4 lg:mt-8 md:mt-6'>
         <Button  text='Explore More' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
