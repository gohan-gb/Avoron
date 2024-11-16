import React from 'react'
import HeroSection from './HeroSection'
import MarginWrapper from '../../common/MarginWrapper'
import NewArrivals from './NewArrivals'
import ExploreCollection from './ExploreCollection'
import FeatureProduct from './FeaturedProduct'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
    <HeroSection />
     <MarginWrapper >
      <NewArrivals />
      <ExploreCollection/>
     </MarginWrapper>
     <FeatureProduct />
     <Testimonial/>
    </div>
  )
}

export default Home