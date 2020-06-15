import React from "react";

function Joke(props) {
    return (
        <div className="joke-card">
            <h3>Question: {props.question}</h3>
            <p>Answer: {props.punchLine}</p>
        </div>
    )
};

export default Joke