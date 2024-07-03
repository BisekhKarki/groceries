import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Connect"
import cartItemsReducer  from "../features/CartRedux";

export const store = configureStore({
    reducer:{
        user:userReducer,
        carts:cartItemsReducer
    }
})


export default store;