import React, { useState } from 'react'


const Incfun = () => {
    let [Count, setCount]=useState(0);
    const Funincrement=()=>{
        setCount(Count++)

    }
  return (
    <div>
    <h1>{Count}</h1>
    <button onClick={Funincrement}>Click to Increase</button>
      
    </div>
  )
}

export default Incfun
