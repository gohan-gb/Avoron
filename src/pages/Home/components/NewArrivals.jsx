import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import config from "../../../Backend/Appwrite/config";
import ButtonTwo from '../../../components/ButtonTwo';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {singleproductFetch} from "../../../Backend/Redux/ProductSlice"
import MarginWrapper from '../../../common/MarginWrapper';

const NewArrivals = () => {
  const [newlyAddedProducts, setnewlyAddedProducts] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const gotosingleProduct = async (id) => {
    try {
      const stringid = String(id)
      const singleproductdata = await config.getsingleProductData (stringid)
      if (singleproductdata) {
        dispatch(singleproductFetch(singleproductdata)); 
        navigate(`/products/${id}`)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // 3 seconds between slides
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
    <div className='w-full overflow-hidden'>
      <MarginWrapper >
      <div className="h4 text-center mt-20 sm:mt-36 md:mt-36 lg:mt-48 xl:mt-52">New Arrivals</div>
      <div className="max-w-8xl mx-auto py-8 ">
        <Slider {...settings}>
          {newlyAddedProducts.map((product) => (
            <div key={product.id} className="p-2">
              <div className="flex flex-col items-center justify-center">
                {/* Image Container */}
                <div className="bg-olive outline-none rounded-s-2xl rounded-e-2xl overflow-hidden w-full h-full flex items-center justify-center">
                  <img
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-full object-cover mx-auto"
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
                <div onClick={() => gotosingleProduct(product.id)}><ButtonTwo  text='Buy this' /></div>
              </div>
            </div>
          ))}

        </Slider>
      </div>
      </MarginWrapper>
    </div>
  );
};

export default NewArrivals;
