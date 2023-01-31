import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { POSTAPI } from "../api/postAPI";
import { Post } from "../interface/Post";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    const response = await POSTAPI.fetchAllPosts();
    return response.data;
  }
);

export const savePost = createAsyncThunk(
  "posts/savePost",
  async (newPost : Post) => {
    const response = await POSTAPI.savePost(newPost);
    return response.data;
  }
);

export interface PostState {
  posts: Post[];
  status: "success" | "loading" | "failed";
}

const initialState: PostState = {
  posts: [],
  status: "success",
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchAllPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        // Add user to the state array
        state.posts = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(
      savePost.fulfilled,
      (state, action) => {
        // Add user to the state array
        state.posts = [...state.posts, action.payload];
        state.status = "success";
      }
    );
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
