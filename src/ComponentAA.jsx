// import React from 'react'
// import { FirstName, LastName } from './Createcontext'

// const ComponentAA = () => {
//   return (
//     <>
//       <FirstName.Consumer>
//       {(fname)=>(

    

//                 <LastName.Consumer>
//                 {
//                     (lname)=>(
                     
//                             <>
//                             <h1>my first name is {fname} and {lname}</h1>
//                             </>
                       
//       )
//                 }
//                 </LastName.Consumer>

//       )
//       }

//       </FirstName.Consumer>
//     </>
//   );
// };

// export default ComponentAA


import React from 'react'
import { FirstName,LastName } from './Createcontext'

const ComponentAA = () => {
  return (
    <>
      <FirstName.Consumer>
      {(fname)=>{
            return(
                <LastName.Consumer>
                {
                    (lname)=>{
                        return(
                            <>
                            <h1>my first name is {fname} and {lname}</h1>
                            </>
                        )
                    }
                }
                </LastName.Consumer>

            )
        }
      }

      </FirstName.Consumer>
    </>
  );
};

export default ComponentAA
