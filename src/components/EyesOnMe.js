// Code EyesOnMe Component Here
import React from "react";
function EyesOnMe() {

    function handleFocus(e) {
        console.log("Good")
    }
    function handleBlur(e) {
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>Eyes On Me</button>
        </div>
    )
}
export default EyesOnMe;