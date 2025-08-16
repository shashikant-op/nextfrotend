import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching user details
export const userdetails = createAsyncThunk(
  "user/details",
  async (token, thunkAPI) => {
    try {
      const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;

      const response = await axios.get(`${backendurl}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch user details"
      );
    }
  }
);

// Slice for user details
const userslice = createSlice({
  name: "userdetail",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userdetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userdetails.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(userdetails.rejected, (state, action) => {
        state.data = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userslice.reducer;
