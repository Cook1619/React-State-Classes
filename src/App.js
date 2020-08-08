import React, { Component } from "react";
import Random from "./RandomNumber";
import BrokenButton from "./BrokenButton";

// We're extending from the React.Component class
// class App extends Component {
//   constructor(props) {
//     // Super calls the constructor on React.Component
//     super(props);
//     this.state = {
//       score: 0,
//       gameOver: false,
//     };
//   }
//   //Never mutate state directly, don't set state in constructor or render
//   render() {
//     return (
//       <div>
//         {/* <h1> Your score is: {this.state.score}</h1> */}
//         {/* <Random maxNumber={100} /> */}
//         {/* <button>Click me</button>
//         <BrokenButton /> */}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   // Using this syntax without babel won't work, babel will insert the constructor and super for you
//   // This just makes our life easier, and will work the same as the other syntax
//   state = {
//     score: 99,
//     gameOver: false,
//   };
//   render() {
//     return (
//       <div>
//         <h1>Your score is {this.state.score}</h1>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.handleNumber = this.handleNumber.bind(this);
  }
  handleNumber() {
    let random = Math.floor(Math.random() * 10) + 1;
    this.setState({ number: random });
  }
  render() {
    return (
      <div>
        <h1>Your number is: {this.state.number}</h1>
        {this.state.number === 7 ? (
          <h3>YOU WIN</h3>
        ) : (
          <button onClick={this.handleNumber}>Click me</button>
        )}
      </div>
    );
  }
}

export default App;
