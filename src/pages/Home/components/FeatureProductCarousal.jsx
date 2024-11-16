"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Sample data for the carousel
const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/6563393/pexels-photo-6563393.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Beautiful Landscapes',
    description: 'Explore stunning vistas from around the world.',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6563393/pexels-photo-6563393.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Urban Architecture',
    description: 'Discover the marvels of modern city design.',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/6563393/pexels-photo-6563393.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Natural Wonders',
    description: 'Witness the breathtaking beauty of nature.',
  },
]

export default function FeatureProductCarousal() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="relative flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-96 md:w-3/4 overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6 text-center">
              <h2 className="h4 mb-2 text-[#C1BF96]">{slides[currentIndex].title}</h2>
              <p className="p2 text-white">{slides[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
