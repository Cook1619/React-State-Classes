import React, { Component } from "react";
import Random from "./RandomNumber";

// We're extending from the React.Component class
class App extends Component {
  constructor(props) {
    // Super calls the constructor on React.Component
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
  }
  //Never mutate state directly, don't set state in constructor or render
  render() {
    return (
      <div>
        <h1> Your score is: {this.state.score}</h1>
        {/* <Random maxNumber={100} /> */}
        <button>Click me</button>
      </div>
    );
  }
}

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

export default App;
