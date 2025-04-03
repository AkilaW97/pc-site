import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const menuRef = useRef(null);
  const productsDropdownRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setOpenSubMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSubMenu = (e, menu) => {
    e.stopPropagation();
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setOpenSubMenu(null);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" // Replace with logo path
            alt="Company Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 relative">
          <Link to="/" className="px-2 hover:text-blue-400 transition-colors">Home</Link>

          {/* Products Dropdown */}
          <div className="relative" ref={productsDropdownRef}>
            <button
              onClick={(e) => toggleSubMenu(e, 'products')}
              className="px-2 hover:text-blue-400 flex items-center transition-colors"
            >
              Products
            </button>

            {openSubMenu === 'products' && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 z-[9999]">
                <Link
                  to="/home-solutions"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={handleNavClick}
                >
                  Home Solutions
                </Link>
                <Link
                  to="/work-solutions"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={handleNavClick}
                >
                  Work Solutions
                </Link>
              </div>
            )}
          </div>

          <Link to="/support" className="px-2 hover:text-blue-400 transition-colors">Support</Link>
          <Link to="/about" className="px-2 hover:text-blue-400 transition-colors">About</Link>
          <Link to="/contact" className="px-2 hover:text-blue-400 transition-colors">Contact</Link>

          <Link to="/login" className="hover:text-blue-400 flex items-center pl-2 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed inset-0 bg-white/20 backdrop-blur-[2px] z-[9998]"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="absolute top-16 right-0 h-full w-64 bg-white shadow-lg z-[9999]"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="p-5">
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="block py-3 px-4 hover:bg-gray-100 rounded transition-colors" onClick={handleNavClick}>Home</Link>
                  </li>
                  <li>
                    <button
                      onClick={(e) => toggleSubMenu(e, 'mobileProducts')}
                      className="w-full flex justify-between items-center py-3 px-4 hover:bg-gray-100 rounded transition-colors"
                    >
                      <span>Products</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${openSubMenu === 'mobileProducts' ? 'rotate-90' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openSubMenu === 'mobileProducts' && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li>
                          <Link to="/home-solutions" className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors" onClick={handleNavClick}>Home Solutions</Link>
                        </li>
                        <li>
                          <Link to="/work-solutions" className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors" onClick={handleNavClick}>Work Solutions</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link to="/support" className="block py-3 px-4 hover:bg-gray-100 rounded transition-colors" onClick={handleNavClick}>Support</Link>
                  </li>
                  <li>
                    <Link to="/about" className="block py-3 px-4 hover:bg-gray-100 rounded transition-colors" onClick={handleNavClick}>About</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block py-3 px-4 hover:bg-gray-100 rounded transition-colors" onClick={handleNavClick}>Contact</Link>
                  </li>
                  <li>
                    <Link to="/login" className="block py-3 px-4 hover:bg-gray-100 rounded transition-colors" onClick={handleNavClick}>Login</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;