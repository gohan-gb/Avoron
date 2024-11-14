import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-transparent rounded-full p-2 shadow-lg"
    onClick={onClick}
  >
   <FaLongArrowAltRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-transparent rounded-full p-2 shadow-lg"
    onClick={onClick}
  >
   <FaLongArrowAltLeft />
  </div>
);

const NewArrivals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    { id: 1, name: "Product 1", price: "150rs", image: "https://images.unsplash.com/photo-1656428852088-dc40d6c76885?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Product 2", price: "250rs", image: "https://images.unsplash.com/photo-1723802205505-2f88b2227718?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Product 3", price: "350rs", image: "https://images.unsplash.com/photo-1665159882686-3d4fc7b036a4?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Product 4", price: "450rs", image: "https://images.unsplash.com/photo-1651160670627-2896ddf7822f?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Product 5", price: "550rs", image: "https://images.unsplash.com/photo-1695049918857-1e27d67782e5?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div>
      <div className="h4 text-center mt-8">New Arrivals</div>
      <div className="max-w-8xl mx-auto py-8">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-2">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-olive outline-none rounded-s-2xl rounded-e-2xl overflow-hidden w-full h-[400px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="w-[200px] h-[200px] object-cover mx-auto"
                  />
                </div>
                <div className="text-center mb-1 text-lg font-light text-gray-700">
                  {product.name}
                </div>
                <div className="text-center mb-1 text-base font-light text-gray-700">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
