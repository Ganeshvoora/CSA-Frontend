import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const type = localStorage.getItem('userType');
    setUserType(type);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    navigate('/');
    setUserType(null);
  };

  const renderNavLinks = () => {
    if (userType === 'admin') {
      return (
        <>
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/admin/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
            My Courses
          </Link>
          <Link to="/admin/create-course" className="text-gray-700 hover:text-blue-600 transition-colors">
            Create Course
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Logout
          </button>
        </>
      );
    } else if (userType === 'user') {
      return (
        <>
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/user/my-purchases" className="text-gray-700 hover:text-blue-600 transition-colors">
            My Purchases
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          
          <Link
            to="/signin"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
          >
            Sign In
          </Link>
          
          
          <Link
            to="/signup"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
          >
            Sign Up
          </Link>
        </>
      );
    }
  };

  const renderMobileNavLinks = () => {
    if (userType === 'admin') {
      return (
        <>
          <Link
            to="/"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/admin/courses"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            My Courses
          </Link>
          <Link
            to="/admin/create-course"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Create Course
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
          >
            Logout
          </button>
        </>
      );
    } else if (userType === 'user') {
      return (
        <>
          <Link
            to="/"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/user/my-purchases"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            My Purchases
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link
            to="/"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
          
          <Link
            to="/signin"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </>
      );
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              CSA
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {renderNavLinks()}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {renderMobileNavLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;