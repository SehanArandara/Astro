import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="">
      <nav className="bg-blue-gray-900 p-4 flex justify-between items-center border-b-2 border-[#41A4FF] ">
        <div className="text-[#41A4FF] font-bold text-xl">Astronomy App</div>
        <div className="hidden md:block">
          <Link to="/" className="text-white mx-4 hover:text-blue-100">
            Home
          </Link>
          <Link to="/apod" className="text-white mx-4 hover:text-blue-100">
            Astronomy Pics
          </Link>
          <Link to="/media" className="text-white mx-4 hover:text-blue-100">
            Media Search
          </Link>
          <Link to="/login" className="text-white mx-4 hover:text-blue-100">
            Log In
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white hover:text-cosmic-silver focus:outline-none">
            {/* Hamburger menu icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
