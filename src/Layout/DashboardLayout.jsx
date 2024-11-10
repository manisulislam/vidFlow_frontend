// src/layouts/DashboardLayout.jsx
import { useState } from 'react';
import { MenuAlt3Icon } from '@heroicons/react/outline';
// import PropTypes from 'prop-types'; 
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom"
import ChannelStatistics from '../components/dashboard/ChannelStatistics';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
   
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar for large screens */}
      <Sidebar  isOpen={isOpen} toggleDrawer={toggleDrawer} />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 lg:pl-64">
        <header className="flex items-center justify-between w-full px-6 py-4 bg-white shadow">
          <button className="lg:hidden" onClick={toggleDrawer}>
            <MenuAlt3Icon className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">User Dashboard</h1>
        </header>
        <main className="flex-1 p-6">
            <ChannelStatistics/>
            <Outlet/>
        </main>
      </div>
    </div>
    
    </>
    
  );
};

// Add PropTypes validation
// DashboardLayout.propTypes = {
//     children: PropTypes.node.isRequired,  
//   };

export default DashboardLayout;
