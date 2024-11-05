import React, { useState } from 'react';
import { logo } from "../assets/export"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu after clicking
    }
  };

  return (
    <div className="relative bg-transparent text-white flex flex-col items-center pt-2">
      <nav className="flex items-center justify-between w-full px-4 md:px-10 lg:px-36 text-sm">
        {/* Logo */}
        <div className="flex items-center mb-2 md:mb-0 pb-1">
          <img src={logo} alt="Logo" className="h-8 md:h-12" />
        </div>

        {/* Desktop Menu (Hidden on small screens) */}
        <div className="hidden md:flex flex-1 justify-center mb-2">
          <ul className="flex space-x-12 text-black">
            <li className="hover:underline hover:decoration-green-500 hover:decoration-2 cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('features')}>Features</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('aboutus')}>About Us</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('contactus')}>Contact Us</li>
          </ul>
        </div>

        {/* Desktop Get The App Button */}
        <div className="hidden md:flex mb-2">
          <button className="bg-[#D0FCB3] text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 w-[163px] h-[40px]">
            Get The App
          </button>
        </div>

        {/* Hamburger Icon (Visible on small screens) */}
        <button
          className="md:hidden flex items-center justify-end focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu (Hidden on desktop) */}
      {isOpen && (
        <div className="md:hidden bg-black border border-white text-white w-full py-4 px-4">
          <ul className="flex flex-col space-y-4 items-center justify-center uppercase">
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('features')}>Features</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('aboutus')}>About Us</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('contactus')}>Contact Us</li>
          </ul>
          <button className="bg-green-600 text-white w-full mt-4 py-2 rounded-full font-semibold hover:bg-green-700">
            Get The App
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
