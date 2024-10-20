import { createSlice } from "@reduxjs/toolkit";
import { getProfile, logIN, register } from "./operations";

const authSlise = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
      password: null,
      id: null,
      createdAt: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    logOut: (state) => {
      state.user = {
        email: null,
        password: null,
        id: null,
        createdAt: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logIN.pending, (state) => {
        state.loading = true;
      })
      .addCase(logIN.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          id: action.payload.id,
        };
        state.token = action.payload.access_token;
        state.isLoggedIn = true;
      })
      .addCase(logIN.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProfile.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = {
          ...state,
          email: action.payload.email,
          id: action.payload.id,
        };
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});
export default authSlise.reducer;
export const { logOut } = authSlise.actions;
