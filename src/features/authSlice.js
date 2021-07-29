import axios from "axios";
import { MAIN_URL } from "../common/dbConnect";
import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk("/signup", 
async ({ name, username, email, password }) => {
    try {
      const res = await axios.post(`${MAIN_URL}/signup`, {
        user: {
          name,
          username,
          email,
          password,
          bio: `Hi there! I'm ${name}`,
          followingList: [],
          followersList: [],
        },
      });
      if (res.status === 201) {
        localStorage.setItem("login", JSON.stringify({ token: res.data.token, isUserLoggedIn: true }));
      }
      return res.data;
    } catch (error) {
      console.log("ERROR MESSAGE: ", error.message);
    }
  }
)

export const loginUser = createAsyncThunk("/login", 
async ({ email, password }) => {
    try {
      const res = await axios.post(`${MAIN_URL}/login`, { email, password });
      if (res.status === 201) {
        localStorage.setItem("login", JSON.stringify({ token: res.data.token, isUserLoggedIn: true }));
      }
      return res.data;
    } catch (error) {
      console.log("ERROR MESSAGE: ", error.message);
    }
  }
)

export const getCurrentUserData = createAsyncThunk("auth/username", 
async ({userName}) => {
  try {
    const res = await axios.get(`${MAIN_URL}/${userName}`);
    console.log(res.data.user, 'user data')
    return res.data.user;
  } catch (error) {
    console.error(error);
  }
});

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    data: {
      _id: '',
      name: '',
      email: '',
      username: '',
      bio: '',
      profileURL: '',
      followingList: [],
      followersList: [],
      token: '',
    },
    isUserLoggedIn: false,
    isUserLoading: false,
    isError: false,
    errorMessage: '',
  },

  reducers: {},

  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.isUserLoading = true;
    },

    [signupUser.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.isUserLoggedIn = true;
      state.token = action.payload.token;
      state.isError = false;
      state.errorMessage = "";
    },

    [signupUser.rejected]: (state, action) => {
      state.isUserLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    },

    [loginUser.pending]: (state, action) => {
      state.isUserLoading = true
    },
  
    [loginUser.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.isUserLoggedIn = true;
      state.token = action.payload.token;
      state.isError = false;
      state.errorMessage = '';
    },
  
    [loginUser.rejected]: (state, action) => {
      state.isUserLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    },
  
    [getCurrentUserData.pending]: (state, action) => {
      state.isUserLoading = true;
    },
  
    [getCurrentUserData.fulfilled]: (state, action) => {
      console.log('[authSlice]', action)
      state.isUserLoading = false;
      state.isUserLoggedIn = true;
      state.data = action.payload;
    },
  
    [getCurrentUserData.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.error.message;
    }
  }

})

export default authSlice.reducer;
