import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlice"
import cartReducer from "../features/CartSlice"
import addressReducer from "../features/AddressSlice"

const store = configureStore({
    reducer: { products: productReducer, cart: cartReducer, address: addressReducer }
})

export default store;