import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetails() {
  
  const { id } = useParams();

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
    <div className="container" style={{ paddingTop: '30px' }}>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Topic:</b>&nbsp;
            {postData.topic}
          </li>
          <li className="list-group-item">
            <b>Description:</b>&nbsp;
            {postData.description}
          </li>
          <li className="list-group-item">
            <b>Podt Category:</b>&nbsp;
            {postData.postCategory}
          </li>
        </ul>
      </div>
    </div>
  );
}
