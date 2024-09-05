import React, { useState } from "react";
let time2 = new Date().toLocaleTimeString();
let clearintervall
const Time1 = () => {
  const [time, setTime]=useState(time2)


  
  clearintervall=setInterval(() => {
    let timee = new Date().toLocaleTimeString();
    setTime(timee)
    document.querySelector('h1').innerText = time; // Direct DOM manipulation (Not ideal in React)
  }, 1000);


  return (
    <>
      <h1>{time}</h1>
      <button onClick={clearr} style={{ cursor: 'pointer' }}>Get Time</button>
      </>
  );
};


  const clearr = () => {
    // clearInterval(clearintervall);
    // clearintervall = null; // Ensure the interval is not restarted
  };

  clearInterval(clearintervall)

  export default Time1;