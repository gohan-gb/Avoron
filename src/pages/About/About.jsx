import React from 'react'
import AnimatedImage from './AnimateImage'
import AboutCarousal from './AboutCarousal'

const About = () => {

  return (
    <div className='mt-24 text-dark'>
      <div className="bg-darkOlive max-w-full h-auto p-8 flex flex-col justify-center items-center">
        <h1 className="h3 text-center pt-16 pb-16">
        Welcome to Avoron</h1>
        <p className="text-center p1 pb-16 sm:w-[50%] w-[75%]">
        We bring to you a great collection of divine goddess items, 
        including intricately designed mukuts, elegant dresses, hair 
        accessories, and sacred god adornments, crafted to elevate your 
        spiritual celebrations.
        </p>
        <div className="flex items-center justify-center mt-8">
        <AboutCarousal />
        </div>       
      </div>

     <div>
      <AnimatedImage />
     </div>

     <div className='my-12'>
     <p className="text-center font-bodoni text-dark mt-8 text-6xl ">  Bring Avoron at Your Home</p>
     </div>

      <section className="flex flex-col md:flex-row justify-center gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center px-4 md:px-8 lg:px-12 py-12">
      <div className="text-center md:text-left max-w-xs md:max-w-sm">
      <h4 className="mb-6 text-dark font-bodoni h4 ">Eco-friendly <br /> Practices</h4>
      <p className="text-dark mt-2 leading-relaxed p1">
      At Avoron, we are dedicated to promoting eco-friendly practices in
      every aspect of our business. From packaging to sourcing, we strive 
      to minimize waste and reduce our environmental footprint.
      </p>
     </div>
     <div className="text-center md:text-left max-w-xs md:max-w-sm">
     <h4 className="text-4xl  mb-6 text-dark font-bodoni h4 ">Sustainable <br /> Fashion</h4>
     <p className="text-dark mt-2 leading-relaxed p1">
      We believe in the power of sustainable fashion and its ability to  create a positive change. Our collection features items made from
      eco-conscious materials, ensuring that you can express your style
      without compromising the planet.
     </p>
    </div>
     <div className="text-center md:text-left max-w-xs md:max-w-sm">
     <h4 className="text-4xl  font-bodoni mb-6 text-dark h4">Quality and  <br />Reusability</h4>
     <p className="text-dark mt-2 leading-relaxed p1">
      Quality and reusability are at the core of our product selection. We carefully
      select items that are durable and timeless, encouraging a mindset of
      reusability and reducing fashion waste.
     </p>
     </div>
     </section>


    </div>
  )
}

export default About