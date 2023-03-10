import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { deletePost, fetchAllPosts } from "../app/actions/post.action";
import { selectPost } from "../app/slices/post.slice";
import type { RootState } from "../app/store";
import EditPostForm from "./EditPostForm";

function PostsList() {
  const posts = useAppSelector((state: RootState) => state.post.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className="card m-3">
            <div className="card-body">
              <p>Id : {post.id}</p>
              <p>User Id : {post.userId}</p>
              <p>Title : {post.title}</p>
              <p>Body : {post.body}</p>
              <button
                type="button"
                className="btn btn-primary m-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  dispatch(selectPost(post));
                }}
              >
                EDIT
              </button>

              <button
                className="btn btn-danger m-2"
                onClick={() => {
                  if (post.id) {
                    dispatch(deletePost(post.id));
                  } else {
                    console.log("Post Id not found");
                  }
                }}
              >
                DELETE
              </button>
            </div>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <EditPostForm />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PostsList;
