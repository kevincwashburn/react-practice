// pre-answer 2:12:26
// answer 2:15:11

import React, {Component} from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    let status;
    if (this.state.isLoggedIn === true) {
      status = "in"
    } else if (!this.state.isLoggedIn) {
      status = "out"
    }
    return (
      <div>
        <h1>You are currently logged {status}</h1>
      </div>
    )
  }
}

export default App;