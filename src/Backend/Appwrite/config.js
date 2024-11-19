import conf from "./conf";
import { Client, Account, ID, Databases, Storage, Query} from "appwrite";


export class Config {
    client = new Client();
    account;
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client)
        this.bucket = new Storage (this.client)
            
    }

    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId, 
                ID.unique(), 
                file
            );
            return response;
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            throw error
        }
    };

    async storeFileMetadata(title, price, discountOption, discPrice, images, description, category, isNewlyAdded, isFeatured ) {
        try {
            const metadata = await this.databases.createDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                ID.unique(),
                {
                    title: title,
                    price: price,
                    discountOption: discountOption,
                    discPrice: discPrice,
                    images: images,
                    description: description,
                    category: category,
                    isNewlyAdded: isNewlyAdded,
                    isFeatured: isFeatured,
                }
            );
            // console.log(metadata);
            return metadata;
        } catch (error) {
            console.log("Appwrite service :: storeFileMetadata :: error", error);
            throw error
        }
    };

    async uploadFileWithCategory(title, price, discountOption, discPrice, images, description, category, isNewlyAdded, isFeatured) { 
        try {
            // Array to hold the file IDs
            const imageIds = [];
    
            // Upload each file and collect its ID
            for (const file of images) {
                const fileResponse = await this.uploadFile(file);
                if (fileResponse) {
                    imageIds.push(fileResponse.$id); // Store the file ID
                }
            }
    
            // Store metadata with the array of file IDs
            const metadata = await this.storeFileMetadata(
                title, // Pass the array of file IDs
                price,
                discountOption,
                discPrice,
                imageIds,
                description,
                category,
                isNewlyAdded,
                isFeatured
            );
    
            console.log("File and metadata stored successfully:", metadata);
            return metadata;
        } catch (error) {
            console.log("Appwrite service :: uploadFileWithCategory :: error", error);
            throw error;
        }
    }

    async getProductsForCategories(category) {
        try {
            const productForCategories = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal('category', category)]
            );
    
            // Fetch product data
            const productdata = productForCategories.documents;
    
            // Map through products and fetch image links for each product
            const productsWithImageLinks = await Promise.all(productdata.map(async product => {
                const imageLinks = await Promise.all(product.images.map(imageId => this.getFile(imageId)));
                return {
                    ...product,
                    images: imageLinks // Replace image IDs with their corresponding links
                };
            }));

            const productData = productsWithImageLinks.map((product) => ({
                id: product.$id,
                title: product.title,
                price: product.price,
                isDiscount: product.discountOption,
                discountedPrice: product.discPrice,
                images: product.images, // Assuming `images` is an array of URLs
                description: product.description,
                category: product.category,
                isNewlyAdded: product.isNewlyAdded,
                isFeatured: product.isFeatured
            }));
            // console.log(productData);
            return productData;
    
        } catch (error) {
            console.log("Appwrite service :: getProductsForCategories :: error", error);
            throw error;
        }
    }
    
    async getProducts(categoryName, category) {
        try {
            const productForCategories = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal(categoryName, category)]
            );
    
            const productdata = productForCategories.documents;
    
            const productsWithImageLinks = await Promise.all(productdata.map(async product => {
                const imageLinks = await Promise.all(product.images.map(imageId => this.getFile(imageId)));
                return {
                    ...product,
                    images: imageLinks
                };
            }));

            const productData = productsWithImageLinks.map((product) => ({
                id: product.$id,
                title: product.title,
                price: product.price,
                isDiscount: product.discountOption,
                discountedPrice: product.discPrice,
                images: product.images,
                description: product.description,
                category: product.category,
                isNewlyAdded: product.isNewlyAdded,
                isFeatured: product.isFeatured
            }));
            // console.log(productData);
            return productData;
    
        } catch (error) {
            console.log("Appwrite service :: getProducts :: error", error);
            throw error;
        }
    }

    async getfeaturedProducts() {
        try {
            const productForCategories = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal("isFeatured", "yes")]
            );
    
            const productdata = productForCategories.documents;
    
            const productsWithImageLinks = await Promise.all(productdata.map(async product => {
                const imageLinks = await Promise.all(product.images.map(imageId => this.getFile(imageId)));
                return {
                    ...product,
                    images: imageLinks
                };
            }));

            const productData = productsWithImageLinks.map((product) => ({
                id: product.$id,
                title: product.title,
                price: product.price,
                isDiscount: product.discountOption,
                discountedPrice: product.discPrice,
                images: product.images,
                description: product.description,
                category: product.category,
                isNewlyAdded: product.isNewlyAdded,
                isFeatured: product.isFeatured
            }));
            // console.log(productData);
            return productData;
    
        } catch (error) {
            console.log("Appwrite service :: getfeaturedProducts :: error", error);
            throw error;
        }
    }

    async getnewlyAddedProducts() {
        try {
            const productForCategories = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal("isNewlyAdded", "yes")]
            );
    
            const productdata = productForCategories.documents;
    
            const productsWithImageLinks = await Promise.all(productdata.map(async product => {
                const imageLinks = await Promise.all(product.images.map(imageId => this.getFile(imageId)));
                return {
                    ...product,
                    images: imageLinks
                };
            }));

            const productData = productsWithImageLinks.map((product) => ({
                id: product.$id,
                title: product.title,
                price: product.price,
                isDiscount: product.discountOption,
                discountedPrice: product.discPrice,
                images: product.images,
                description: product.description,
                category: product.category,
                isNewlyAdded: product.isNewlyAdded,
                isFeatured: product.isFeatured
            }));
            // console.log(productData);
            return productData;
    
        } catch (error) {
            console.log("Appwrite service :: getfeaturedProducts :: error", error);
            throw error;
        }
    }

    async getallProducts() {
        try {
            const productForCategories = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            );
    
            const productdata = productForCategories.documents;
    
            const productsWithImageLinks = await Promise.all(productdata.map(async product => {
                const imageLinks = await Promise.all(product.images.map(imageId => this.getFile(imageId)));
                return {
                    ...product,
                    images: imageLinks
                };
            }));

            const productData = productsWithImageLinks.map((product) => ({
                id: product.$id,
                title: product.title,
                price: product.price,
                isDiscount: product.discountOption,
                discountedPrice: product.discPrice,
                images: product.images,
                description: product.description,
                category: product.category,
                isNewlyAdded: product.isNewlyAdded,
                isFeatured: product.isFeatured
            }));
            // console.log(productData);
            return productData;
    
        } catch (error) {
            console.log("Appwrite service :: getallProducts :: error", error);
            throw error;
        }
    }

    async getAllCategories() {
        try {
            const allDocuments = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            );
            const categories = [...new Set(allDocuments.documents.map(doc => doc.category))];
            return categories;
        } catch (error) {
            console.log("Appwrite service :: getAllCategories :: error", error);
            throw error;
        }
    }

    // async getsingleProductData(id) {
    //     try {
    //         const singleProductData = await this.databases.getDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             id,
    //         );

    //         // const productsWithImageLinks = await Promise.all(singleProductData.map(async product => {
    //         //     const imageLinks = await Promise.all(product.images.map(imageId => this.getFile(imageId)));
    //         //     return {
    //         //         ...product,
    //         //         images: imageLinks
    //         //     };
    //         // }));

    //         // const productData = productsWithImageLinks.map((product) => ({
    //         //     id: product.$id,
    //         //     title: product.title,
    //         //     price: product.price,
    //         //     isDiscount: product.discountOption,
    //         //     discountedPrice: product.discPrice,
    //         //     images: product.images,
    //         //     description: product.description,
    //         //     category: product.category,
    //         //     isNewlyAdded: product.isNewlyAdded,
    //         //     isFeatured: product.isFeatured
    //         // }));

    //         return singleProductData;
    
    //     } catch (error) {
    //         console.log("Appwrite service :: getsingleProductData :: error", error);
    //         throw error;
    //     }
    // }
    
    async getsingleProductData(id) {
        try {
            // Fetch the single product document
            const singleProductData = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id
            );
    
            // Fetch the image links for the product
            const imageLinks = await Promise.all(singleProductData.images.map(imageId => this.getFile(imageId)));
    
            // Construct the product object with the desired structure
            const productData = {
                id: singleProductData.$id,
                title: singleProductData.title,
                price: singleProductData.price,
                isDiscount: singleProductData.discountOption,
                discountedPrice: singleProductData.discPrice,
                images: imageLinks,
                description: singleProductData.description,
                category: singleProductData.category,
                isNewlyAdded: singleProductData.isNewlyAdded,
                isFeatured: singleProductData.isFeatured,
            };
    
            return productData;
    
        } catch (error) {
            console.log("Appwrite service :: getsingleProductData :: error", error);
            throw error;
        }
    }
    

    async getFile (fileId) {
        try {
            const result = this.bucket.getFileView(conf.appwriteBucketId, fileId);
            return result
        } catch (error) {
            console.log("Appwrite serive :: getFile :: error", error);
            throw error; 
        }
    }
}

const config = new Config ();
export default config


