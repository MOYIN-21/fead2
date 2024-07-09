"use client"
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [activeButton, setActiveButton] = useState(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <nav className="sticky top-0 bg-blue-300 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/public" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-900">WILLFEAD</span>
          </a>
          <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
              aria-controls="navbar-dropdown"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink to="/home" onClick={closeMenu} className="block py-2 px-3 md:p-0 ">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" onClick={closeMenu} className="block py-2 px-3 md:p-0">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/product" onClick={closeMenu} className="block py-2 px-3 md:p-0 ">Products/Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu} className="block py-2 px-3 md:p-0 ">Locate/Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/mid" onClick={closeMenu} className="block py-2 px-3 md:p-0">Media</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};