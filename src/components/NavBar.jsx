import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="#home" className="hover:text-gray-400">Skies</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/home" className="hover:text-gray-400 transition duration-300">Home</a>
          <a href="/skills" className="hover:text-gray-400 transition duration-300">Skills</a>
          <a href="/portfolio" className="hover:text-gray-400 transition duration-300">Portfolio</a>
          <a href="/contact" className="hover:text-gray-400 transition duration-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="/home" className="block py-2 px-4 hover:bg-gray-700 transition duration-300">Home</a>
          <a href="/skills" className="block py-2 px-4 hover:bg-gray-700 transition duration-300">Skills</a>
          <a href="/portfolio" className="block py-2 px-4 hover:bg-gray-700 transition duration-300">Portfolio</a>
          <a href="/contact" className="block py-2 px-4 hover:bg-gray-700 transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;