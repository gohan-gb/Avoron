import React from 'react'
import FeatureProductCarousal from './FeatureProductCarousal'

const FeaturedProduct = () => {
  return (
    <div className='bg-[#C4C197] text-dark'>
        <div className='h4 flex justify-center items-center pt-4 pb-8'>Our Featured Product</div>
        <div className='sm:flex sm:justify-between'>
            <div className='sm:flex sm:items-center'>
              <div>
                <section className='h3 pb-6 flex justify-center sm:pl-20 pl-12'>People Love These!</section>
                <section className='pb-8 p1 flex justify-center'>Our Best Products</section>
                <section className='flex justify-center'>
                  <button className='pt-22'>Shop Now</button>
                </section>
              </div>
            </div>
            <div className=''>
              <FeatureProductCarousal />
            </div>
        </div>
    </div>
  )
}

export default FeaturedProduct