import React, { useState } from 'react'
import ImgDisplay from './ImgDisplay';

const LiveSearch = () => {
    const [state, setstate] = useState("");
    const OnChange=(event)=>{
                setstate(event.target.value);
    }
  return (
    <>
<input type="text" value={state} placeholder='enter anything' onChange={OnChange}/>
    <div>
        <ImgDisplay name={state}/>
    </div>
    </>
  )
}

export default LiveSearch


