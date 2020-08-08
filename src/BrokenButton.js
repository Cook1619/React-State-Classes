import React, { Component } from "react";

class BrokenButton extends Component {
  constructor() {
    super();
    this.state = { clicked: false };
    // When you dont use arrow functions, the this keyword is used out of context of the class
    // So you need to bind this in the constructor
    // We are setting the context of handleClick
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ clicked: true });
  }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked!!" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default BrokenButton;
