
import React from 'react'
import { useState } from "react";


function navbar() {
    /** fungsi untuk mengaktifkan hamburger menu */
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <header className="md:sticky sticky top-0 z-50">
        <nav className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <a href="/" className="hover:text-green-400 font-bold text-xl">SnapVision</a>
                </div>
                <div className="flex items-center">
                    <div className="hidden md:block">
                    <a href="#about" className="  hover:bg-green-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="#project" className="  hover:bg-green-400 px-3 py-2 rounded-md text-sm font-medium">Project</a>
                    <a href="skills" className="  hover:bg-green-400 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                    <a href="#contact" className="  hover:bg-green-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                    <div className="block md:hidden">
                    <button onClick={toggleMenu} className="  hover:text-green-400 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#about" className=" hover:bg-green-400 block px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="#project" className=" hover:bg-green-400 block px-3 py-2 rounded-md text-base font-medium">Project</a>
                    <a href="#skills" className=" hover:bg-green-400 block px-3 py-2 rounded-md text-base font-medium">skills</a>
                    <a href="#contact" className=" hover:bg-green-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                </div>
                </div>
            )}
            </nav>
    </header>
  );
}

export default navbar;