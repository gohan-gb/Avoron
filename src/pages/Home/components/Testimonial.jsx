import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarginWrapper from "../../../common/MarginWrapper";
const testimonials = [
  {
    image: "/assets/review1.jpg",
    text: ["This is the best service I have ever used.", "Highly recommended!"],
  },
  {
    image: "/assets/review2.jpg",
    text: ["Amazing experience!", "The team is very professional and helpful."],
  },
  {
    image: "/assets/review3.jpg",
    text: ["Fantastic results.", "I am very satisfied with the quality of work."],
  },
  {
    image: "/assets/review4.jpg",
    text: ["Excellent customer support.", "Top-notch service."],
  },
  {
    image: "/assets/review5.jpg",
    text: ["Great value for money.", "I would definitely come back again."],
  },
  {
    image: "/assets/review6.jpg",
    text: ["Highly recommended!", "Very professional team."],
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-24">
      <MarginWrapper>
      <div className="text-center mb-12">
        <h1 className="mb-8 mt-8 text-center text-2xl font-semibold">
          What People Say About Us
        </h1>
      </div>
      <div className="max-w-full mx-auto p-2 overflow-hidden mb-12">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-0"> {/* Set px-0 for no padding */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  className="rounded-xl transition-transform duration-300 w-[250px] h-[300px]"
                />
                <p className="mt-4 text-gray-700 text-sm text-center leading-4">
                  {testimonial.text[0]} <br /> {testimonial.text[1]}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </MarginWrapper>
    </div>
  );
};

export default Testimonial;
