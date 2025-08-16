"use client"; // only if you're using App Router and using this in a client component

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Load cart items from localStorage
const loadLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("cartitem");
    return data ? JSON.parse(data) : [];
  }
  return [];
};

// Load shipping info from localStorage
const loadShippingInfo = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("shippinginfo");
    return data ? JSON.parse(data) : {};
  }
  return {};
};

// Helper: Calculate total count
const getCartCount = (items) => {
  return items.reduce((acc, item) => acc + item.quantity, 0);
};

// Async thunk
export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async ({ id, quantity = 1 }, thunkAPI) => {
    const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
      const response = await axios.get(`${backendurl}/productdetails/${id}`);
      const product = response.data.product;

      const itemData = {
        product: product._id,
        title: product.title,
        image: product.images[0],
        price: product.price,
        quantity,
      };

      let existingCart = [];

      if (typeof window !== "undefined") {
        const local = localStorage.getItem("cartitem");
        existingCart = local ? JSON.parse(local) : [];

        const index = existingCart.findIndex(i => i.product === product._id);
        if (index !== -1) {
          existingCart[index].quantity += quantity;
        } else {
          existingCart.push(itemData);
        }

        localStorage.setItem("cartitem", JSON.stringify(existingCart));
        localStorage.setItem("cartcount", JSON.stringify(getCartCount(existingCart)));
      }

      return existingCart;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add to cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    cartitems: loadLocalStorage(),
    cartCount: getCartCount(loadLocalStorage()),
    shippinginfo: loadShippingInfo(),
    error: null,
  },
  reducers: {
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartitems = state.cartitems.filter(item => item.product !== productId);
      state.cartCount = getCartCount(state.cartitems);
      if (typeof window !== "undefined") {
        localStorage.setItem("cartitem", JSON.stringify(state.cartitems));
        localStorage.setItem("cartcount", JSON.stringify(state.cartCount));
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.cartitems.findIndex(item => item.product === id);
      if (index !== -1) {
        state.cartitems[index].quantity = quantity;
      }
      state.cartCount = getCartCount(state.cartitems);
      if (typeof window !== "undefined") {
        localStorage.setItem("cartitem", JSON.stringify(state.cartitems));
        localStorage.setItem("cartcount", JSON.stringify(state.cartCount));
      }
    },
    setShippingInfo: (state, action) => {
      state.shippinginfo = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("shippinginfo", JSON.stringify(action.payload));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartitems = action.payload;
        state.cartCount = getCartCount(action.payload);
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { removeFromCart, updateCartItemQuantity, setShippingInfo } = cartSlice.actions;
export default cartSlice.reducer;
