import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-yellow-400">
              RecipeApp
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-lg font-medium hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="text-lg font-medium hover:text-yellow-400 transition duration-300"
            >
              Create Recipe
            </Link>
            <Link
              to="/login"
              className="text-lg font-medium hover:text-yellow-400 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-lg font-medium hover:text-yellow-400 transition duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-yellow-400 focus:outline-none">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-gray-900">
        <ul className="space-y-4 p-4">
          <li>
            <Link
              to="/"
              className="block text-lg font-medium text-white hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="block text-lg font-medium text-white hover:text-yellow-400 transition duration-300"
            >
              Create Recipe
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="block text-lg font-medium text-white hover:text-yellow-400 transition duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="block text-lg font-medium text-white hover:text-yellow-400 transition duration-300"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
