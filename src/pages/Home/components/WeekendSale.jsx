import React,{useEffect} from 'react'
import Button from '../../../components/Button'
import Aos from 'aos';
import MarginWrapper from '../../../common/MarginWrapper';

const WeekendSale = () => {

  useEffect(() => {
    Aos.init({
      duration: 500, 
      easing: "ease-in", 
      once: false, 
    });
  }, []);
  
  return (
    <MarginWrapper >
    <div className='mt-24'>
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[900px] bg-black rounded-s-xl rounded-e-xl overflow-hidden group">
  <img
    src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="salephotos"
    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
  />
  <div data-aos='fade-in' className="absolute inset-0 flex flex-col items-center justify-center text-center text-wrap px-5">
    <h2 className="h4 text-light">Happening Now !!</h2>
    <h1  className="text-6xl sm:text-6xl md:text-6xl lg:text-custom-lg xl:text-custom-xl mt-8 mb-8 text-yellow2">Weekend Sale</h1>
    <Button text="Shop Now" />
  </div>
</div>

    </div>
    </MarginWrapper>
  )
}

export default WeekendSale