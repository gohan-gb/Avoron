import React from 'react'
import { LuIndianRupee } from "react-icons/lu";


const ProductCard = ( { 
    title='Lorem ipsum dolor sit', 
    price=499, 
    image='https://images.pexels.com/photos/7276943/pexels-photo-7276943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  } ) => {
  return (
    <article className='pb-4 2xl:w-96 lg:w-72 md:w-60 sm:w-52 w-40'>
        <div className='flex flex-col justify-start items-start'>
        <img src={image} 
        className='cursor-pointer 2xl:w-96 lg:w-72 md:w-60 sm:w-52 w-40  2xl:h-96 lg:h-72 md:h-60 sm:h-52  h-40 object-cover pb-2 rounded-3xl'
        alt="product" />
        <h2 className='p2 pb-1'> {title.length > 40 ? (title.slice(0,40) + '...') : title }  </h2>
        <div className='flex gap-2'>
        <p>₹ {price}</p>
         <s className='text-gray-600'>{Math.round(price * 1.1) }</s> 
        </div>
    </div>
    </article>
  )
}

export default ProductCard