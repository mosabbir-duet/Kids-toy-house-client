import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = (
    <>
      <NavLink
        className={`nav-list-style ${({ isActive }) =>
          isActive ? "active" : "default"}`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={`nav-list-style ${({ isActive }) =>
          isActive ? "active" : "default"}`}
        to="/blog"
      >
        Blog
      </NavLink>
      <NavLink
        className={`nav-list-style ${({ isActive }) =>
          isActive ? "active" : "default"}`}
        to="/alltoys"
      >
        All Toys
      </NavLink>
      <NavLink
        className={`nav-list-style ${({ isActive }) =>
          isActive ? "active" : "default"}`}
        to="/mytoys"
      >
        My Toys
      </NavLink>
      <NavLink
        className={`nav-list-style ${({ isActive }) =>
          isActive ? "active" : "default"}`}
        to="/addtoys"
      >
        Add Toys
      </NavLink>
      <NavLink
        className={`nav-list-style ${({ isActive }) =>
          isActive ? "active" : "default"}`}
        to="/login"
      >
        Login
      </NavLink>
    </>
  );

  const websiteLogo = (
    <>
      <Link to="/">
        <h1 className="text-3xl font-semibold text-[#ff0018]">
          Kid's Toy House
        </h1>
      </Link>
    </>
  );

  return (
    <div className=" py-7 bg-[#f8ea69] border-b border-spacing-3 ">
      <div className="container mx-auto hidden lg:flex justify-between items-center ">
        {websiteLogo}
        <nav>{navItems}</nav>
      </div>

      {/* Mobile Navbar Section */}
      <div className="lg:hidden ">
        {/* Dropdown Open Button */}
        <div className="flex justify-between items-center px-4 ">
          <div>{websiteLogo}</div>

          <div>
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="w-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="py-5 bg-[#f8ea69] border rounded shadow-sm ">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-2">
                <div>{websiteLogo}</div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BiX className="text-3xl text-red-600 " />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav className="text-center block w-full ">{navItems}</nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
