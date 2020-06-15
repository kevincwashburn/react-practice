import React from "react";

function Joke(props) {
    return (
        <div className="joke-card">
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <p>Answer: {props.punchLine}</p>
        </div>
    )
};

export default Joke