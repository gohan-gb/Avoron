// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonials = [
//   { 
//     image: "/assets/review1.jpg", 
//     text: "This is the best service I have ever used. Highly recommended!" 
//   },
//   { 
//     image: "/assets/review2.jpg", 
//     text: "Amazing experience! The team is very professional and helpful." 
//   },
//   { 
//     image: "/assets/review3.jpg", 
//     text: "Fantastic results. I am very satisfied with the quality of work." 
//   },
//   { 
//     image: "/assets/review4.jpg", 
//     text: "Excellent customer support and top-notch service." 
//   },
//   { 
//     image: "/assets/review5.jpg", 
//     text: "Great value for money. I would definitely come back again." 
//   },
//   { 
//     image: "/assets/review6.jpg", 
//     text: "This is the best service I have ever used. Highly recommended!" 
//   },
//   { 
//     image: "/assets/review7.jpg", 
//     text: "Amazing experience! The team is very professional and helpful." 
//   },
//   { 
//     image: "/assets/review8.jpg", 
//     text: "Fantastic results. I am very satisfied with the quality of work." 
//   },
//   { 
//     image: "/assets/review9.jpg", 
//     text: "Great value for money. I would definitely come back again." 
//   },
// ];

// const Testimonial = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="mt-24">
//       <div
//         className="relative flex flex-col items-center justify-center h-[600px] bg-cover bg-center bg-no-repeat px-4"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1565206077209-0e7e57b6c152?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//         }}
//       >
//         {/* Header Text */}
//         <div className="absolute top-4 w-full text-center px-4">
//           <h1 className="h4 text-center">What People Say About Us</h1>
//         </div>
  
//         {/* Testimonial Section */}
//         <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl h-auto w-3/4 bg-light opacity-95 p-4 sm:p-6 lg:p-8 rounded-md">
//           <div className="testimonial-carousel w-full">
//             <Slider {...settings}>
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="p-4">
//                   <div className="flex flex-col items-center text-center">
//                     <img
//                       src={testimonial.image}
//                       alt={`Testimonial ${index + 1}`}
//                       className="h-64 w-56 rounded-xl"  // Increased size
//                     />
//                     {/* <p className="text-lg sm:text-base text-gray-700">{testimonial.text}</p>  */}
                    
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { image: "/assets/review1.jpg", text: "This is the best service I have ever used. Highly recommended!" },
  { image: "/assets/review2.jpg", text: "Amazing experience! The team is very professional and helpful." },
  { image: "/assets/review3.jpg", text: "Fantastic results. I am very satisfied with the quality of work." },
  { image: "/assets/review4.jpg", text: "Excellent customer support and top-notch service." },
  { image: "/assets/review5.jpg", text: "Great value for money. I would definitely come back again." },
  { image: "/assets/review6.jpg", text: "Highly recommended! Very professional team." },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div className="mt-24">
      <div
        className="relative flex flex-col items-center justify-center h-[600px] bg-cover bg-center bg-no-repeat px-4"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571434976902-a6e3e1eb0d51?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
       <div className="absolute top-4 w-full text-center px-4">
           <h1 className="h4 text-center">What People Say About Us</h1>
       </div>

        <div className="relative z-10 w-full max-w-4xl bg-white/50 bg-opacity-90 p-6 rounded-md">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-4 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${index + 1}`}
                    className={`h-56 w-40 rounded-xl shadow-md transition-transform duration-300 ${
                      index === currentIndex ? "scale-105" : "scale-90"
                    }`}
                  />
                  <p className="mt-4 text-sm text-gray-700">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

