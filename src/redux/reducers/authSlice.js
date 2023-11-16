import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isLoggedIn: false,
    posts: [],
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    register: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const selectAuth = (state) => state.auth;

export const { login, logout, register, setPosts } = authSlice.actions;

export default authSlice.reducer;
