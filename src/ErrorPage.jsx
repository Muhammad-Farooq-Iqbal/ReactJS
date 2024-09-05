import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useHistory, useNavigate, NavLink} from 'react-router-dom';
const ErrorPage = () => {
  const navigate=useNavigate()
  // const history = useHistory();
  const OnClick=()=>{
    // history.push('/contact')
    navigate('/contact')
  }
  return (
    <div>
      <h1 className="text-center">404 Error Page!</h1>
      {/* <h1> Oops, page not found!!</h1> */}
      <p>Sorry, This page Doesn't exist</p>
      {/* <NavLink to="/"> Go Back</NavLink> */}
      <button onClick={OnClick} className='btn btn-success'>Go Back</button>
    </div>
  )
}

export default ErrorPage
