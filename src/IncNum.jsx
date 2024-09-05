import React, { useState } from "react";



const Finalfun=()=>{
    const [count, setCount]=useState(0)

    const IncNum=()=>{
        setCount(count+1)
    };
    return(
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>ckick t increase</button>
        </>
    ); };
    export default Finalfun