import React from "react";

class App extends React.component {
  render () {
    return (
      <div>
        <h1>{this.props.whatever}</h1>
      </div>
    )
  }
};

export default App;