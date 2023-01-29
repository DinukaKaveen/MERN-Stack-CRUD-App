import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      allPosts:[] //allPosts Array
    };
  }

  //execute retrievePosts() method
  componentDidMount(){
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get("http://localhost:8000/posts").then(res => {
      if(res.data.success){
        this.setState({
          allPosts:res.data.existingPosts
        });
        console.log(this.state.allPosts);
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.allPosts.map(posts => (
          <div>
            <p>{posts.topic}</p>
            <p>{posts.description}</p>
            <p>{posts.postCategory}</p>
          </div>
        ))}
      </div>
    )
  }
}
