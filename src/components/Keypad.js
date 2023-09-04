// Code Keypad Component Here
import React from "react";

function Keypad() {
    return (
        <div>
            <form>
                <input type="password" placeholder="Enter Password" onChange={() => console.log("Entering password...")}></input>
            </form>
        </div>
    )
}

export default Keypad;