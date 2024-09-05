import React from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
const Services = () => {
    // const history=useHistory() replace
    const navigate=useNavigate()
    const location=useLocation()
    const {fname, lname}=useParams()
  return (
    <>
    
    <h1>This is {fname} {lname} page</h1>
    <p>my current location is {location.pathname}</p>
    {location.pathname === `/services/farooq/iqbal` ? (<button onClick={()=> navigate(-1)}> Go Back janu </button>) : null}
      
    </>
  )
}

export default Services
