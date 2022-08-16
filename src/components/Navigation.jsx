import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
        to="/movie"
      >
        Movie
      </NavLink>
    </nav>
  );
}
