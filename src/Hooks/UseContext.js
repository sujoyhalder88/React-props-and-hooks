import React, { createContext, useState } from "react";
import UcChild from "./UcChild";
export const GlobalInfo = createContext();

function UseContext() {
    const [num, setNum] = useState(1);
    return (
        <GlobalInfo.Provider value={{ number: num }}>
            <div>
                <h1>Parent</h1>
                <UcChild />
            </div>
        </GlobalInfo.Provider>
    );
}

export default UseContext;
