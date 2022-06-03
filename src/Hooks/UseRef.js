import React, { useRef, useState } from "react";

function UseRef() {
    const [num, setNum] = useState(0);

    const inputOne = useRef();
    const inputTwo = useRef();

    const getNumBox = () => {
        console.log("hello");
        console.log(inputOne.current);
        inputOne.current.style.width = "400px";
    };

    const getTextBox = () => {
        console.log("World");
        console.log(inputTwo.current);
    };

    return (
        <div>
            <h1>Hello World</h1>
            <input
                ref={inputOne}
                value={num}
                type="number"
                style={{ width: "100px" }}
                onChange={(e) => setNum(e.target.value)}
            />

            <input
                ref={inputTwo}
                value={num}
                type="text"
                onChange={(e) => setNum(e.target.value)}
            />

            <h3>Value is:{num}</h3>
            <button
                onClick={() => {
                    getNumBox();
                }}
            >
                Rupess
            </button>
            <button
                onClick={() => {
                    getTextBox();
                }}
            >
                Dollers
            </button>
        </div>
    );
}

export default UseRef;
