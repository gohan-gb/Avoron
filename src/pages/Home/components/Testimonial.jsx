import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
    {
      name: "John Doe",
      feedback: "This is the best service I have ever used. Highly recommend!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Smith",
      feedback: "Amazing experience! The team is very professional.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Sam Wilson",
      feedback: "I'm extremely satisfied with the quality. Will come back again!",
      image: "https://via.placeholder.com/100",
    },
  ];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='mt-24 '>
      <div 
  className="relative flex flex-col items-center justify-center h-[600px] bg-cover bg-center bg-no-repeat px-4"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1565206077209-0e7e57b6c152?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  }}
>
  {/* Header Text */}
  <div className="absolute top-4 w-full text-center px-4">
       <h1 className='h4 text-center'>  What People Say About Us </h1>
  </div>

  {/* Testimonial Section */}
  <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl h-auto bg-light opacity-95  p-4 sm:p-6 lg:p-8 rounded-md">
    <div className="testimonial-carousel w-full">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="text-center flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 sm:w-20 sm:h-20 rounded-full mb-4"
              />
              <p className="text-black text-sm sm:text-base md:text-lg italic">
                "{testimonial.feedback}"
              </p>
              <h3 className="text-slate-600 text-base sm:text-lg font-semibold mt-2">
                {testimonial.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>



    </div>
  )
}

export default Testimonial