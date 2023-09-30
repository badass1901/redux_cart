import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";
import themeReducer from "../features/themeSlice"

const store = configureStore({
  reducer: { 
    cart: cartReducer,
    product: productReducer,
    theme: themeReducer,
   },
});
export default store;
