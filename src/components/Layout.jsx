import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie">Movie</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
