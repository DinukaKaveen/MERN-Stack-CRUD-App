import React, { Component } from 'react';
import axios from 'axios';

export default class PostDetails extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts: {}
    };
  }

  render() {
    return (
      <div>PostDetails</div>
    )
  }
}
