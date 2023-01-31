import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interface/Post";
import { fetchAllPosts, savePost, deletePost, updatePost} from './post.actions';

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
