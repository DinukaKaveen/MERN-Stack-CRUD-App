import React, { Component } from 'react';
import axios from 'axios';

export default class PostDetails extends Component {

  constructor(props){
    super(props);

    this.state = {
      getPost: {},
    };
  }
  
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) => {
      if(res.data.success){
        this.setState({
          getPost: res.data.specificPost
        });
        console.log(this.state.getPost);
      }
    });
  }

  render() {
    return (
      <div>PostDetails</div>
    )
  }
}
