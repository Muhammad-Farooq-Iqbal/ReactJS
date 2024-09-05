import React, { createContext } from 'react'
import ComponentAA from './ComponentAA'
 const FirstName=createContext()
 const LastName=createContext()
const Createcontext = () => {
  return (
    <>
      <FirstName.Provider value={"shan"}>
      <LastName.Provider value={"khaaan"}>
      <ComponentAA/>
      </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default Createcontext;
export {FirstName, LastName}; 
