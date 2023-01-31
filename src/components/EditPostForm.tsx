import { useState,useEffect } from "react";
import type { RootState } from "../app/store";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Post } from "../interface/Post";
import { updatePost } from "../slice/post.actions";

function EditPostForm() {
  const post = useAppSelector((state: RootState) => state.post.post);
  const dispatch = useAppDispatch();
  const [postId, setPostId] = useState(post ? post.id : 0);
  const [userId, setUserId] = useState(post ? post.userId : 0);
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");

  useEffect(()=>{
    if(post){
      setPostId(post.id);
      setUserId(post.userId);
      setBody(post.body);
      setTitle(post.title)
    }
  },[post])

  const onChangeUserIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(parseInt(e.target.value));
  };

  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBodyHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onSubmitForm = () => {
    const newPost: Post = {
      userId,
      title,
      body,
    };

    const temp = {
      id: postId ? postId : 0,
      updatedPost: newPost,
    };

    dispatch(updatePost(temp));
  };

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Post
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container mt-5">
              <div className="mb-3">
                <label className="form-label">Post Id</label>
                <input
                  type="number"
                  className="form-control"
                  value={postId}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="form-label">User Id</label>
                <input
                  type="number"
                  className="form-control"
                  value={userId}
                  onChange={onChangeUserIdHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={onChangeTitleHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Body</label>
                <textarea
                  className="form-control"
                  value={body}
                  onChange={onChangeBodyHandler}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={onSubmitForm} data-bs-dismiss="modal">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPostForm;
