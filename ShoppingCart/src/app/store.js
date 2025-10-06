import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/ShopCart/productSlice'


export const store = configureStore({
    reducer:{
        products: productReducer
    }
})