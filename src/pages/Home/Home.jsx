import React from 'react'
import HeroSection from './components/HeroSection'
import MarginWrapper from '../../common/MarginWrapper'
import NewArrivals from './components/NewArrivals'
import ExploreCollection from './components/ExploreCollection'
import FeatureProduct from './components/FeaturedProduct'
import MySiteMission from './components/MySiteMission'
import WeekendSale from './components/WeekendSale'
import Testimonial from './components/Testimonial'
const Home = () => {
  return (
    <div>
    <HeroSection />
    <NewArrivals />
     <MarginWrapper >
      <ExploreCollection/>
     </MarginWrapper>
     <FeatureProduct />
     <MySiteMission />
      <MarginWrapper >
        <WeekendSale/>
      </MarginWrapper>
      <Testimonial />
    </div>
  )
}

export default Home