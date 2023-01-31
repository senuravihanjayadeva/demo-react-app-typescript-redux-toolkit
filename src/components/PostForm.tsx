import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { Post } from "../interface/Post";
import { savePost } from "../slice/post.actions";

function PostForm() {
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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

    dispatch(savePost(newPost));
  };

  return (
    <div>
      <div className="container mt-3">
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onSubmitForm}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default PostForm;
