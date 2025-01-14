import React, {useState, useEffect} from "react";
import ProductCard from "../../components/ProductCard";
import MarginWrapper from "../../common/MarginWrapper";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from 'react-redux'
import config from '../../Backend/Appwrite/config';
import {useDispatch} from 'react-redux'
import {productFetch, singleproductFetch} from "../../Backend/Redux/ProductSlice"
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import slugify from 'slugify';

const Products = () => {

  useEffect(() => {
    Aos.init({
      duration: 500, 
      easing: "ease-in", 
      once: true, 
    });
  }, []);

    // const [categoryName, setCategoryName] = useState(" ")
    const [categories, setCategories] = useState([]);
    const [menu, setMenu] = useState(false);
    const [sortOrder, setSortOrder] = useState("");
    const dispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState(location.state?.categoryName || "All Products");
    const [loading, setLoading] = useState(true)

    const allcategory = async () => {
      try {
        setLoading(true)
        const categories = await config.getAllCategories()
        setCategories(categories);
        setLoading(false)
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
    
    // const getProductsforthiscategory = async (category, fetchedCategory) => {
    //   try {
    //     setLoading(true)
    //     const productsdata = await config.getProducts(category, fetchedCategory)
    //     if (productsdata) {
    //       dispatch(productFetch(productsdata));
    //       setCategoryName(fetchedCategory)
    //       setLoading(false)
    //     } else {
    //       console.log(error);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    const getProductsforthiscategory = async (category, fetchedCategory, displayName = fetchedCategory ) => {
      try {
        setLoading(true);
        const productsdata = await config.getProducts(category, fetchedCategory);
        if (productsdata) {
          const reversedProducts = [...productsdata].reverse();
          dispatch(productFetch(reversedProducts));
          setCategoryName(displayName); // Set the display name
          setLoading(false);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getAllProducts = async () => {
      try {
        setLoading(true)
        const productsdata = await config.getallProducts()
        if (productsdata) {
          const reversedProducts = [...productsdata].reverse();
          dispatch(productFetch(reversedProducts)); 
          setCategoryName("All Products");
          setLoading(false)
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
          const slug = slugify(singleproductdata.title, { replacement: '-', remove: 'or' });
          dispatch(singleproductFetch(singleproductdata)); 
          navigate(`/Laddu-Gopal-dress-decoration-items/shop-now/${singleproductdata.category}/${slug}/${id}`)
        }
      } catch (error) {
        console.log(error);
        
      }
    }

    const productDatas = useSelector((state) => state.product.productData);
    
    const handleSortChange = (e) => {
      const selectedOrder = e.target.value;
      setSortOrder(selectedOrder);
      
      const sortedProducts = [...productDatas].sort((a, b) => {
        if (selectedOrder === "ascending") {
          return a.price - b.price;
        } else if (selectedOrder === "decending") {
          return b.price - a.price; 
        }
        return 0;
      });
      dispatch(productFetch(sortedProducts));
    };
    
    const handleMenuBar = () => {
      setMenu(!menu);
    };
    
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <MarginWrapper>
            <div className="flex flex-col items-center">
              {/* Spinner */}
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75 mb-6"></div>
              {/* Loading Text */}
              <div className="mt-4 text-dark text-6xl sm:text-8xl">
                Loading...
              </div>
            </div>
          </MarginWrapper>
        </div>
      );
    }
    
    
    
  return (
    <>
      <MarginWrapper>
        <div className="pt-48 flex justify-start items-start">
          <div className="text-dark w-[25%] hidden sm:block">
            <h3 className="h4 mb-4">Browse by</h3>
            <ul className="flex flex-col justify-start gap-2 mb-20">
              <li className="cursor-pointer" onClick={() => getAllProducts()}>All Products</li>
              {categories.map((category, index) => (
                <li className="cursor-pointer" key={index} onClick={() => getProductsforthiscategory("category", category)}>
                  {category}
                </li>
              ))}
            </ul>
            <h3 className="h4 mb-4 w-36">Filter by</h3>
            <div className="flex flex-col justify-start gap-1 mb-4 w-36">
              <label for="price"> price: </label>
              <select className="cursor-pointer " onChange={handleSortChange}>
                <option value="" > Select</option>
                <option value="ascending"> Lower To Higher</option>
                <option value="decending"> Higher To Lower</option>
              </select>
              
            </div>
            <ul className="mb-4 cursor-pointer" onClick={() => getProductsforthiscategory("discountOption", "yes", "Sale")}>Products on Sale</ul>
            <ul className="mb-4 cursor-pointer" onClick={() => getProductsforthiscategory("isFeatured", "yes", "Our Best Products")}>Featured Products</ul>
          </div>

          <div className="w-full sm:w-[75%]">

            <div className=" pb-16">
              <h2 className="h3  pb-4 text-dark text-center sm:text-left">{categoryName}</h2>

              <h3 onClick={handleMenuBar} className="text-dark text-right p2 underline sm:hidden block cursor-pointer"> Categories /Filter </h3>

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
                <li className="cursor-pointer" key={index} onClick={() => getProductsforthiscategory("category", category)}>
                  {category}
                </li>
              ))}
            </ul>
            <h3 className="h4 mb-4">Filter by</h3>
            <ul className="flex flex-col justify-start gap-2">
              <label for="price"> price: </label>
              <select className="cursor-pointer" onChange={handleSortChange}>
                <option value=""> Select</option>
                <option value="ascending"> Lower To Higher</option>
                <option value="decending"> Higher To Lower</option>
              </select>
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
                Buy our exclusive handmade items of Laddo Gopal dresses, deity jewelry, Mata Laxmi sarees, and other divine deity items, along with empowering accessories and exclusive offers.
              </p>
            </div>

            
            <div className=" flex flex-wrap gap-4 justify-center items-start ">
              {productDatas.map(function (item) {
                return (
                  <div data-aos = 'fade-up' onClick={() => {gotosingleProduct(item.id)}}>
                    <ProductCard
                      image={item.images[0]}
                      title={item.title}
                      discountedPrice={item.discountedPrice}
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
