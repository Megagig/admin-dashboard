import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="bg-[#cdcae9] w-full min-h-screen">
      <h1>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
          <Outlet />
        </div>
      </h1>
    </div>
  );
};

export default MainLayout;
