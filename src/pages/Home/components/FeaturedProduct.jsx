import React, { useEffect, useState } from "react";
import FeatureProductCarousal from "./FeatureProductCarousal";
import ButtonTwo from "../../../components/ButtonTwo";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturedProduct = () => {
  const [aosAnimation, setAosAnimation] = useState("fade-up");

  useEffect(() => {
    const updateAnimation = () => {
<<<<<<< HEAD
      setAosAnimation(window.innerWidth <= 768 ? "fade-up" : "fade-left");
=======
      if (window.innerWidth <= 768) {
        // Mobile screens
        setAosAnimation("fade-up");
      } else {
        // Larger screens
        setAosAnimation("fade-up");
      }
>>>>>>> main
    };

    updateAnimation(); // Initial check
    window.addEventListener("resize", updateAnimation);

    Aos.init({ duration: 500, easing: "ease-in", once: true });

    return () => window.removeEventListener("resize", updateAnimation);
  }, []);

  return (
    <div className="bg-[#C4C197] text-dark sm:px-16">
      <h4 className="h4 pt-4 pb-8 text-center px-3">Our Featured Product</h4>

      <div className="sm:flex sm:justify-between sm:items-center">
        {/* Text Section */}
        <div data-aos={aosAnimation} className="sm:w-1/2 text-center">
          <h3 className="pb-6 h3">People Love These!</h3>
          <p className="pb-4  hidden sm:block">Our Best Products</p>
          <div className="mt-4 lg:mt-8 md:mt-6">
            <Link to="/products">
              <ButtonTwo text="Shop Now" />
            </Link>
          </div>
        </div>

        {/* Carousel Section */}
        <div data-aos={aosAnimation} className="sm:w-1/2">
          <FeatureProductCarousal />
        </div>
      </div>

      {/* Mobile Button */}
      <div className="mt-4 lg:mt-8 md:mt-6 block sm:hidden pb-5">
        <Link to="/products">
          <ButtonTwo text="Shop Now" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
