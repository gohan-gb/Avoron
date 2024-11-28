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
        src="https://images.unsplash.com/photo-1561828995-aa79a2db86dd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="From Left 1"
        className="absolute rounded-md w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"
        variants={variants.fromLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0 }}
        style={{ top: "25%", left: "10%" }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        src="https://images.unsplash.com/photo-1590166223826-12dee1677420?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        src="https://images.unsplash.com/photo-1617074172287-f364b77c1e77?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        src="https://images.unsplash.com/photo-1599458349289-18f0ee82e6ed?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="From Right 1"
        className="absolute rounded-md w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"
        variants={variants.fromRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.9 }}
        style={{ top: "25%", right: "10%" }}
      />
      <motion.img
        src="https://images.unsplash.com/photo-1611653842967-39eb011b2ca3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
