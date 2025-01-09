import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { singleproductFetch } from "../../../Backend/Redux/ProductSlice";
import appwriteService from "../../../Backend/Appwrite/config";
import MarginWrapper from "../../../common/MarginWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import parse from 'html-react-parser';
import ButtonTwo from "../../../components/ButtonTwo";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SingleProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.product.singleproductdata);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        const productData = await appwriteService.getsingleProductData(id);
        if (productData) {
          dispatch(singleproductFetch(productData));
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product data");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id, dispatch]);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleChange = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };

  const handleWhatsapp = () => {
    const message = `avoron.in Please order ${quantity} of ${singleProduct?.title} for me `;
    const whatsappUrl = `https://wa.me/+919851375776?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (isLoading) {
    return (
      <div className="mt-36 flex justify-center items-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error || !singleProduct || !singleProduct.images) {
    return (
      <div className="mt-36 flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error || "Product not found"}</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-36 mb-16 flex justify-center items-start">
        <MarginWrapper>
          <h3 className="text-dark text-left mb-16">
            Collections / {singleProduct?.title} / {singleProduct?.id}
          </h3>

          <div className="flex lg:gap-16 lg:flex-row flex-col">
            <div>
              <div className="mb-8">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#363020",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 sm:w-[600px] h-[300px] sm:h-[600px] w-[300px]"
                >
                  {singleProduct?.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Product view ${index + 1}`}
                        className="sm:w-[600px] h-[300px] sm:h-[600px] w-[300px] object-cover rounded-md p-1 border-solid border-brown border-2"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <p className="sm:w-[520px] w-80 lg:block hidden text-dark">
                {parse(singleProduct?.description || "")}
              </p>
            </div>

            <div className="flex flex-col justify-start">
              <h2 className="h4 text-dark mb-8">{singleProduct?.title}</h2>
              <p className="sm:w-[520px] w-80 mb-8 block lg:hidden text-dark">
                {parse(singleProduct?.description || "")}
              </p>

              {singleProduct?.discountedPrice ? (
                <div className="flex flex-col mb-8 text-dark gap-2">
                  <div className="flex gap-4">
                    <h3 className="text-dark p1 flex">₹ {singleProduct.discountedPrice}</h3>
                    <s className="p1">{singleProduct.price}</s>
                  </div>
                  <p className="text-xl text-blue-500">On sale !!!</p>
                </div>
              ) : (
                <h3 className="text-dark mb-8 p1 flex">₹ {singleProduct.price}</h3>
              )}

              <label className="text-dark mb-2" htmlFor="quantity">
                Quantity
              </label>
              <input
                className="mb-8 w-16 h-12 p-2 border text-dark"
                type="number"
                id="quantity"
                onChange={handleChange}
                value={quantity}
                min="1"
              />
              
              <div className="mb-8 w-fit rounded-full" onClick={handleWhatsapp}>
                <ButtonTwo text="Order via Whatsapp" />
              </div>

              <div className="flex flex-col space-y-2 p-4">
                {/* Product Info Accordion */}
                <div className="border-b-2 border-dark">
                  <button
                    className="flex justify-between w-full p-4"
                    onClick={() => toggleAccordion(0)}
                  >
                    <span>PRODUCT INFO</span>
                    <span>{activeIndex === 0 ? "-" : "+"}</span>
                  </button>
                  {activeIndex === 0 && (
                    <div className="p-4">
                      <p>
                        {singleProduct?.productInfo
                          ? parse(singleProduct.productInfo)
                          : "Please contact us over whatsapp for exact size or tell us your custom size"}
                      </p>
                    </div>
                  )}
                </div>

                {/* Refund Policy Accordion */}
                <div className="border-b-2 border-dark">
                  <button
                    className="flex justify-between w-full p-4"
                    onClick={() => toggleAccordion(1)}
                  >
                    <span>REFUND POLICY</span>
                    <span>{activeIndex === 1 ? "-" : "+"}</span>
                  </button>
                  {activeIndex === 1 && (
                    <div className="p-4">
                      <p>
                        If approved, the refund will be processed, and the amount will be credited to your original payment method within 7-10 business days.
                      </p>
                    </div>
                  )}
                </div>

                {/* Shipping Time Accordion */}
                <div className="">
                  <button
                    className="flex justify-between w-full p-4"
                    onClick={() => toggleAccordion(2)}
                  >
                    <span>SHIPPING TIME</span>
                    <span>{activeIndex === 2 ? "-" : "+"}</span>
                  </button>
                  {activeIndex === 2 && (
                    <div className="p-4">
                      <p>
                        We deliver throughout the world. Within India the delivery usually takes 5-7 business days.
                        For the case of outside India the delivery depends on your location.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MarginWrapper>
      </div>
    </>
  );
};

export default SingleProduct;