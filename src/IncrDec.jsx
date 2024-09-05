import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const IncrDec = () => {
  let [num, incnum]=useState(0)
  // let number=1
  const Incfunc = () => {
    // number=number+1
    incnum(num+1)

  }
  const Decfunc = () => {
if (num>0) {
  incnum(num-1)
} else {
  alert("Sorry Sexy, Zero limit Reached!!!!")
incnum(0)
}

  }
  
  
  return (
    <div>
    <h1>{num}</h1>
    <Tooltip title="Add">

    <Button onClick={Incfunc} variant="contained" color="success"> <AddIcon/></Button>
    </Tooltip>

    <Tooltip title="Delete">

    <Button onClick={Decfunc} variant="contained" color="inherit"> <RemoveIcon/></Button>
    </Tooltip>


    </div>
  )
}

export default IncrDec
