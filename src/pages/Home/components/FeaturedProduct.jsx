import React, { useEffect, useState } from "react";
import FeatureProductCarousal from "./FeatureProductCarousal";
import ButtonTwo from "../../../components/ButtonTwo";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import MarginWrapper from "../../../common/MarginWrapper";
const FeaturedProduct = () => {

  useEffect(() => {

    Aos.init({ duration: 500, easing: "ease-in", once: true });

  }, []);

  return (
    <div className="bg-[#C4C197] text-dark sm:px-16">
      <MarginWrapper >
      <h4 className="h4 pt-4 pb-8 text-center px-3">Our Featured Product</h4>

      <div className="sm:flex sm:justify-between sm:items-center">
        <div data-aos='fade-up' className="sm:w-1/2 text-center">
          <h3 className="pb-6 h3">People Love These!</h3>
          <p className="pb-4  hidden sm:block">Our Best Products</p>
          <div className="mt-4 lg:mt-8 md:mt-6 hidden sm:block">
            <Link to="/Laddu-Gopal-dress-decoration-items/shop-now">
              <ButtonTwo text="Shop Now" />
            </Link>
          </div>
        </div>

        <div data-aos='fade-up' >
          <FeatureProductCarousal />
        </div>
      </div>

      <div className="mt-4 lg:mt-8 md:mt-6  sm:hidden pb-5 flex justify-center items-center">
        <Link to="/Laddu-Gopal-dress-decoration-items/shop-now">
          <ButtonTwo text="Shop Now" />
        </Link>
      </div>
      </MarginWrapper>
    </div>
  );
};

export default FeaturedProduct;
