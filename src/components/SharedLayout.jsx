import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
