import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style.css';

// this function allows users to navigate around the application and highlight green when user is on the active route.
const Navbar = () => (
  <nav className='navbar'>
    <div className='nav-container'>
      <NavLink
        to='/'
        end
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <img src={logo} alt='recipe logo' className='logo' />
      </NavLink>
      <ul className='nav-links'>
        <li>
          <NavLink
            to='/'
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/recipes'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/add-recipe'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Add Recipe
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
