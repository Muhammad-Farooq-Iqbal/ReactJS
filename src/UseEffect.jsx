import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
    const [num, setnum]=useState(0)

    useEffect(()=>{
       document.title=`U click me ${num} times`
    },[]);
    const OnClick=()=>{

            setnum(num+1);

    }
  return (
    <>
      <button onClick={OnClick}> click to increase {num}</button>
    </>
  )
}

export default UseEffect
