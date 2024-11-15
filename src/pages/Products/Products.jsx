import React, {useState} from "react";
import ProductCard from "../../components/ProductCard";
import productData from "../../data/productData"
import MarginWrapper from "../../common/MarginWrapper";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Products = () => {

    const [menu, setMenu] = useState(false);
  
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
              <li>All Products</li>
              <li>kids</li>
              <li>men</li>
              <li>women</li>
              <li>handcrafts</li>
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
              <h2 className="h3  pb-4 text-dark text-center sm:text-left">All Products</h2>

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
              <li>All Products</li>
              <li>kids</li>
              <li>men</li>
              <li>women</li>
              <li>handcrafts</li>
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
              {productData.map(function (item) {
                return (
                  <Link to={`/products/${item.id}`}>
                  <div key={item.id}>
                    <ProductCard
                      image={item.images[0]}
                      title={item.title}
                      price={item.price}
                    />
                  </div>
                  </Link>
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
