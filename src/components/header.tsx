// src/components/Header.tsx
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-100 py-4 border-b border-gray-300">
      <div className="container mx-auto flex justify-around items-center font-semibold px-4 md:px-0">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-8 md:h-10" />
          <div className="hidden md:block">
            <Dropdown />
          </div>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#refer" className="hover:text-blue-500">Refer & Earn</a>
          <a href="#benefits" className="text-black hover:text-blue-500">Resources</a>
          <a href="#faq" className="text-black hover:text-blue-500">About Us</a>
          <button className="bg-gray-300 text-black py-2 px-4 rounded">Login</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Try for Free</button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-300">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Dropdown />
            <a href="#refer" className="hover:text-blue-500">Refer & Earn</a>
            <a href="#benefits" className="text-black hover:text-blue-500">Resources</a>
            <a href="#faq" className="text-black hover:text-blue-500">About Us</a>
            <button className="bg-gray-300 text-black py-2 px-4 rounded w-full text-left">Login</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full text-left">Try for Free</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
