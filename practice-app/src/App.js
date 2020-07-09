// Todo App Phase 6 - start: 2:41:41

import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
  }
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log("Changed", id)
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div className="todo-items">
        {todoItems}
      </div>
    )
  }
}

export default App;