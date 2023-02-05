import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import Alert from "./Alert";

export default function CreatePost() {

  ReactSession.setStoreType("sessionStorage");
  
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
    await axios.post("/post/save", postData)
      .then((res) => {
        if (res.data.success) {
          ReactSession.set("message", res.data.message);
          window.location.reload();
          //alert(res.data.message);
          //navigate("/");
        } 
        else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert("Error: " + err);
      });
  };

  return (
    <div className="container" style={{ paddingTop: "30px" }}>
      <Alert/>
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
