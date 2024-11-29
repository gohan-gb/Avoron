import React, {useEffect, useState} from 'react';
import {productFetch} from "../../../Backend/Redux/ProductSlice"
import config from '../../../Backend/Appwrite/config';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Button from '../../../components/Button';
import MarginWrapper from '../../../common/MarginWrapper';

const ExploreCollection = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    <div>
      <MarginWrapper >
      <div className='mb-8 mt-8 text-center h4'>Explore Collection</div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mb-24">

          <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="oxidized-jewellery"
              className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-yellow h4">Jewellery</p>
            </div>
            <div className="absolute bottom-0 inset-x-0 mb-5 flex items-center justify-center"
            onClick={() => getProductsforthiscategory("category", categories[0])}>
              <Button  text='Explore More' />
            </div>
          </div>

          <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1659708701940-e60893ef03d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Accessory"
              className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-yellow h4">Accessory</p>
            </div>

            <div className="absolute bottom-0 inset-x-0 mb-5 flex items-center justify-center"
            onClick={() => getProductsforthiscategory("category", categories[2])}>
              <Button  text='Explore More' />
            </div>
          </div>

          <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1676696706907-0e04665b80bd?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sarees"
              className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-yellow h4">Sarees</p>
            </div>

            <div className="absolute bottom-0 inset-x-0 mb-5 flex items-center justify-center"
            onClick={() => getProductsforthiscategory("category", categories[1])}>
              <Button  text='Explore More'/>
            </div>
          </div>
          
        </div>
        </MarginWrapper>
    </div>
  );
};

export default ExploreCollection;
