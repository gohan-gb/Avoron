import React, { useState } from 'react';
import FileUploadForm from './FileUploadForm';
import UpdateForm from './UpdateForm'; // Import UpdateProductForm
import config from './config';

function AdminPanel() {
    const [activeForm, setActiveForm] = useState(null);
    const [products, setProducts] = useState([]); 

    const handleFormOpen = (formType) => {
        setActiveForm(formType);
    };

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
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleFormOpen('update')}
                >
                    Update Product
                </button>
            </div>

            <div className="w-full max-w-lg">
                {activeForm === 'add' && <FileUploadForm />}
                {activeForm === 'update' && <UpdateForm />}
            </div>
        </div>
    );
}

export default AdminPanel;
