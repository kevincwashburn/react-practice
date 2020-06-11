import React from "react";
import Joke from "./Joke";

function App() {
  return (
    <div>
      <Joke
      question="Why did the chicken cross the road?"
      punchLine="To get to the other side."
      />
      <Joke
      question="Why do they tell actors to break a leg?"
      punchLine="Because every play has a cast."
      />
      <Joke
      question="Helvetica and Times New Roman walk into a bar."
      punchLine="Get out of here! We don't serve your type!"
      />
    </div>
  )
};

export default App;