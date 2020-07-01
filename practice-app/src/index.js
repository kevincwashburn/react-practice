// 2:04:11 before answers
// 2:07:10 after answers

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Kevin" />
                <Greeting />
            </div>
        )
    }
};

class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        )
    }
};


class Greeting extends React.Component {
      render() {
          const date = new Date();
          const hours = date.getHours();
          let timeOfDay;

          if (hours < 12) {
              timeOfDay = "morning"
          } else if (hours >= 12 && hours < 17) {
              timeOfDay = "afternoon"
          } else {
              timeOfDay = "night"
          }

          return (
              <h1>Good {timeOfDay} to you, sir!</h1>
          )
      }
}


ReactDOM.render(<App/>, document.getElementById("root"));