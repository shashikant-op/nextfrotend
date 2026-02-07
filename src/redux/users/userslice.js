import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Login user
export const loginuser = createAsyncThunk(
  "auth/login",
  async (credential, { rejectWithValue }) => {
    try {
      const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL ;
      const response = await axios.post(`${backendurl}/login`, credential);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Login failed"
      );
    }
  }
);

// Register user
export const registeruser = createAsyncThunk(
  "auth/register",
  async (credential, { rejectWithValue }) => {
    try {
      const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await axios.post(`${backendurl}/register`, credential);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Registration failed"
      );
    }
  }
);

// Slice
const userslice = createSlice({
  name: "userdetails",
  initialState: {
    user: null,
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", action.payload.token);
        }
        state.error = null;
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register
      .addCase(registeruser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registeruser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", action.payload.token);
        }
        state.error = null;
      })
      .addCase(registeruser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userslice.actions;
export default userslice.reducer;
