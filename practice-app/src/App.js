import React from "react";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30,
    fontFamily: "Roboto, sans-serif",
    textAlign: "center"
  };

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours > 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  };

  return (
    <div>
      <h3 style={styles}>Good {timeOfDay}!</h3>
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  )
};

export default App;