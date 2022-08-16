import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';

export function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
