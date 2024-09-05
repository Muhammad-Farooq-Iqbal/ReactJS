import React, { useState } from 'react'

const Acoordian = (props) => {
    const [show, setshow]=useState(true)
  return (
    <>
    <div>
    <h1 onClick={()=>setshow(!show)}>{show? "-":"+"}</h1>
      <h1> {props.id} {props.question}</h1>
      {/* <p></p> */}
    </div>
    {show && <p>{props.answer}</p>}
    </>

  )
}

export default Acoordian
