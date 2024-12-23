"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../../../Backend/Appwrite/config";

export default function FeatureProductCarousal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredProducts, setfeaturedProducts] = useState([]);

  const getFeaturedProducts = async () => {
    try {
      const productsdata = await config.getfeaturedProducts();
      if (productsdata) {
        setfeaturedProducts(productsdata);
      } else {
        console.error("Error: No products data received");
      }
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        featuredProducts.length > 0
          ? (prevIndex + 1) % featuredProducts.length
          : 0
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [featuredProducts]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="relative flex items-center justify-center pt-8 pb-5 px-5 sm:px-0">
        <AnimatePresence mode="wait">
          {featuredProducts.length > 0 && featuredProducts[currentIndex]?.images?.length > 0 && (
            <motion.div
              key={featuredProducts[currentIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full sm:h-96 md:w-full overflow-hidden rounded-lg shadow-lg"
            >
              <div
  className="w-full h-full object-cover"
>
  <img
    src={featuredProducts[currentIndex].images[0]} // Use the first image
    alt={featuredProducts[currentIndex].title || "Product Image"}
    className="w-[500px] h-[500px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[500px] xl:h-[500px] overflow-hidden"
  />
</div>
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="h4 mb-2 text-[#C1BF96]">
                  {featuredProducts[currentIndex].title}
                </h2>
                <p className="p2 text-white">
                  Price: ₹{featuredProducts[currentIndex].price}
                </p>
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

