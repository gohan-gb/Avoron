import React, {useEffect, useState} from 'react';
import {productFetch} from "../../../Backend/Redux/ProductSlice"
import config from '../../../Backend/Appwrite/config';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Button from '../../../components/Button';
import MarginWrapper from '../../../common/MarginWrapper';
import pic3 from '../../../../public/assets/022-B.webp'
import pic2 from '../../../../public/assets/015-A.webp'
import pic1 from '../../../../public/assets/007.webp'


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
      navigate("/hindu-god-decoration-items/collections", { state: { categoryName: fetchedCategory } });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full overflow-hidden'>
      <MarginWrapper >
      <div className='mb-8 mt-8 text-center h4'>Explore Collection</div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mb-24">

          <div className="cursor-pointer relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden group"
          onClick={() => getProductsforthiscategory("category", categories[0])}>
            <img
              src={pic2}
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

          <div className="cursor-pointer relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden group"
          onClick={() => getProductsforthiscategory("category", categories[1])}>
            <img
              src={pic1}
              alt="Accessory"
              className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-yellow h4">Accessory</p>
            </div>

            <div className="absolute bottom-0 inset-x-0 mb-5 flex items-center justify-center"
            onClick={() => getProductsforthiscategory("category", categories[1])}>
              <Button  text='Explore More' />
            </div>
          </div>

          <div className="cursor-pointer relative w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[420px] rounded-e-xl rounded-s-xl bg-olive overflow-hidden group"
          onClick={() => getProductsforthiscategory("category", categories[2])}>
            <img
              src={pic3}
              alt="sarees"
              className="w-full h-full object-cover rounded-e-xl rounded-s-xl opacity-90 brightness-50 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-yellow h4">Sarees</p>
            </div>

            <div className="absolute bottom-0 inset-x-0 mb-5 flex items-center justify-center"
            onClick={() => getProductsforthiscategory("category", categories[2])}>
              <Button  text='Explore More'/>
            </div>
          </div>
          
        </div>
        </MarginWrapper>
    </div>
  );
};

export default ExploreCollection;
