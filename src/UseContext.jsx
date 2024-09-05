import React, { createContext } from 'react'
import ComponentContext from './ComponentContext'

const FirstName=createContext()
const LastName= createContext()
const UseContext = () => {
  return (
    <>
      <FirstName.Provider value={"Muhammad"}>
      <LastName.Provider value={"Farooq"}>
      <ComponentContext/>
      </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default UseContext;
export {FirstName, LastName};
