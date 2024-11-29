import React from 'react'
import HeroSection from './components/HeroSection'
import NewArrivals from './components/NewArrivals'
import ExploreCollection from './components/ExploreCollection'
import FeatureProduct from './components/FeaturedProduct'
import MySiteMission from './components/MySiteMission'

import Testimonial from './components/Testimonial'
import WeekendSale from './components/WeekendSale'
const Home = () => {
  return (
    <div>
    <HeroSection />
    <NewArrivals />
    <ExploreCollection />
      <FeatureProduct />
     <MySiteMission />
      <WeekendSale />
      <Testimonial />
    </div>
  )
}

export default Home