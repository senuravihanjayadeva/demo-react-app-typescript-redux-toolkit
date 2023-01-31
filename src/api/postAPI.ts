import axios from "axios";

export const POSTAPI = {
       fetchAllPosts : () =>
         axios.get("https://jsonplaceholder.typicode.com/posts"),
};