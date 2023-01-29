import React, { Component } from 'react';
import axios from 'axios';
import res from 'express/lib/response';

export default class App extends Component {

  constructor (props){
    super(props);

    this.state = {
      allPosts:[] //posts array
    };
  }

  //execute retrievePosts()
  componentDidMount(){
    this.retrievePosts(); 
  }

  retrievePosts(){
    axios.get("http://localhost:8000/posts").then(res => {
      if(res.data.success){
        this.setState({
          allPosts: res.data.existingPosts
        });
        console.log(this.state.allPosts);
      }
    })
  }

  render() {
    return (
      <div></div>
    )
  }
}

