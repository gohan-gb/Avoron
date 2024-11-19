import React, {useState, useEffect} from "react";
import ProductCard from "../../components/ProductCard";
import MarginWrapper from "../../common/MarginWrapper";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from 'react-redux'
import config from '../../Backend/Appwrite/config';
import {useDispatch} from 'react-redux'
import {productFetch, singleproductFetch} from "../../Backend/Redux/ProductSlice"
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Products = () => {

    // const [categoryName, setCategoryName] = useState(" ")
    const [categories, setCategories] = useState([]);
    const [menu, setMenu] = useState(false);
    const dispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState(location.state?.categoryName || "All Products");

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
        if (productsdata) {
          dispatch(productFetch(productsdata));
          setCategoryName(fetchedCategory)
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    const getAllProducts = async () => {
      try {
        const productsdata = await config.getallProducts()
        if (productsdata) {
          dispatch(productFetch(productsdata)); 
          setCategoryName("All Products");
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      const categoryname = location.state?.categoryName; // Check if category is passed via state
      if (categoryname) {
        getProductsforthiscategory("category", categoryname); // Fetch products for the specific category
      } else {
        getAllProducts(); // Fetch all products
      }
    }, [location.state]); // Re-run effect when location.state changes

    const gotosingleProduct = async (id) => {
      try {
        const stringid = String(id)
        const singleproductdata = await config.getsingleProductData (stringid)
        if (singleproductdata) {
          dispatch(singleproductFetch(singleproductdata)); 
          navigate(`/products/${id}`)
        }
      } catch (error) {
        console.log(error);
        
      }
    }

    const productDatas = useSelector((state) => state.product.productData);
    
    
    
    const handleMenuBar = () => {
      setMenu(!menu);
    };

  return (
    <>
      <MarginWrapper>
        <div className="pt-48 flex justify-start items-start">
          <div className="text-dark w-[25%] hidden sm:block">
            <h3 className="h4 mb-4">Browse by</h3>
            <ul className="flex flex-col justify-start gap-2 mb-20">
              <li onClick={() => getAllProducts()}>All Products</li>
              {categories.map((category, index) => (
                <li key={index} onClick={() => getProductsforthiscategory("category", category)}>
                  {category}
                </li>
              ))}
            </ul>
            <h3 className="h4 mb-4">Filter by</h3>
            <ul className="flex flex-col justify-start gap-2">
              <li>Price</li>
              <li>size</li>
              <li>category</li>
            </ul>
          </div>

          <div className="w-full sm:w-[75%]">

            <div className=" pb-16">
              <h2 className="h3  pb-4 text-dark text-center sm:text-left">{categoryName}</h2>

              <h3 onClick={handleMenuBar} className="text-dark text-right p2 underline sm:hidden block cursor-pointer"> Filter & Sort </h3>

              <section
        className={`duration-300 ${
          menu ? "translate-x-0" : "translate-x-full"
        } fixed top-0 left-0 right-0 h-full w-full bg-background z-20 transition-transform ease-in-out`}
      >
        <MarginWrapper>
          <div className="flex justify-between mt-8">
            <div onClick={handleMenuBar} className=" flex flex-col gap-6 mt-4 ">
            <div className="text-dark">
            <h3 className="h4 mb-4">Browse by</h3>
            <ul className="flex flex-col justify-start gap-2 mb-8">
              <li onClick={() => getAllProducts()}>All Products</li>
              {categories.map((category, index) => (
                <li key={index} onClick={() => getProductsforthiscategory("category", category)}>
                  {category}
                </li>
              ))}
            </ul>
            <h3 className="h4 mb-4">Filter by</h3>
            <ul className="flex flex-col justify-start gap-2">
              <li>Price</li>
              <li>size</li>
              <li>category</li>
            </ul>
          </div>
            </div>
            <div className="cursor-pointer">
              <RxCross1 size={"40px"} onClick={handleMenuBar} />
            </div>
          </div>
        </MarginWrapper>
      </section>

              <p className="text-dark hidden sm:block">
                This is your category description. It’s a great place to tell
                customers what this category is about, connect with your
                audience and draw attention to your products.
              </p>
            </div>

            
            <div className=" flex flex-wrap gap-4 justify-center items-start ">
              {productDatas.map(function (item) {
                return (
                  <div onClick={() => {gotosingleProduct(item.id)}}>
                    <ProductCard
                      image={item.images[0]}
                      title={item.title}
                      price={item.price}
                    />
                  </div>
                );
              })}
            </div>
            
            
          </div>
        </div>
      </MarginWrapper>
    </>
  );
};

export default Products;
