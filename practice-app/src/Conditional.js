import React from "react";

function Conditional(props) {
    // condition ? statement if true : statement if false
   
    return (
        <div>
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Not loading.</h1>}
        </div>
    )
}

export default Conditional;