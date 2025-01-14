import React from 'react';
import Button from '../../../components/Button';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-28">
      {/* Fixed Background */}
      <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50 opacity-90 rounded-lg h-[500px] sm:h-[600px] md:h-[500px] lg:h-[700px] xl:h-[700px]"
  style={{
    backgroundImage: "url('assets/weekendsale.webp')",
    backgroundAttachment: "fixed",
  }}
></div>


      {/* Text Content */}
      <div className="relative flex flex-col justify-center items-center text-center px-6 max-w-full">
        <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-custom-lg xl:text-custom-xl font-fraunceus text-yellow1 mt-28 mb-2">
          Avoron
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-yellow2 mt-2 sm:mt-4">
          Adorn the Divine with Avoron – where grace meets craftsmanship
        </h2>
        <p className="hidden sm:block text-base md:text-lg lg:text-xl xl:text-2xl text-light max-w-3xl mx-auto break-words mt-2">
        Buy our exclusive handmade items of Laddo Gopal dresses,
          <br className="hidden md:block" />
          Mata Laxmi sarees, and other divine deity items, along with empowering accessories and exclusive offers.
        </p>
        <div className="mt-4 lg:mt-8 md:mt-6  mb-24 sm:mb-6 md:mb-8 lg:mb-2 xl:mb-2">
          <Link to='/Laddu-Gopal-dress-decoration-items/shop-now'>
            <Button text="View Shop" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
