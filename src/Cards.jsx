import React from "react";
import App from "./App";
import Sdata from "./Sdata";
let tomorrow="sundayy"


const Cards=()=>{
  return(
<>
  {
    (tomorrow==="sunday")? 
              <App
          imgsrc={Sdata[0].imgsrc1}
          title={Sdata[0].title1}
          sname={Sdata[0].sname1}
          link={Sdata[0].btn1}
          /> :
                    <App
      imgsrc={Sdata[1].imgsrc1}
      title={Sdata[1].title1}
      sname={Sdata[1].sname1}
      link={Sdata[1].btn1}
      />
  }
</>
  )


}
// const Cards=()=>{
//   if (tomorrow==="friday") {
//     return(
//       <>
      
//           <App
//       imgsrc={Sdata[0].imgsrc1}
//       title={Sdata[0].title1}
//       sname={Sdata[0].sname1}
//       link={Sdata[0].btn1}
//       />
        
      
//       </>
//       )
    
//   } else {
//     return(
//       <>
      
//           <App
//       imgsrc={Sdata[1].imgsrc1}
//       title={Sdata[1].title1}
//       sname={Sdata[1].sname1}
//       link={Sdata[1].btn1}
//       />
        
      
//       </>
//       )
    
//   }
// }

// const Cards=()=>{
//   return(
// <>
// {Sdata.map((props)=>{
//   return(
//     <>
//                 <App
//       imgsrc={props.imgsrc1}
//       title={props.title1}
//       sname={props.sname1}
//       link={props.btn1}
//        />
//     </>
//   )

// })}

// </>
//   )
// }

export default Cards