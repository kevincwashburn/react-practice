import React from "react";
import ReactDOM from "react-dom";

//#1
function App() {
    return (
        <div>
            <Header />
            <Greeting />
        </div>
    )
};

//#2
function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
};

//#3
function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay;
};