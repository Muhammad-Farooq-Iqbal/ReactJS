import { Link, NavLink, Navigate } from 'react-router-dom';
// import MainApp from './MainApp';
function Navigation() {
  return (
    <nav>
      <NavLink active_class = "" to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/services/farooq/iqbal">Services</NavLink>
      <NavLink to="/error">ErrorPage</NavLink>
    </nav>
  );
}
export default Navigation