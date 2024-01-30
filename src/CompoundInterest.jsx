import React from "react";
import CIimage from "./assets/ci.png"

function CompoundInterest(){
    return(
        <div className="sm:flex p-10">
            <img src={CIimage} alt="graph" className="h-[300px] p-5 m-auto" />
            <p className="m-auto p-5 text-center font-bold text-dark text-2xl md:text-2xl">"Compound interest is the engine of wealth creation, turning small sums into meaningful fortunes over time"</p>
        </div>
    );
}

export default CompoundInterest;