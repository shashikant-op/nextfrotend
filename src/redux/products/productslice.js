import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch products
export const fetchproducts = createAsyncThunk(
  "products/fetch",
  async (
    { keyword = "", currpage = 1, category = "" },
    thunkAPI
  ) => {
    try {
      const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;

      if (!backendurl) {
        throw new Error("Backend URL not defined in .env file");
      }

      // Build URL with dynamic query parameters
      let link = `${backendurl}/products?page=${currpage}`;

      if (keyword) link += `&keyword=${keyword}`;
      if (category) link += `&category=${encodeURIComponent(category)}`;

      console.log("Final API URL:", link);

      const response = await fetch(link, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      console.log("Fetched data:", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Product slice
const productslice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    data: [],
    productcount: 0,
    resultperpage: 20,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchproducts.pending, (state) => {
        state.isLoading = true;
        state.data = [];
        state.error = null;
      })
      .addCase(fetchproducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.products || [];
        state.productcount = action.payload.productcount || 0;
        state.resultperpage = action.payload.resultperpage || 20;
      })
      .addCase(fetchproducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productslice.reducer;
