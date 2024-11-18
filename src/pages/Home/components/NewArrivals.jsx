import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import config from "../../../Backend/Appwrite/config";

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
  const [newlyAddedProducts, setnewlyAddedProducts] = useState([]);

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

  const getnewlyAddedProducts = async () => {
    try {
      const productsdata = await config.getnewlyAddedProducts();
      if (productsdata && productsdata.length > 0) {
        setnewlyAddedProducts(productsdata);
      } else {
        console.error("Error: No products data received");
      }
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };

  useEffect(() => {
    getnewlyAddedProducts();
  }, [newlyAddedProducts.length]);

  return (
    <div>
      <div className="h4 text-center mt-8">New Arrivals</div>
      <div className="max-w-8xl mx-auto py-8">
        <Slider {...settings}>
          {/* {newlyAddedProducts.map((product) => (
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
          ))} */}
          {newlyAddedProducts.map((product) => (
            <div key={product.id} className="p-2">
              <div className="flex flex-col items-center justify-center">
                {/* Image Container */}
                <div className="bg-olive outline-none rounded-s-2xl rounded-e-2xl overflow-hidden w-full h-[400px] flex items-center justify-center">
                  <img
                    src={product.images[0]} // Assuming `image` is still a valid property
                    alt={product.title} // Use title for accessibility
                    className="w-[200px] h-[200px] object-cover mx-auto"
                  />
                </div>

                {/* Product Title */}
                <div className="text-center mb-1 text-lg font-light text-gray-700">
                  {product.title}
                </div>

                {/* Product Price */}
                <div className="text-center mb-1 text-base font-light text-gray-700">
                  {product.isDiscount === "yes" && product.discountedPrice 
                    ? `Discounted: ₹${product.discountedPrice}`
                    : `₹${product.price}`}
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
