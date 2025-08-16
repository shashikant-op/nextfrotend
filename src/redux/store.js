// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productslice';
import productdetailsReducer from './products/pdtlsslice';
import loginReducer from './users/userslice';
import userReducer from './users/userdetailsslice';
import cartReducer from './cart/cartslice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productdetailsReducer,
    auth: loginReducer,
    userdetail: userReducer,
    cart: cartReducer,
  },
});
