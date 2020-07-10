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

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // or return false if not
  }

  componentWillUnmount() {
    // main use: clean up or tear down, what has been set up that will clutter the app or the DOM
    // ie: an event listener - this method would remove the event listener
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