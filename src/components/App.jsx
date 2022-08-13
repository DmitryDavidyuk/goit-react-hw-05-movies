import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export function App() {
  return (
    <div>
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
      <Outlet />
    </div>
  );
}
