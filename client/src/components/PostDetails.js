import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetails() {

  const {id} = useParams()

  const [postData, setPost] = useState({
    topic: "",
    description: "",
    postCategory: "",
  });

  //Get Post
  useEffect(() => {

    loadPost();

  }, []);

  const loadPost = async () => {
    const result = await axios.get(`/post/${id}`);
    setPost(result.data.specificPost); 
  };

  return (
    <div className="container" style={{paddingTop: 30}}>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            <b>Topic</b>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly={true}
              className="form-control-plaintext"
              value={postData.topic}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            <b>Description</b>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly={true}
              className="form-control-plaintext"
              value={postData.description}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            <b>Post Category</b>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly={true}
              className="form-control-plaintext"
              value={postData.postCategory}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
