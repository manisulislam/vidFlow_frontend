import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, UserCircleIcon } from '@heroicons/react/outline';
import useAuthStore from "../../store/authStore.js"

const Header = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout= async()=>{
    try {
      await logout();
      window.location.href = '/login'; // Redirect to login page after logging out
  } catch (error) {
      console.error("Logout failed:", error);
  }
  }

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-lg">
        {/* Logo */}

        <Link to="/">
        <div className="text-2xl font-bold">
            VidFlow
        </div>

        </Link>
        
        {/* Search Bar */}
        {/* <div className="hidden md:flex items-center bg-white text-gray-600 rounded-full px-3 py-1 w-1/3">
          <SearchIcon className="h-5 w-5 mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full focus:outline-none"
          />
        </div> */}

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}

          {isAuthenticated && <Link to="/dashboard"><UserCircleIcon className="h-8 w-8 cursor-pointer" /></Link>}
          

          {/* Hamburger Menu Icon (visible on all screen sizes) */}
          <button onClick={toggleMenu} className="focus:outline-none">
            <MenuIcon className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-blue-700 text-white shadow-2xl w-64 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <XIcon className="h-8 w-8 text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-4 p-4">
          <Link to="/" className="text-lg font-semibold hover:text-blue-300">
            Home
          </Link>
          <Link to="/pricing" className="text-lg font-semibold hover:text-blue-300">
            Pricing
          </Link>
          <Link to="/about-us" href="#about" className="text-lg font-semibold hover:text-blue-300">
            About Us
          </Link>
          
          <Link to="/about-us" className="text-lg font-semibold hover:text-blue-300">
            Contact
          </Link>

          {
            isAuthenticated ? 
            <>
              <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Logout
                    </button>
            </>
            :
            
            <>
              <Link to="/login" className="text-lg font-semibold hover:text-blue-300">
                  Log In
              </Link>
              <Link to="/sign-up" className="text-lg font-semibold hover:text-blue-300">
                  Sign Up
              </Link>
            </>
          }
          
          
          
        </nav>
      </div>

      {/* Backdrop (for closing menu by clicking outside) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Header;