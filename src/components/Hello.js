import React from "react";

const Hello=()=>{
//    To be noted that the JSX makes import React usless
    // return(
    //     <div className="dummyClass">
    //         <h1>Assalam o Allaikum by JSX</h1>
    //     </div>
    // )
            // createElement( type, props, children)
           return React.createElement("div",{id: "hello", className:"dummyClass"}, React.createElement("h1", null,"AOA"));
}
export default Hello;

// JSX and Html Differences
// Class replaced by className
// for replaced by htmlFor
// Camel casing