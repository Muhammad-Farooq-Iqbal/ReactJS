import React, { useState } from 'react'

const BgColor = () => {
    const[bg, setbg]=useState("green")
    const [text, settext]=useState("click me")

    const bgChange=()=>{
        setbg("yellow")
        settext("Oauch! 😲")

    }
    const btnText=()=>{
        setbg('brown')
        settext("Oyyo!!😠")

    }


  return (
    <div id='frstdive' style={{backgroundColor: bg}}>
    <button onMouseEnter={bgChange} onMouseLeave={btnText} id='btn'>{text}</button>
      
    </div>
  )
}

export default BgColor
