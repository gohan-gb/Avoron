import React, { useState} from "react";
import config from "./config";

function UpdateForm({onUpdate }) {
    
    const [DocumentId, setDocumentId] = useState("")
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [discountOption, setDiscountOption] = useState("no");
    const [price, setPrice] = useState("");
    const [discPrice, setDiscPrice] = useState("");
    const [category, setCategory] = useState("");
    const [isNewlyAdded, setisNewlyAdded] = useState("no");
    const [isFeatured, setisFeatured] = useState("no");
    const [stockStatus, setstockStatus] = useState("");

    const handleFileChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const existingProductData = await config.getDocumenttoUpdate(DocumentId);
            const oldImages = existingProductData.images;
            // console.log(oldImages);
            
            const newImages = [];
            
            if (images.length > 0) {
                for (const file of images) {
                    const fileResponse = await config.uploadFile(file);
                    if (fileResponse) {
                        newImages.push(fileResponse.$id);
                    }
                }
            }
    
            // Merge old and new images
            const mergedImages = [...oldImages, ...newImages];
    
            // Step 3: Prepare updated data
            const actualPrice = parseInt(price, 10);
            const discountedPrice = discountOption === "yes" ? parseInt(discPrice, 10) : null;
    
            // Step 4: Update document
            const updatedProduct = await config.updateDocument(
                DocumentId,
                title || existingProductData.title,
                actualPrice || existingProductData.price,
                discountOption || existingProductData.discountOption,
                discountedPrice || existingProductData.discPrice,
                mergedImages,
                description || existingProductData.description,
                category || existingProductData.category,
                isNewlyAdded || existingProductData.isNewlyAdded,
                isFeatured || existingProductData.isFeatured,
                stockStatus || existingProductData.stockStatus
            );
            // console.log("Product updated successfully:", updatedProduct);
            alert("Product updated successfully!");
            if (onUpdate) onUpdate(updatedProduct);
    
        } catch (error) {
            console.error("Error updating product:", error);
            alert("There was an error updating the product.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="DocumentId">
                   Document ID
                </label>
                <input
                    type="text"
                    id="DocumentId"
                    value={DocumentId}
                    onChange={(e) => setDocumentId(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Document ID"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Product Name
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter product name"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter product description"
                   
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discount">
                    Discount
                </label>
                <select
                    id="discount"
                    value={discountOption}
                    onChange={(e) => setDiscountOption(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="no">False</option>
                    <option value="yes">True</option>
                </select>
            </div>

            {discountOption === 'yes' && (
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discPrice">
                        Discounted Price
                    </label>
                    <input
                        type="number"
                        id="discPrice"
                        value={discPrice}
                        onChange={(e) => setDiscPrice(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter discounted price"
                        style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
                    />
                </div>
            )}

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Actual Price
                </label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter actual price"
                    style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
                />
            </div>


            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                >
                    Category
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="" disabled>
                    Select a category
                    </option>
                    <option value="Jewellery">Jewellery</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Sarees">Sarees</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isNewlyAdded">
                    isNewlyAdded?
                </label>
                <select
                    id="isNewlyAdded"
                    value={isNewlyAdded}
                    onChange={(e) => setisNewlyAdded(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="no">False</option>
                    <option value="yes">True</option>
                </select>
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isFeatured">
                    isFeatured?
                </label>
                <select
                    id="isFeatured"
                    value={isFeatured}
                    onChange={(e) => setisFeatured(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="no">False</option>
                    <option value="yes">True</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stockStatus">
                    Stock Status
                </label>
                <select
                    id="stockStatus"
                    value={stockStatus}
                    onChange={(e) => setstockStatus(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="no">False</option>
                    <option value="yes">True</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                    Product Images
                </label>
                <input
                    type="file"
                    id="images"
                    multiple
                    onChange={handleFileChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Update Product
                </button>
            </div>
        </form>
    );
}

export default UpdateForm;
