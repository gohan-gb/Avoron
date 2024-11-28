import React, { useEffect, useState } from "react";
import FeatureProductCarousal from "./FeatureProductCarousal";
import Button from "../../../components/Button";
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
    <div className="bg-[#C4C197] text-dark">
      <div className="h4 flex justify-center items-center pt-4 pb-8">Our Featured Product</div>
      <div className="sm:flex sm:justify-between">
        <div className="sm:flex sm:items-center">
          <div data-aos={aosAnimation}>
            <section className="h3 pb-6 flex justify-center sm:pl-20 pl-12">
              People Love These!
            </section>
            <section className="pb-1 p1 flex justify-center">Our Best Products</section>
            <section className="flex justify-center">
              <div className="mt-4 lg:mt-8 md:mt-6">
                <Link to="/products">
                  <Button text="Shop Now" />
                </Link>
              </div>
            </section>
          </div>
        </div>
        <div data-aos={aosAnimation} className="">
          <FeatureProductCarousal />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
