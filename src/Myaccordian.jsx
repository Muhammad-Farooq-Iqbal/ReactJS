import React, { useState } from 'react'
import Acoordian from './Acoordian'
import QuestionsArray from './QuestionsArray'
const Myaccordian = () => {
   const [data, setdata]=useState(QuestionsArray);
    return(
        <>
            {
                 data.map((curele)=>{
                    console.log(curele)
                {/* const {id}= curele; */}
                return (<Acoordian key={curele.id} {...curele}/>)
                
                 })
           }
        </>
    )


}

export default Myaccordian
