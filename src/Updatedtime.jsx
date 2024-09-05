import React, { useState } from 'react'

const Updatedtime = () => {
    let Time=new Date().toLocaleTimeString()
    const [time, setTime]=useState(Time)
    const Updatefun=()=>{
         Time=new Date().toLocaleTimeString()
         setTime(Time)

    }
  return (
    <div>
    <h1>{time}</h1>
    <button onClick={Updatefun}>click me to update Time!</button>
      
    </div>
  )
}

export default Updatedtime
