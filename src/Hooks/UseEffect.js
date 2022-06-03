import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [num, setNum] = useState(0);
    const [later, setLater] = useState(0);

    useEffect(() => {
        alert("I am Clicked");
        console.log("Hello World");
    }, [num]);
    return (
        <>
            <h1>{`Count:${num}`}</h1>
            <button
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                Click Me
            </button>
            <br />
            <h1>{`Count:${later}`}</h1>
            <button
                onClick={() => {
                    setLater(later + 1);
                }}
            >
                Click Me
            </button>
        </>
    );
};

export default UseEffect;
