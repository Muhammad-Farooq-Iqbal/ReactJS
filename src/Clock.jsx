import React, { useState, useEffect } from 'react'

const Clock = () => {
    let time=new Date().toLocaleTimeString()
    let [Time,NewTime]=useState(time)
   
    // setInterval(() => {
    //     let time=new Date().toLocaleTimeString()

    //     NewTime(time)  
    // }, 1000)
    //
   const Update=()=>{
               let time=new Date().toLocaleTimeString()
                NewTime(time)   
    }
    setInterval(Update,1000)
    // useEffect(() => {
    //     // This runs once when the component mounts
    //     const interval = setInterval(() => {
    //       // Updates the time every second
    //       NewTime(new Date().toLocaleTimeString());
    //     }, 1000);
    
    //     // Cleanup function to clear the interval when the component unmounts
    //    return () => clearInterval(interval);
    //   }, []); // The empty array makes sure this effect runs only once when the component mounts
      //
    

  return (
    <div>
    <h1>{Time}</h1>
      
    </div>
  )
}

export default Clock
