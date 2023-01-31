import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchAllPosts } from "../slice/post.slice";
import type { RootState } from "../app/store";

function PostsList() {

  const posts = useAppSelector((state: RootState) => state.post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <>
      <div>Posts List</div>
      {posts.posts.map((post) => {
        return (
          <div key={post.id} className="card m-3">
            <div className="card-body">
            <p>Id : {post.id}</p>
            <p>User Id : {post.userId}</p>
            <p>Title : {post.title}</p>
            <p>Body : {post.body}</p>   
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PostsList;
