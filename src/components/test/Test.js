import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h3>{body}</h3>
        <h3>{title}</h3>
      </div>
    );
  }
  componentDidMount() {
    console.log(
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data =>
          this.setState({
            title: data.title,
            body: data.body
          })
        )
    );
  }
}
