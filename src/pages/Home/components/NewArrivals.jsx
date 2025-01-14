import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "../../../Backend/Appwrite/config";
import ButtonTwo from "../../../components/ButtonTwo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleproductFetch } from "../../../Backend/Redux/ProductSlice";
import MarginWrapper from "../../../common/MarginWrapper";
import slugify from 'slugify';

const NewArrivals = () => {
  const [newlyAddedProducts, setNewlyAddedProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gotosingleProduct = async (id) => {
    try {
      const stringid = String(id)
      const singleproductdata = await config.getsingleProductData (stringid)
      if (singleproductdata) {
        const slug = slugify(singleproductdata.title, { replacement: '-', remove: 'or' });
        dispatch(singleproductFetch(singleproductdata)); 
        navigate(`/Laddu-Gopal-dress-decoration-items/shop-now/${singleproductdata.category}/${slug}/${id}`)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const getNewlyAddedProducts = async () => {
    try {
      const productsData = await config.getnewlyAddedProducts();
      if (productsData && productsData.length > 0) {
        setNewlyAddedProducts(productsData);
      } else {
        console.error("Error: No products data received");
      }
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };

  useEffect(() => {
    getNewlyAddedProducts();
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <MarginWrapper>
        <div className="h4 text-center mt-20 sm:mt-24 md:mt-28 lg:mt-36 xl:mt-44 ">
          New Arrivals
        </div>
        <div className="max-w-8xl mx-auto py-8">
          <Slider {...settings}>
            {newlyAddedProducts.map((product) => (
              <div key={product.id} className="p-4 ">
                <div className="flex flex-col items-center">
                  {/* Image Container */}
                  <div className="w-full h-96 bg-olive rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => {gotosingleProduct(product.id)}}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="mt-4 flex flex-col  justify-between min-h-[85px] w-full">
                    <div className="text-lg  text-gray-800  line-clamp-2">
                      {product.title}
                    </div>

                    {
             product.discountedPrice ? (
            <div className='2xl:w-96 lg:w-72 md:w-60 sm:w-52 w-40 flex justify-between'>
            <div className='flex gap-2'>
            <p className=''> ₹ {product.discountedPrice}</p>
            <s> {product.price} </s>
            </div>
            <p className='text-blue-700'> On Sale </p> 
            </div>
          ) : (
            <p> ₹ {product.price} </p> 
          )
        }
                    {/* <div className="text-base font-light text-gray-700 mt-2">
                      {product.isDiscount === "yes" && product.discountedPrice
                        ? `Discounted: ₹${product.discountedPrice}`
                        : `₹${product.price}`}
                    </div> */}
                    {/* <div className="mt-4">
                      <ButtonTwo
                        text="Buy this"
                        onClick={() => gotosingleProduct(product.id)}
                      />
                    </div> */}
                  </div>
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
