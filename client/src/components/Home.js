import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  //allPosts - current state of this component, setPosts - function that update the allPosts
  const [allPosts, setPosts] = useState([]);

  //if allPosts variable update, useEffect will run again
  useEffect(() => {

    loadPosts();
    
  }, []); //define empty array[] to run useEffect once when page loading. without empty array[], it will run unlimited times

  const loadPosts = async () => {
    const result = await axios.get("/posts");
    setPosts(result.data.existingPosts);
  };

  //Delete Post
  const deletePost = async (id) => {
    await axios.delete(`/post/delete/${id}`);
    loadPosts();
  };

  return (
    <div className="container" style={{paddingTop: '30px'}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Topic</th>
            <th scope="col">Description</th>
            <th scope="col">Post Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {allPosts.map((posts, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{posts.topic}</td>
              <td>{posts.description}</td>
              <td>{posts.postCategory}</td>
              <td>
                <Link
                  to={`/post/${posts._id}`}
                  type="button"
                  className="btn btn-outline-success"
                >
                  <i className="fa-solid fa-eye"></i>
                </Link>
                &nbsp;
                <Link
                  to={`/edit/${posts._id}`}
                  type="button"
                  className="btn btn-outline-warning"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                &nbsp;
                <Link
                  to=""
                  onClick={() => deletePost(posts._id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  <i className="fa-solid fa-trash"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
