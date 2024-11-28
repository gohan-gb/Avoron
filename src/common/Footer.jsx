import React, {useState, useEffect} from 'react'
import MarginWrapper from './MarginWrapper'
import { Link } from 'react-router-dom'
import config from '../Backend/Appwrite/config';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {productFetch} from "../Backend/Redux/ProductSlice";


const Footer = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const allcategory = async () => {
    try {
      const categories = await config.getAllCategories()
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchCategories = async () => {
      await allcategory();
    };
    fetchCategories();
  }, []);

  const getProductsforthiscategory = async (category, fetchedCategory) => {
    try {
      const productsdata = await config.getProducts(category, fetchedCategory)
      dispatch(productFetch(productsdata));
      navigate("/products", { state: { categoryName: fetchedCategory } });

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <footer className='bg-yellow  text-dark  '>
      <div className='w-full  border-dark border-b-[1px] border-t-[1px] border-solid'>
      <MarginWrapper>
      <div className=' flex lg:flex-row flex-col lg:justify-between lg:items-center justify-start items-start py-16 px-8'>
        <div>
          <h2 className='sm:h3 h4  mb-8'>
            Stay Inspired and <br /> Empowered
          </h2>
          <p className='lg:mb-0 mb-12'>
          Receive the latest trends and updates on goddess fashion, <br /> empowering accessories, and exclusive offers
          </p>
        </div>
        <div className='flex justify-between items-start sm:gap-24 sm:w-auto w-full mb-8'>
        <ul className='flex flex-col gap-3'>
          <Link to={'/'}><li className='cursor-pointer'>Home</li></Link>
          <Link to={'/products'}><li className='cursor-pointer'>Shop All</li></Link>
          <Link to={'/about'}><li className='cursor-pointer'>Our mission</li></Link>
          <Link to={'/contact'}><li className='cursor-pointer'>Contact</li></Link>
          <Link to={'/'}><li className='cursor-pointer'>Return Policy</li></Link>
          
        </ul>
        <ul className='flex flex-col gap-3'>
          {/* <li className='cursor-pointer'>Dress</li>
          <li className='cursor-pointer'>Hair</li>
          <li className='cursor-pointer'>Crowns</li>
          <li className='cursor-pointer'>Sale</li> */}
          {categories.map((category, index) => (
                <li className="cursor-pointer" key={index} onClick={() => getProductsforthiscategory("category", categories[index])}>
                  {category}
                </li>
          ))}
          <li className='cursor-pointer'>Sale</li>
          <li className='cursor-pointer'>Featured Products</li>
        </ul>
        </div>
        <div className='block sm:hidden'>
          <ul className='flex flex-col gap-3 underline'>
            <li className='cursor-pointer'>Facebook</li>
            <li className='cursor-pointer'>Instagram</li>
            <li className='cursor-pointer'>YouTube</li>
          </ul>
        </div>
      </div>

      
      </MarginWrapper>
      </div>
      <MarginWrapper>
        <div className='flex justify-between items-center pt-8 pb-16 px-8'>
        <div className=''>
        © 2023 by My Site. All Rights Reserved.
        </div>
        <div className='hidden sm:block'>
          <ul className='flex flex-row gap-3 underline'>
            <li className='cursor-pointer'>Facebook</li>
            <li className='cursor-pointer'>Instagram</li>
            <li className='cursor-pointer'>YouTube</li>
          </ul>
        </div>
        </div>
      </MarginWrapper>
    </footer>
  )
}

export default Footer