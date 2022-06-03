import React, { useContext } from "react";
import UcSuperChild from "./UcSuperChild";
import { GlobalInfo } from "./UseContext";

function UcChild() {
    const { number } = useContext(GlobalInfo);
    return (
        <div>
            <h1>Child{number}</h1>
            <UcSuperChild />
        </div>
    );
}

export default UcChild;
