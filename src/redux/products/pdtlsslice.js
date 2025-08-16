'use client'; // Add this if used inside a client component (app directory)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch product details
export const fetchproductdetails = createAsyncThunk(
  "fetchproductdetails",
  async (id, thunkAPI) => {
    try {
      const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await fetch(`${backendurl}/productdetails/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch product details");
    }
  }
);
  
// Slice
const productdetailsslice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchproductdetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchproductdetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchproductdetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productdetailsslice.reducer;
