import { createAsyncThunk} from "@reduxjs/toolkit";
import { POSTAPI } from "../../api/postAPI";
import { Post, PostForUpadate } from "../../interface/Post";

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