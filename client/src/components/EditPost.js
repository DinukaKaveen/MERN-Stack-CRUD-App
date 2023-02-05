import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreatePost() {
  const { id } = useParams();
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

  //Get Post
  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const result = await axios.get(`/post/${id}`);
    setPost(result.data.specificPost);
  };

  //Update Post
  const submitPost = async (e) => {
    e.preventDefault();
    await axios.put(`/post/update/${id}`, postData)
      .then(res => {
        if(res.data.success){
          alert(res.data.message);
          navigate("/");
        }
        else{
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert("Error: "+err)
      });
  };

  return (
    <div className="container" style={{ paddingTop: "30px" }}>
      <center>
        <h2>Edit Post</h2>
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
