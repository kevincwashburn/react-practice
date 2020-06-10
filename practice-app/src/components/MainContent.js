import React from "react";
import "../style.css";

function MainContent() {
    return (
        <main className="mainContent">
            <input type="checkbox" id="box1"></input>
            <span> Please select this box if you so desire.</span>
            <br></br>
            <br></br>

            <input type="checkbox" id="box2"></input>
            <span>Or select this box..</span>
            <br></br>
            <br></br>

            <input type="checkbox" id="box3"></input>
            <span>Better yet, select this box if you so choose.</span>
        </main>
    )
}

export default MainContent;