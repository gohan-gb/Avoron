import React,{ useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "assets/krishna1.webp",
    text: "Experience Luxury",
  },
  {
    src: "assets/krishna2.webp",
    text: "Find Your Adventure",
  },
  {
    src: "assets/krishna3.webp",
    text: "Create Lasting Memories",
  },
];

export default function AboutCarousal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        images.length > 0
          ? (prevIndex + 1) % images.length
          : 0
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="relative flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          {images.length > 0 && (
            <motion.div
              key={images[currentIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-96 md:w-full overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={images[currentIndex].src} // Use the first image
                alt="Product Image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

