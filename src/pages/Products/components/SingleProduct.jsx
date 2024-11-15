import React, { useState } from "react";
import MarginWrapper from "../../../common/MarginWrapper";
import Button from "../../../components/Button";

const SingleProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Open first accordion by default

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [quantity, setQuantity] = useState(1); // Set your default quantity here

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <>
      <div className="mt-36 mb-16 flex justify-center items-start  ">
        <MarginWrapper>
          <h3 className="text-dark text-left mb-16">
            {" "}
            Products / Product's Name{" "}
          </h3>

          <div className="flex lg:gap-16 lg:flex-row flex-col">
            <div>
              <img
                src="https://images.pexels.com/photos/28347073/pexels-photo-28347073/free-photo-of-ornate-gold-bridal-jewelry-set-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-[520px] mb-8"
                alt="product"
              />
              <p className="w-[520px] lg:block hidden text-dark">
                {" "}
                I'm a product description. I'm a great place to add more details
                about your product such as sizing, material, care instructions
                and cleaning instructions.{" "}
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <h2 className="h4 text-dark mb-8"> Product Name </h2>
              <p className="w-[520px] mb-8 block lg:hidden text-dark">
                {" "}
                I'm a product description. I'm a great place to add more details
                about your product such as sizing, material, care instructions
                and cleaning instructions.{" "}
              </p>

              <h3 className="text-dark mb-8 p1"> Product Price </h3>
              <label className="text-dark mb-2" htmlFor="">
                Quantity
              </label>
              <input className="mb-8 w-16 h-12 p-2 border text-dark" type="number" defaultValue={quantity}/>
              <div className="mb-8"> 
                <Button text="Order via Whatsapp" />
              </div>

              <div className="flex flex-col space-y-2 p-4">
      {/* Product Info Accordion */}
      <div className="border-b-2 border-dark ">
        <button
          className="flex justify-between w-full p-4  "
          onClick={() => toggleAccordion(0)}
        >
          <span>PRODUCT INFO</span>
          <span>{activeIndex === 0 ? "-" : "+"}</span>
        </button>
        {activeIndex === 0 && (
          <div className="p-4 ">
            <p>
              {/* {product?.productInfo} */}
              product information
              </p>
          </div>
        )}
      </div>

      {/* Refund Policy Accordion */}
      <div className="border-b-2 border-dark">
        <button
          className="flex justify-between w-full p-4 "
          onClick={() => toggleAccordion(1)}
        >
          <span>REFUND POLICY</span>
          <span>{activeIndex === 1 ? "-" : "+"}</span>
        </button>
        {activeIndex === 1 && (
          <div className="p-4 ">
            <p>
              {/* {product?.refundPolicy} */} 
              refund policy
              </p>
          </div>
        )}
      </div>

      {/* Shipping Time Accordion */}
      <div className="">
        <button
          className="flex justify-between w-full p-4 "
          onClick={() => toggleAccordion(2)}
        >
          <span>SHIPPING TIME</span>
          <span>{activeIndex === 2 ? "-" : "+"}</span>
        </button>
        {activeIndex === 2 && (
          <div className="p-4 ">
            <p>
              {/* {product?.shippingTime} */}
              shippingtime
              </p>
          </div>
        )}
      </div>
    </div>

              {/* <div className="flex flex-col space-y-2 text-dark">
                {accordionData.map((item, index) => (
                  <div key={index} className="border rounded-lg lg:w-72 w-[520px]">
                    <button
                      className="flex justify-between w-full p-4 "
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{'product description'}</span>
                      <span>{activeIndex === index ? "-" : "+"}</span>
                    </button>
                    {activeIndex === index && (
                      <div className="p-4 ">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </MarginWrapper>

        {/*  */}
      </div>
    </>
  );
};

export default SingleProduct;
