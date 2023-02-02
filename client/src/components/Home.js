import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  const [allPosts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await axios.get("/posts");
    setPosts(result.data.existingPosts);
  };

  return (
    <div>
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
                <Link to="" type="button" className="btn btn-outline-danger">
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
