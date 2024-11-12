import React from 'react'
import MarginWrapper from './MarginWrapper'

const Footer = () => {
  return (
    <footer className='bg-yellow  text-dark  '>
      <div className='w-full  border-dark border-b-[1px] border-solid'>
      <MarginWrapper>
      <div className=' flex lg:flex-row flex-col lg:justify-between lg:items-center justify-start items-start py-16 px-8'>
        <div>
          <h2 className='h3 mb-8'>
            Stay Inspired and <br /> Empowered
          </h2>
          <p className='lg:mb-0 mb-12'>
          Receive the latest trends and updates on goddess fashion, <br /> empowering accessories, and exclusive offers
          </p>
        </div>
        <div className='flex justify-between items-start sm:gap-24 sm:w-auto w-full mb-8'>
        <ul className='flex flex-col gap-3'>
          <li>Home</li>
          <li>Shop All</li>
          <li>Our mission</li>
          <li>Contact</li>
          <li>Return Policy</li>
        </ul>
        <ul className='flex flex-col gap-3'>
          <li>Dress</li>
          <li>Hair</li>
          <li>Crowns</li>
          <li>Sale</li>
        </ul>
        </div>
        <div className='block sm:hidden'>
          <ul className='flex flex-col gap-3 underline'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      
      </MarginWrapper>
      </div>
      <MarginWrapper>
        <div className='flex justify-between items-center pt-8 pb-16 px-8'>
        <div className=''>
        © 2023 by My Site. All Rights Reserved.
        </div>
        <div className='hidden sm:block'>
          <ul className='flex flex-row gap-3 underline'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
        </div>
      </MarginWrapper>
    </footer>
  )
}

export default Footer