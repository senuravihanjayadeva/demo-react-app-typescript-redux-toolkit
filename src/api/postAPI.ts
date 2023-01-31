import axios from "axios";
import { Post } from "../interface/Post";

export const POSTAPI = {
       fetchAllPosts : () =>
         axios.get("https://jsonplaceholder.typicode.com/posts"),
       savePost : (newPost: Post) =>
         axios.post("https://jsonplaceholder.typicode.com/posts",newPost),
};