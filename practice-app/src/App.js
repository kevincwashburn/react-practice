// solved: 2:21:55
// unsolved: 2:20:19

import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";



// function App() {
//   const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)

//   return (
//     <div className="todo-list">
//       {todoItems}
//     </div>
//   )
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App;