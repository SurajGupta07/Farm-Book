import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MAIN_URL } from "../../common/dbConnect";

export const postTweet = createAsyncThunk("post/createPost",
    async ({ content, owner }) => {
        try{
            const res = await axios.post(`${MAIN_URL}/post`, {
                post: {
                    content,
                    owner,
                    likedUsers: [],
                    reactions: {
                        happy: [],
                        sad: [],
                        angry: []
                    }
                }
            })
            return res.data;
        }
        catch(err) {
            console.error(err)
        }
    }
)

export const getAllPosts = createAsyncThunk("post/feed", 
    async () => {
        try{
            let res;
            res = await axios.get(`${MAIN_URL}/feed`)
            // console.log('data obj', res.data)
            return res.data;
        }
        catch(err) {
            console.log(err)
        }
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        postList: [],
        isError: false,
        postLoading: false,
        errorMessage: '',
    },

    reducers: {},

    extraReducers: {
        [postTweet.pending]: (state, action) => {
            state.postLoading = true;
        },

        [postTweet.fulfilled]: (state, action) => {
            state.postLoading = false;
            state.postList = action.payload?.newPost;
        },

        [getAllPosts.pending]: (state, action) => {
            state.postLoading = true;
        },

        [getAllPosts.fulfilled]: (state, action) => {
            // console.log(action.payload)
            // const uniquePostList = action.payload.postList.filter((post) =>state.postList.filter((obj) => obj._id !== post._id));
            // console.log(uniquePostList, 'uniquePostList')
            // state.postList = state.postList.concat(uniquePostList);
        }
    }
})

export default postSlice.reducer;