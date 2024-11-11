import React, { useState } from 'react';
import FileUploadForm from './FileUploadForm';
import config from './config';

function AdminPanel() {
    const [activeForm, setActiveForm] = useState(null);
    const [products, setProducts] = useState([]); 

    const handleFormOpen = (formType) => {
        setActiveForm(formType);
    };

    // const FetchProductsforsubCategories = async (category) => {
    //     try {
    //         const fetchedProducts = await config.getproductsforsubCategories(category);
    //         setProducts(fetchedProducts); // Store the fetched products in state
    //     } catch (error) {
    //         console.error("Error fetching products:", error);
    //     }
    // };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-bold mb-8">Admin Panel</h2>
            
            <div className="space-x-4 mb-8">
                <button 
                    className="bg-black text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleFormOpen('add')}
                >
                    Add Product
                </button>
            </div>
            {/* <div className="space-x-4 mb-8">
                <button 
                    className="bg-black text-white font-bold py-2 px-4 rounded"
                    onClick={() => FetchProductsforsubCategories("women")}
                >
                    Fetch
                </button>
            </div> */}

            <div className="w-full max-w-lg">
                {activeForm === 'add' && <FileUploadForm />}
            </div>

            {/* Displaying the products */}
            {/* <div className="flex flex-wrap justify-center gap-4 mt-6">
                {products.map((product, index) => (
                    <ProductCard 
                        key={index} 
                        title={product.title} 
                        price={product.price} 
                        image={product.images[0]} // Adjust to your actual image field
                    />
                ))}
            </div> */}
        </div>
    );
}

export default AdminPanel;
