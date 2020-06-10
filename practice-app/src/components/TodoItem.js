import React from "react";
import "../style.css";

function TodoItem() {
    return (
        <div className="todo-item">
            <input type="checkbox" id="box1"></input>
            <span> Placeholder text</span>
            <br></br>
            <br></br>
        </div>
    )
};

export default TodoItem;