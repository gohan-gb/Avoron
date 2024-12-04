import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimateImage = () => {
  // Animation variants
  const variants = {
    fromLeft: {
      hidden: { x: -200, y: 50, opacity: 0 },
      visible: { x: 0, y: 0, opacity: 1 },
    },
    fromRight: {
      hidden: { x: 200, y: 50, opacity: 0 },
      visible: { x: 0, y: 0, opacity: 1 },
    },
    fromBottom: {
      hidden: { y: 200, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
  };

  // Ref and in-view detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={sectionRef}
      className="flex justify-center items-center h-screen relative"
    >
      {/* Two images from the left */}
      <motion.img
         src="/assets/krishna3.webp"
        alt="From Left 1"
        className="absolute rounded-md w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"
        variants={variants.fromLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0 }}
        style={{ top: "25%", left: "10%" }}
      />
      <motion.img
       src="/assets/krishna2.webp"
        alt="From Left 2"
        className="absolute rounded-md w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"
        variants={variants.fromLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ top: "50%", left: "10%" }}
      />

      {/* One image from the bottom (centered horizontally and vertically) */}
      <motion.img
       src="/assets/krishna1.webp"
        alt="From Bottom"
        className="absolute hidden lg:block rounded-md w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 "
        variants={variants.fromBottom}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          bottom: "50%", // Center vertically
          left: "50%",  // Center horizontally
          transform: "translate(-50%, 50%)", // Center image both ways
        }}
      />
       <motion.img
        src="/assets/krishna3.webp"
        alt="From Bottom"
        className="absolute hidden lg:block rounded-md w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"
        variants={variants.fromBottom}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          top: "50%", // Center vertically
          right: "50%",  // Center horizontally
          transform: "translate(-50%, 50%)", // Center image both ways
          
        }}
      />



      {/* Two images from the right */}
      <motion.img
        src="/assets/krishna1.webp"
        alt="From Right 1"
        className="absolute rounded-md w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"
        variants={variants.fromRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.9 }}
        style={{ top: "25%", right: "10%" }}
      />
      <motion.img
         src="/assets/krishna2.webp"
        alt="From Right 2"
        className="absolute rounded-md w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"
        variants={variants.fromRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ top: "50%", right: "10%" }}
      />
    </div>
  );
};

export default AnimateImage;
