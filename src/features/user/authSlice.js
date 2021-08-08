import axios from "axios";
import { MAIN_URL } from "../../common/dbConnect";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk("auth/signup", 
async ({ name, username, email, password }) => {
    try {
      const res = await axios.post(`${MAIN_URL}/user/signup`, {
        user: {
          name,
          username,
          email,
          password,
          bio: `Hi there! I'm ${name}`,
          profileURL: 'https://res.cloudinary.com/farmbook07/image/upload/v1627628803/profile-user_zxntqf.png',
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
      const res = await axios.post(`${MAIN_URL}/user/login`, { email, password });
      if (res.status === 201) {
        localStorage.setItem("login", JSON.stringify({ token: res.data.token, isUserLoggedIn: true }));
      }
      return res.data;
    } catch (error) {
      console.log("ERROR MESSAGE: ", error.response);
    }
  }
)

export const getCurrentUserData = createAsyncThunk("auth/username", 
async (username, token) => {
  try {
    const res = await axios.get(`${MAIN_URL}/user/${username}`, {
      headers: {
        authorization: token
      } 
    });
    return res.data.userDetails;
  } catch (error) {
    console.error(error);
  }
});

export const getUserNetwork = createAsyncThunk("auth/network", 
  async({username, token}) => {
    try{
      const res = await axios.get(`${MAIN_URL}/user/network/${username}`, {
        headers: {
          authorization: token
        }
      });
      return res.data.user
    }
    catch(err) {
      console.log(err)
    }
  }
)

export const getFollowSuggetions = createAsyncThunk("auth/follow", 
  async(token) => {
    try{
      const res = await axios.get(`${MAIN_URL}/user/getall`, {
        headers: {
          authorization: token,
        }
      })
      return res.data.users;
    } 
    catch(err) {
      console.log(err)
    }
  }
)

export const addFollowUser = createAsyncThunk("auth/follow", 
  async(token, username) => {
    try{  
      const res = await axios.post(`${MAIN_URL}/user/follow/new`, {
        headers: {
          authorization: token
        },
        username
      })
      console.log({res})
      return res.data
    } catch(err) {
      console.log(err)
    }
  }
) 

export const authSlice = createSlice({
  name: 'auth',
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
    },
    followUser: '',
    token: '',
    isUserLoggedIn: false,
    isUserLoading: false,
    isError: false,
    errorMessage: '',
    userNetwork: '',
    followUsers: [],
    userCreatedPosts: []
  },

  reducers: {},

  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.isUserLoading = true;
    },

    [signupUser.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.isUserLoggedIn = true;
      state.data = action.payload.user;
      state.token = action.payload.token
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
      state.data = action.payload.user;
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
      state.isUserLoading = false;
      state.isUserLoggedIn = true;
      state.followUser = action.payload;
    },
  
    [getCurrentUserData.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.error.message;
    },

    [getUserNetwork.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.userNetwork = action.payload;
    },

    [getUserNetwork.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.error.message;
    },

    [getFollowSuggetions.pending]: (state, action) => {
      state.isUserLoading = true;
    },

    [getFollowSuggetions.fulfilled]: (state, action) => {
      state.isError = false;
      state.isUserLoading = false;
      state.followUsers = action.payload;
    },

    [getFollowSuggetions.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.error.message;
    }
  }

})

export default authSlice.reducer;
