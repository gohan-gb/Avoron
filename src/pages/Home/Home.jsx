import React from 'react'
import HeroSection from './HeroSection'
import MarginWrapper from '../../common/MarginWrapper'
import NewArrivals from './NewArrivals'
import ExploreCollection from './ExploreCollection'


const Home = () => {
  return (
    <div>
    <HeroSection />
     <MarginWrapper >
      <NewArrivals />
      <ExploreCollection/>
     </MarginWrapper>
    </div>
  )
}

export default Home