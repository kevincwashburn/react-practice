import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1>Kevin</h1>
      <p>
        I am a Junior Web Dev.
      </p>
      <ul>
        <li>Playa del Carmen, Mexico</li>
        <li>Bali, Indonesia</li>
        <li>Banff National Park, Canada</li>
      </ul>
    </div>
  )
};

ReactDOM.render(<MyInfo />, document.getElementById("root"));