import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  let navigate = useNavigate();

  const [postData, setPost] = useState({
    topic: "",
    description: "",
    postCategory: "",
  });

  const { topic, description, postCategory } = postData;

  const onInputChange = (e) => {
    setPost({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    await axios.post("/post/save", postData);
    navigate("/");
  };

  return (
    <div className="container" style={{ paddingTop: "30px" }}>
      <center>
        <h2>Create New Post</h2>
      </center>
      <form onSubmit={(e) => submitPost(e)}>
        <div className="form-group">
          <label>Topic</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="topic"
            value={topic}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="description"
            value={description}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Post Category</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            name="postCategory"
            value={postCategory}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
