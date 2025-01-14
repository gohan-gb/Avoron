import React,{useEffect} from 'react'
import Button from '../../../components/Button'
import Aos from 'aos';
import MarginWrapper from '../../../common/MarginWrapper';
import { Link } from "react-router-dom";

const WeekendSale = () => {

  useEffect(() => {
    Aos.init({
      duration: 500, 
      easing: "ease-in", 
      once: false, 
    });
  }, []);
  
  return (
    <div className='w-full overflow-hidden'>
    <MarginWrapper >
    <div className='mt-24'>
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[900px] bg-black rounded-s-xl rounded-e-xl overflow-hidden group">
  <img
    src="assets/krishna-weekend.webp"
    alt="salephotos"
    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 brightness-75"
  />
  <div data-aos='fade-in' className="absolute inset-0 flex flex-col items-center justify-center text-center text-wrap px-5">
    <h2 className="h4 text-light">Happening Now !!</h2>
    <h1  className="text-6xl sm:text-6xl md:text-6xl lg:text-custom-lg xl:text-custom-xl mt-8 mb-8 text-yellow2">Weekend Sale</h1>
    <Link to="/Laddu-Gopal-dress-decoration-items/shop-now/collections">
      <Button text="Shop Now" />
    </Link>
  </div>
</div>

    </div>
    </MarginWrapper>
    </div>
  )
}

export default WeekendSale