import React, { useContext } from "react";
import { GlobalInfo } from "./UseContext";

function UcSuperChild() {
    const { number } = useContext(GlobalInfo);
    return (
        <div>
            <h1>SuperChild{number}</h1>
        </div>
    );
}

export default UcSuperChild;
