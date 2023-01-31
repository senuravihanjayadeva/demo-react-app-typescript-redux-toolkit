import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { POSTAPI } from "../api/postAPI";
import { Post, PostForUpadate } from "../interface/Post";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    const response = await POSTAPI.fetchAllPosts();
    return response.data;
  }
);

export const savePost = createAsyncThunk(
  "posts/savePost",
  async (newPost: Post) => {
    const response = await POSTAPI.savePost(newPost);
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId: number) => {
    await POSTAPI.deletePost(postId);
    return postId;
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (post: PostForUpadate) => {
    const response = await POSTAPI.updatePost(post.id, post.updatedPost);
    return response.data;
  }
);

export interface PostState {
  posts: Post[];
  post: Post | null;
  status: "success" | "loading" | "failed";
}

const initialState: PostState = {
  posts: [],
  post: null,
  status: "success",
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    selectPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload
    },
  },
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
    builder.addCase(savePost.fulfilled, (state, action) => {
      // Add user to the state array
      state.posts = [...state.posts, action.payload];
      state.status = "success";
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      // Add user to the state array
      state.posts = state.posts.filter((x) => x.id !== action.payload);
      state.status = "success";
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      // Add user to the state array
      state.posts = state.posts.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      state.status = "success";
    });
  },
});

export const { selectPost } = postSlice.actions;

export default postSlice.reducer;
