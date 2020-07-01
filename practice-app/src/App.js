// pre-answer 2:12:26
// answer 2:15:11

import React, {Component} from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Marcos",
      age: 27
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
      </div>
    )
  }
}

export default App;