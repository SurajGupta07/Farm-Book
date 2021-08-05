import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MAIN_URL } from "../../common/dbConnect";

export const postTweet = createAsyncThunk("post/createPost",
    async ({ content, userId, token }) => {
        try{
            const res = await axios.post(`${MAIN_URL}/post`, {
                headers: {
                    authorization: token
                },
                post: {
                    content,
                    likedUsers: []
                }, 
                userId
            })
            return res.data.post;
        }
        catch(err) {
            console.error(err)
        }
    }
)

export const getAllUserCreatedPosts = createAsyncThunk("post/userpost", 
    async (token, username) => {
        try{
            let res;
            res = await axios.get(`${MAIN_URL}/post/user/${username}`, {
                headers: {
                    authorization: token,
                  }
            })
            return res.data;
        }
        catch(err) {
            console.log(err)
        }
    }
)

export const getFeed = createAsyncThunk("post/feed", 
    async (token) => {
        try {
            const res = await axios.get(`${MAIN_URL}/feed`, {
                headers: {
                    authorization: token,
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        _id: '',
        userPostList: [],
        isError: false,
        postLoading: false,
        errorMessage: '',
        postList: []
    },

    reducers: {},

    extraReducers: {
        [postTweet.pending]: (state, action) => {
            state.postLoading = true;
        },

        [postTweet.fulfilled]: (state, action) => {
            state.postLoading = false;
            state.postList = action.payload;
        },

        [getAllUserCreatedPosts.pending]: (state, action) => {
            state.postLoading = true;
        },

        [getAllUserCreatedPosts.fulfilled]: (state, action) => {
            state.userPostList = action.apylaod;
        }
    }
})

export default postSlice.reducer;