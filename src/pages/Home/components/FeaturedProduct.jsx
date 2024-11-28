import React, { useEffect, useState } from "react";
import FeatureProductCarousal from "./FeatureProductCarousal";
import ButtonTwo from '../../../components/ButtonTwo';
import { Link } from "react-router-dom";
import Aos from "aos";

const FeaturedProduct = () => {
  const [aosAnimation, setAosAnimation] = useState("fade-left");

  useEffect(() => {
    // Detect screen width and set the appropriate animation
    const updateAnimation = () => {
      if (window.innerWidth <= 768) {
        // Mobile screens
        setAosAnimation("fade-up");
      } else {
        // Larger screens
        setAosAnimation("fade-left");
      }
    };

    updateAnimation(); // Initial check
    window.addEventListener("resize", updateAnimation); // Update on screen resize

    Aos.init({
      duration: 500,
      easing: "ease-in",
      once: true,
    });

    return () => {
      window.removeEventListener("resize", updateAnimation); // Cleanup event listener
    };
  }, []);

  return (
    <div className="bg-[#C4C197] text-dark sm:px-16">
      <div className="h4 pt-4 pb-8 text-center px-3">Our Featured Product</div>
      <div className="sm:flex sm:justify-between">
        <div className="sm:flex sm:items-center sm:justify-center">
          <div data-aos={aosAnimation}>
            <section className="h3 pb-6 flex justify-center text-center">
              People Love These!
            </section>
            <section className="pb-1 p1 text-center hidden sm:block">Our Best Products</section>
            <section className="flex justify-center">
              <div className="mt-4 lg:mt-8 md:mt-6 hidden sm:block">
                <Link to="/products">
                  <ButtonTwo text="Shop Now" />
                </Link>
              </div>
            </section>
          </div>
        </div>
        <div data-aos={aosAnimation} className="">
          <FeatureProductCarousal />
        </div>
        <section className="flex justify-center">
          <div className="mt-4 lg:mt-8 md:mt-6 block sm:hidden pb-5">
            <Link to="/products">
              <ButtonTwo text="Shop Now" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedProduct;
