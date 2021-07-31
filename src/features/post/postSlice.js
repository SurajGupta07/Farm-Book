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

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        postList: [],
        isError: false,
        postLoading: false,
        errorMessage: ''
    },

    reducers: {},

    extraReducers: {
        [postTweet.pending]: (state, action) => {
            state.postLoading = true;
        },

        [postTweet.fulfilled]: (state, action) => {
            state.postLoading = false;
            state.postList = action.payload?.newUserPost;
        }
    }
})

export default postSlice.reducer;