import React from 'react'
import HeroSection from './HeroSection'
import MarginWrapper from '../../common/MarginWrapper'
import NewArrivals from './NewArrivals'
import ExploreCollection from './ExploreCollection'
import FeatureProduct from './FeaturedProduct'
import MySiteMission from './components/MySiteMission'

const Home = () => {
  return (
    <div>
    <HeroSection />
     <MarginWrapper >
      <NewArrivals />
      <ExploreCollection/>
     </MarginWrapper>
     <FeatureProduct />
     <MySiteMission />
    </div>
  )
}

export default Home