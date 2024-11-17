// "use client"

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import config from '../../../Backend/Appwrite/config'

// // Sample data for the carousel
// // const featuredProducts = [
// //   {
// //     id: 1,
// //     image: 'https://images.pexels.com/photos/6563393/pexels-photo-6563393.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     title: 'Beautiful Landscapes',
// //     description: 'Explore stunning vistas from around the world.',
// //   },
// //   {
// //     id: 2,
// //     image: 'https://images.pexels.com/photos/6563393/pexels-photo-6563393.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     title: 'Urban Architecture',
// //     description: 'Discover the marvels of modern city design.',
// //   },
// //   {
// //     id: 3,
// //     image: 'https://images.pexels.com/photos/6563393/pexels-photo-6563393.jpeg?auto=compress&cs=tinysrgb&w=600',
// //     title: 'Natural Wonders',
// //     description: 'Witness the breathtaking beauty of nature.',
// //   },
// // ]

// export default function FeatureProductCarousal() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [featuredProducts, setfeaturedProducts] = useState([])

//   const getFeaturedProducts = async () => {
//     try {
//       const productsdata =await config.getfeaturedProducts()
//       if (productsdata) {
//         setfeaturedProducts(productsdata)
//       } else {
//         console.log(error);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getFeaturedProducts()
//     // console.log(featuredProducts);
//   }, [])

//   // Automatically change slide every 5 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length)
//     }, 5000)

//     // Clear the interval when the component unmounts
//     return () => clearInterval(intervalId)
//   }, [])

//   return (
//     // <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//     //   <div className="relative flex items-center justify-center p-8">
//     //     <AnimatePresence mode="wait">
//     //       <motion.div
//     //         key={featuredProducts[currentIndex].id}
//     //         initial={{ opacity: 0, scale: 0.95 }}
//     //         animate={{ opacity: 1, scale: 1 }}
//     //         exit={{ opacity: 0, scale: 0.95 }}
//     //         transition={{ duration: 0.5 }}
//     //         className="relative w-full h-96 md:w-3/4 overflow-hidden rounded-lg shadow-lg"
//     //       >
//     //         <img
//     //           src={featuredProducts[currentIndex].image}
//     //           alt={featuredProducts[currentIndex].title}
//     //           className="w-full h-full object-cover"
//     //         />
//     //         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6 text-center">
//     //           <h2 className="h4 mb-2 text-[#C1BF96]">{featuredProducts[currentIndex].title}</h2>
//     //           <p className="p2 text-white">{featuredProducts[currentIndex].description}</p>
//     //         </div>
//     //       </motion.div>
//     //     </AnimatePresence>
//     //   </div>
//     // </div>
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//       <div className="relative flex items-center justify-center p-8">
//         <AnimatePresence mode="wait">
//           {featuredProducts.length > 0 && (
//             <motion.div
//               key={featuredProducts[currentIndex].id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.5 }}
//               className="relative w-full h-96 md:w-3/4 overflow-hidden rounded-lg shadow-lg"
//             >
//               <img
//                 src={featuredProducts[currentIndex].images[0]} // Use the first image
//                 alt={featuredProducts[currentIndex].title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6 text-center">
//                 <h2 className="h4 mb-2 text-[#C1BF96]">
//                   {featuredProducts[currentIndex].title}
//                 </h2>
//                 <p className="p2 text-white">
//                   Price: ₹{featuredProducts[currentIndex].price}
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       {/* Pagination indicators */}
//       <div className="flex justify-center mt-4">
//         {featuredProducts.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 mx-1 rounded-full ${
//               index === currentIndex ? "bg-[#C1BF96]" : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>

//   )
// }

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
      <div className="relative flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          {featuredProducts.length > 0 && featuredProducts[currentIndex]?.images?.length > 0 && (
            <motion.div
              key={featuredProducts[currentIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-96 md:w-3/4 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={featuredProducts[currentIndex].images[0]} // Use the first image
                alt={featuredProducts[currentIndex].title || "Product Image"}
                className="w-full h-full object-cover"
              />
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
      {/* Pagination indicators */}
      {/* <div className="flex justify-center mt-4">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-[#C1BF96]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div> */}
    </div>
  );
}

