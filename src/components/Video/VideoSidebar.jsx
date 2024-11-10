import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon,HomeIcon,
  CollectionIcon,
  
  ClockIcon,
  HeartIcon,
  ViewGridIcon, } from '@heroicons/react/outline';


  // BookmarkIcon,
  
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleDrawer}
        className="block lg:hidden p-4 text-white bg-blue-800"
      >
        {isOpen ? (
          <XIcon className="h-6 w-6 text-white" />
        ) : (
          <MenuIcon className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Sidebar / Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:w-1/5 z-50 bg-blue-800 text-white p-6 space-y-6 transition-transform duration-300 ease-in-out`}
      > 
        <Link to="/" onClick={() => setIsOpen(false)}>
          <h2 className="text-2xl font-semibold">VidFlow</h2>
        </Link>
         <hr className='bg-white rounded-lg pb-1'/>
        <ul className="space-y-4 mt-4">


          <Link to="/" onClick={() => setIsOpen(false)} >
          <li className="hover:bg-white hover:text-black flex items-center space-x-2 p-3 rounded-lg cursor-pointer">
              <HomeIcon className="h-6 w-6 hover:text-black" />
              <span>Home</span>
          </li>
          </Link>

          <Link to="/home/video/all-videos" onClick={() => setIsOpen(false)} >
          <li className="hover:bg-white hover:text-black flex items-center space-x-2 p-3 rounded-lg cursor-pointer">
              <CollectionIcon className="h-6 w-6 hover:text-black" />
              <span>All Videos</span>
          </li>
          </Link>
          


          {/* <Link to="/home/video/playlist" onClick={() => setIsOpen(false)}>
          <li className="hover:bg-white hover:text-black flex items-center space-x-2 p-3 rounded-lg cursor-pointer">
              <BookmarkIcon className="h-6 w-6  hover:text-black" />
              <span>Playlist</span>
          </li>
          </Link> */}

          <Link to="/home/video/history" onClick={() => setIsOpen(false)} >
          <li className="hover:bg-white hover:text-black p-3 flex items-center space-x-2 rounded-lg cursor-pointer">
              <ClockIcon className="h-6 w-6  hover:text-black" />
              <span>History</span>
          </li>
          </Link>
          
          
          <Link to="/home/video/liked" onClick={() => setIsOpen(false)}  >
          <li className="hover:bg-white hover:text-black p-3 flex items-center space-x-2 rounded-lg cursor-pointer">
              <HeartIcon className="h-6 w-6  hover:text-black" />
              <span>Liked</span>
          </li>
          </Link>

          <Link  to="/dashboard" onClick={() => setIsOpen(false)} >
          <li className="hover:bg-white hover:text-black p-3 flex items-center space-x-2 rounded-lg cursor-pointer">
              <ViewGridIcon className="h-6 w-6  hover:text-black" />
              <span>Dashboard</span>
          </li>
          </Link>
          


          
        </ul>
      </aside>

      {/* Overlay for mobile drawer */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
