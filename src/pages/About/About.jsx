import React from 'react'
import AnimatedImage from './AnimateImage'
import AboutCarousal from './AboutCarousal'
import MarginWrapper from '../../common/MarginWrapper'

const About = () => {

  return (
    <div className='mt-24'>
      <div className="bg-darkOlive max-w-full h-auto p-8 ">
      {/* <h1 className="h3 text-center pt-16 pb-16 text-dark font-fraunceus">
       Welcome to Avoron</h1>
      <p className="text-center text-dark p1 pb-16 w-full">
        We are dedicated to providing exceptional customer service.
        Whether you have a question, need assistance, or just want to say
        hello, we're here for you. Reach out to us via email, live chat,
        or phone – we'd love to hear from you.
      </p> */}
      <div className="bg-darkOlive flex flex-col justify-center items-center pb-16 text-dark">
        <MarginWrapper>
          <div className="flex flex-col justify-center items-center">
            <h1 className="h3 text-center pt-16 pb-16">Welcome to Avoron</h1>
            <p className="text-center p1 pb-16 w-[75%] sm:w-[50%]">
            We are dedicated to providing exceptional customer service.
            Whether you have a question, need assistance, or just want to say
            hello, we're here for you. Reach out to us via email, live chat,
            or phone – we'd love to hear from you.
            </p>
          </div>
        </MarginWrapper>
      </div>
      <div className="flex items-center justify-center mt-8">
       <img
      src="/assets/krishna3.webp"
      alt="women empowerment"
      className="w-full h-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-4xl  rounded-s-xl rounded-e-xl object-cover" /> 
      {/* <AboutCarousal /> */}
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

     <div className='overflow-hidden'>
      <AnimatedImage />
     </div>

     <div className='my-12'>
     <p className="text-center h3 text-dark mt-8 text-6xl ">  Bring Avoron at Your Home</p>
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