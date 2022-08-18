import { NavLink } from 'react-router-dom';
import CSS from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={CSS.nav}>
      <NavLink
        className={CSS.nav_link}
        style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={CSS.nav_link}
        style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
        to="/movies"
      >
        Movie
      </NavLink>
    </nav>
  );
}
