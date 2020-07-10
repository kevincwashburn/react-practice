import React, {Component} from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

 
  componentDidMount() {
 // this method will only run once, while component is displayed on the screen.
  // common uses:
  // - API calls (data retreival)
  }

  // DEPREICATED...
  componentWillReceiveProps(nextProps) {
    // this component could be receiving props from a parent component
    // every time this component receives props, this method runs
    // will not only run every time the component is mounted, but will also run every time a parent component hands props to child component
    if (nextProps.whatever !== this.props.whatever) {
      // do something important here
    }
  }

  render() {
    return (
      <div>
        Code goes here
      </div>
    )
  }
}

export default App;