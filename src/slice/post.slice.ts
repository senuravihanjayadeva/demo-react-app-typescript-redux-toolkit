import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { POSTAPI } from "../api/postAPI";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    const response = await POSTAPI.fetchAllPosts();
    return response.data;
  }
);

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.posts = action.payload;
      state.status = "success";
    });
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
