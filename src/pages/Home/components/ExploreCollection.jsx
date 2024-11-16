import React, {useEffect, useState} from 'react';
import {productFetch} from "../../../Backend/Redux/ProductSlice"
import config from '../../../Backend/Appwrite/config';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'



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
      <div className='mb-8 mt-8 text-center h4'>Explore Collection</div>
      <div className="flex flex-wrap justify-center items-center gap-8 p-4">
      
        <div className="group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[300px] md:h-[350px] lg:h-[400px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden relative transform transition-transform duration-500 hover:scale-105"
        onClick={() => getProductsforthiscategory("category", categories[0])}>
          <img
            src="https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="oxidized-jewellery"
            className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-yellow h4">{categories[0]}</p>
          </div>
        </div>

        <div className="group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[300px] md:h-[350px] lg:h-[400px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden relative transform transition-transform duration-500 hover:scale-105"
        onClick={() => getProductsforthiscategory("category", categories[1])}>
          <img
            src="https://images.unsplash.com/photo-1659708701940-e60893ef03d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="accessories"
            className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-yellow h4">{categories[1]}</p>
          </div>
        </div>

        <div className="group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[300px] md:h-[350px] lg:h-[400px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden relative transform transition-transform duration-500 hover:scale-105"
        onClick={() => getProductsforthiscategory("category", categories[2])}>
          <img
            src="https://images.unsplash.com/photo-1676696706907-0e04665b80bd?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sarees for goddess & women"
            className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-yellow h4">{categories[2]}</p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ExploreCollection;

