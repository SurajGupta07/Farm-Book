import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MAIN_URL } from "../../common/dbConnect";

export const postTweet = createAsyncThunk("post/createPost",
    async ({ content, userId, token, imageURL }) => {
        try{
            const res = await axios.post(`${MAIN_URL}/post`, {
                headers: {
                    authorization: token
                },
                post: {
                    content,
                    imageURL,
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
    async ({token, username}) => {
        try{
            const res = await axios.get(`${MAIN_URL}/post/userpost/${username}`, {
                headers: {
                    authorization: token,
                  }
            })
            return res.data.posts;
        }
        catch(err) {
            console.log(err)
        }
    }
)

export const getFeed = createAsyncThunk("post/feed", 
    async (token) => {
        try {
            let res = await axios.get(`${MAIN_URL}/feed`, {
                headers: {
                    authorization: token,
                }
            })
            return res.data.postList
        } catch (err) {
            console.log(err)
        }
    }
)

export const likePost = createAsyncThunk("post/like", 
    async ({postId, userId}) => {
        try{
            let res = await axios.put(`${MAIN_URL}/post/like/${postId}`, {
                userId
            })
            return res.data.post;
        } catch(err) {
            console.log(err)
        }
    }
)

export const unlikePost = createAsyncThunk("post/unlike", 
    async ({postId, userId}) => {
        try{
            let res = await axios.post(`${MAIN_URL}/post/unlike/${postId}`, {
                userId
            })
            return res.data;
        } catch(err) {
            console.log({err})
        }
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        _id: '',
        isError: false,
        errorMessage: '',
        postList: [],
        likedBy: [],
    },
    userPostList: [],
    postLoading: true,
    feedPost: [],

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
            state.postLoading = false;
            state.userPostList = action.payload;
        },
        
        [getFeed.pending]: (state, action) => {
            state.postLoading = true;
        },
        
        [getFeed.fulfilled]: (state, action) => {
            state.postLoading = false;
            state.feedPost = action.payload;
        },

        [likePost.pending]: (state, action) => {
            state.postLoading = true;
        },

        [likePost.fulfilled]: (state, action) => {
            state.postLoading = false;
            state.likedBy = action.payload;
        },

        [unlikePost.pending]: (state, action) => {
            state.postLoading = true;
        },

        [unlikePost.fulfilled]: (state, action) => {
            state.postLoading = false;
        }

    }
})

export default postSlice.reducer;