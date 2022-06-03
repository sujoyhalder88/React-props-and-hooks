import React, { useState } from "react";

const UseState = () => {
    const [counter, setCounter] = useState(0);
    const incriment = () => {
        setCounter(counter + 1);
    };
    const dcriment = () => {
        setCounter(counter - 1);
    };
    const reset = () => {
        setCounter(0);
    };
    return (
        <div>
            <h1>{`Counter:${counter}`}</h1>
            <button onClick={incriment}>Incriment</button>
            <button onClick={dcriment}>Dcriment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default UseState;

//============================================================//
// import React, { useState } from "react";

// const UseState = () => {
//     const [input, setInput] = useState("");

//     const anyThing = (event) => {
//         const newValue = event.target.value;
//         setInput(newValue);
//     };
//     return (
//         <div>
//             <input type="text" placeholder="type here" onChange={anyThing} />
//             {input}
//         </div>
//     );
// };

// export default UseState;
