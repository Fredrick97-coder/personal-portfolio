import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar';
import SideLinks from '../component/sideLinks';

function PageLayout() {
  return (
    <div className="h-screen">
      <Navbar />
      <SideLinks />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
