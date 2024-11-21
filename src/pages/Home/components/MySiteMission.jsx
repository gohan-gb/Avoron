import React,{useEffect} from 'react'
import { CiBrightnessDown } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiUmbrella } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import MarginWrapper from '../../../common/MarginWrapper';
import Button from '../../../components/Button';
import Aos from 'aos';


const MySiteMission = () => {

  useEffect(() => {
    Aos.init({
      duration: 500, 
      easing: "ease-in", 
      once: false, 
    });
  }, []);

  return (
    <>
    <div className='bg-olive flex flex-col justify-center items-center text-dark pb-16 '>
        <MarginWrapper>
        <div className='flex flex-col justify-center items-center'>
        <h1 data-aos='fade-up' className='h3 text-center pt-16 pb-16'>My Site Mission</h1>
        <p data-aos='fade-up' className='text-center p1 pb-16 w-[75%] sm:w-[50%]'> At My Site, we are dedicated to offering a curated selection of goddess items that embody elegance, beauty, and empowerment. Every product is chosen to reflect our commitment to quality and style.</p>
        
        <div data-aos='fade-up' className='pb-16  flex flex-wrap gap-10 sm:gap-20 justify-center items-center'>
            <div className='flex flex-col justify-center items-center '>
            <section className='border-dark border-solid border-[1px] rounded-full w-fit'>
            <CiBrightnessDown size={'60px'}/>
            </section>
            <h4> Empowering </h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <section className='border-dark border-solid border-[1px] rounded-full w-fit'>
            <CiBrightnessDown size={'60px'}/>
            </section>
            <h4> Empowering </h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <section className='border-dark border-solid border-[1px] rounded-full w-fit'>
            <CiBrightnessDown size={'60px'}/>
            </section>
            <h4> Empowering </h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <section className='border-dark border-solid border-[1px] rounded-full w-fit'>
            <CiBrightnessDown size={'60px'}/>
            </section>
            <h4> Empowering </h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <section className='border-dark border-solid border-[1px] rounded-full w-fit'>
            <CiBrightnessDown size={'60px'}/>
            </section>
            <h4> Empowering </h4>
            </div>
        </div>
        
        <p  data-aos='fade-in' className='text-center w-[75%] sm:w-[50%] pb-16'>
        My Site is your go-to destination for embracing the goddess within. Our passion for exquisite fashion and divine beauty drives us to provide an unparalleled shopping experience. Join us in celebrating the essence of femininity and allure.
        </p>

        <Button data-aos='fade-in' text='Discover more '/>
        </div>
        </MarginWrapper>
    </div>
    </>
  )
}

export default MySiteMission