import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status : false,
    productData : []
}

const ProductSlice = createSlice ({
    name : "product",
    initialState,
    reducers : {
        productFetch : (state,action) => {
            state.status = true;
            state.productData = action.payload;
        }
    }
})

export const {productFetch} = ProductSlice.actions
export default ProductSlice.reducer