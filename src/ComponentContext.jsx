import React from 'react'
import { useContext } from 'react'
// import { FirstName, LastName } from './Createcontext'
import {FirstName, LastName} from './UseContext'
const ComponentContext = () => {
    const fname=useContext(FirstName)
    const lname=useContext(LastName)
  return (
    <>
      <h1>my first name is {fname} and last name is {lname}</h1>
    </>
  )
}

export default ComponentContext
