import React from "react";

function App() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" alt="placeholder" onMouseOver={console.log("I was hovered over")
      } />
      <br />
      <br />
      <button onClick={() => console.log("I was clicked!")
      }>Click Me</button>
    </div>
  )
};

export default App;

// https://reactjs.org/docs/events.html#supported-events