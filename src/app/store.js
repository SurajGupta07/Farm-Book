import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/authSlice";
import postReducer from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer
  },
});
