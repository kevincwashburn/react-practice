import React from "react";

function Joke(props) {
    return (
        <div className="joke-card">
            <h3>{props.question}</h3>
            <p>{props.punchLine}</p>
        </div>
    )
};

export default Joke