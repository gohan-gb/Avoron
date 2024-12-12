import React,{useEffect} from 'react'
import MarginWrapper from '../../../common/MarginWrapper';
import Button from '../../../components/Button';
import {Link} from 'react-router-dom'
import Aos from 'aos';
import pic1 from '../../../../public/assets/personal-branding.png'
import pic2 from '../../../../public/assets/personal-branding-(1).png'
import pic3 from '../../../../public/assets/personal-branding-(2).png'


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
        <h1 data-aos='fade-up' className='h3 text-center pt-16 pb-16'>Why Choose Avoron</h1>
        <p data-aos='fade-up' className='text-center p1 pb-16 w-[75%] sm:w-[50%]'> At Avoron, we are dedicated to offering a curated selection of goddess items that embody elegance, beauty, and empowerment. Every product is chosen to reflect our commitment to quality and style.</p>
        
        <div data-aos='fade-up' className='pb-16  flex flex-wrap gap-10 sm:gap-20 justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
            <section className='w-fit'>
              <img src = {pic1} className='w-20 h-20'></img>
            </section>
            <h4> Authenticity </h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <section className='w-fit'>
            <img src = {pic3} className='w-20 h-20'></img>
            </section>
            <h4> Uniqueness </h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <section className='w-fit'>
            <img src = {pic2} className='w-20 h-20'></img>
            </section>
            <h4> Affordability </h4>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <section className='w-fit'>
            <img src = '/assets/delivcol.svg' className='w-20 h-20'></img>
            </section>
            <h4> World-wide Delivery </h4>
            </div>
        </div>
        
        <p  data-aos='fade-in' className='text-center w-[75%] sm:w-[50%] pb-16'>
        Avoron is your go-to destination for embracing the goddess within. Our passion for exquisite fashion and divine beauty drives us to provide an unparalleled shopping experience. Join us in celebrating the essence of femininity.
        </p>

        <Link to = '/about'>
          <Button data-aos='fade-in' text='Discover more '/>
        </Link>
        </div>
        </MarginWrapper>
    </div>
    </>
  )
}

export default MySiteMission