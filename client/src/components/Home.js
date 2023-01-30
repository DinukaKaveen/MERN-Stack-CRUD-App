import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [], //allPosts Array
    };
  }

  //execute retrievePosts() method
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          allPosts: res.data.existingPosts,
        });
        console.log(this.state.allPosts);
      }
    });
  }

  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th scope="col">Post Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {this.state.allPosts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{posts.topic}</td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <Link to={`/post/${posts._id}`} type="button" className="btn btn-outline-success">
                    <i className="fa-solid fa-eye"></i>
                  </Link>
                  &nbsp;
                  <Link to={`/edit/${posts._id}`} type="button" className="btn btn-outline-warning">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                  &nbsp;
                  <Link to="" type="button" className="btn btn-outline-danger">
                    <i class="fa-solid fa-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
