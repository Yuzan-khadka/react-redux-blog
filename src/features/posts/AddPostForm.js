import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setUserId(e.target.value);
  };

  const handleFormSubmit = (e) => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={handleAuthorChange}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleContentChange}
        />
        <button type="button" onClick={handleFormSubmit} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
