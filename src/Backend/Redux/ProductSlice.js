import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status : false,
    productData : [],
    singleproductdata : [],
}

const ProductSlice = createSlice ({
    name : "product",
    initialState,
    reducers : {
        productFetch : (state,action) => {
            state.status = true;
            state.productData = action.payload;
        },
        singleproductFetch : (state, action) => {
            state.status = true
            state.singleproductdata = action.payload
        }
    }
})

export const {productFetch, singleproductFetch} = ProductSlice.actions
export default ProductSlice.reducer