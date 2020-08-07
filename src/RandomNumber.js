import React, { Component } from "react";

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.randomTimer();
  }
  randomTimer() {
    setInterval(() => {
      let randomNumber = Math.floor(Math.random() * this.props.maxNumber);
      this.setState({ num: randomNumber });
    }, 1000);
  }
  render() {
    return <h1>{this.state.num}</h1>;
  }
}

export default Random;
