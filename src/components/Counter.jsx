import React, { useState } from "react";

function Counter() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr((prevArr) => [...prevArr, "+"])
    }

    function addminus() {
        setArr([])
    }

    return (
        <div>
            <button onClick={addminus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div>
    )
}

export default Counter;
