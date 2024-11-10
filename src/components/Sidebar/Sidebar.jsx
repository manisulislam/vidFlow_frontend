// src/components/Sidebar.jsx
import PropTypes from 'prop-types'; 
import { UserIcon, VideoCameraIcon, CogIcon,XIcon,HomeIcon,PlayIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleDrawer }) => (
  <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:translate-x-0`}>
    <div className="flex items-center justify-between px-4 py-4 bg-indigo-600 text-white">
      <h2 className="text-xl font-bold">Profile Dashboard</h2>
      <button className="lg:hidden" onClick={toggleDrawer}>
        <XIcon className="w-6 h-6" />
      </button>
    </div>
    <nav className="mt-6">
    
      <Link
        to="/"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        Home
      </Link>
      <Link to="/dashboard/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50">
        <UserIcon className="w-5 h-5 mr-2" />
        Profile Dashboard
      </Link>
      <Link to="/dashboard/videos" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50">
        <VideoCameraIcon className="w-5 h-5 mr-2" />
        My Videos
      </Link>
      <Link to="/dashboard/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50">
        <CogIcon className="w-5 h-5 mr-2" />
        Settings
      </Link>
      <Link to="/home/video" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50">
        <PlayIcon  className="w-5 h-5 mr-2" />
        Video Home
      </Link>
    </nav>
  </div>
);


// Add PropTypes validation
Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,          
    toggleDrawer: PropTypes.func.isRequired,     
  };
export default Sidebar;
