import React from 'react'
import HeroSection from './HeroSection'
import MarginWrapper from '../../common/MarginWrapper'
import NewArrivals from './NewArrivals'
import ExploreCollection from './ExploreCollection'
import FeatureProductCarousal from './FeatureProductCarousal'
import FeatureProduct from './FeaturedProduct'

const Home = () => {
  return (
    <div>
    <HeroSection />
     <MarginWrapper >
      <NewArrivals />
      <ExploreCollection/>
     </MarginWrapper>
     <FeatureProduct />
    </div>
  )
}

export default Home