import React from 'react'
import AnimatedImage from './AnimateImage'
import AboutCarousal from './AboutCarousal'

const About = () => {

  return (
    <div className='mt-24'>
      <div className="bg-darkOlive max-w-full h-auto p-8">
       {/* Heading */}
      <h1 className="text-[50px] sm:text-[60px] md:text-[90px] lg:text-[150px] xl:text-[150px] text-center text-dark font-bodoni underline">
       Welcome to Avoron</h1>
      {/* Subheading */}
      <p className="text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-5xl text-center text-dark mt-4 font-bodoni">
      We bring to you a great collection of divine goddess items, including intricately designed mukuts, elegant dresses, hair accessories, and sacred god adornments, crafted to elevate your spiritual celebrations.
      </p>
      <div className="flex items-center justify-center mt-8">
      {/* <img
      src="https://images.unsplash.com/photo-1590650265179-7e13941e93f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="women empowerment"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-4xl h-auto rounded-s-xl rounded-e-xl object-cover" /> */}
      <AboutCarousal />
      </div>

      {/* <h4 className="text-dark text-center mt-8 font-bodoni text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed sm:leading-normal md:leading-loose">
       My Site is an ecommerce website dedicated to offering a <br /> 
       wide range of goddess items such as dresses, hair <br />
        accessories, and more. We believe that every product we <br />
        offer can make a woman feel empowered and beautiful. Our <br />
        collection is carefully curated to bring you the best in <br />
        goddess fashion and style.
       </h4> */}
       
       <p className="text-center text-dark font-thin my-12 text-sm sm:text-base md:text-sm lg:text-sm xl:text-sm leading-relaxed sm:leading-normal md:leading-loose">
       At Avoron, we are passionate about providing a platform for women to express their unique style. <br />
       Our mission is to offer a diverse range of products that are not only fashionable but also <br />
       sustainable and ethically sourced. We are committed to promoting eco-friendly practices and <br />
        supporting women-owned businesses to make a positive impact on the planet and the community.
       </p>
     </div>

     <div>
      <AnimatedImage />
     </div>

     <div className='my-12'>
     <p className="text-center font-bodoni text-dark mt-8 text-6xl ">  Bring Avoron at Your Home</p>
     </div>

      <section className="flex flex-col md:flex-row justify-center gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center px-4 md:px-8 lg:px-12 py-12">
      <div className="text-center md:text-left max-w-xs md:max-w-sm">
      <h4 className="text-4xl  mb-6 text-dark font-bodoni ">Eco-friendly <br /> Practices</h4>
      <p className="text-dark mt-2 leading-relaxed">
      At Avoron, we are dedicated to <br /> promoting eco-friendly practices in <br />
      every aspect of our business. From <br /> packaging to sourcing, we strive 
      to  <br />minimize waste and reduce our <br /> environmental footprint.
      </p>
     </div>
     <div className="text-center md:text-left max-w-xs md:max-w-sm">
     <h4 className="text-4xl  mb-6 text-dark font-bodoni ">Sustainable <br /> Fashion</h4>
     <p className="text-dark mt-2 leading-relaxed">
      We believe in the power of  <br />sustainable fashion and its ability to <br />  create a positive change. Our collec <br />tion features items made from <br />
      eco-conscious materials, ensuring <br /> that you can express your style <br />
      without compromising the planet.
     </p>
    </div>
     <div className="text-center md:text-left max-w-xs md:max-w-sm">
     <h4 className="text-4xl  font-bodoni mb-6 text-dark">Quality and  <br />Reusability</h4>
     <p className="text-dark mt-2 leading-relaxed">
      Quality and reusability are at the core <br /> of our product selection. We carefully  <br />
      select items that are durable and  <br />timeless, encouraging a mindset of <br />
      reusability and reducing fashion <br /> waste.
     </p>
     </div>
     </section>


    </div>
  )
}

export default About