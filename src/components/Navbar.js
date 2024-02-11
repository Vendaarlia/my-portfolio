import { ArrowRightIcon } from "@heroicons/react/solid"
import React from 'react'

function navbar() {
  return (
    <header className="bg-gray-800">
        <div className="container">
            <a className="title-font">
                <a href="#about" className="ml-3">
                    Vendaarlia
                </a>
            </a>
            <nav className="md:mr-auto">
                <a href="#projects" className="mr-5 hover:text-white">
                    Game Collection
                </a>
                <a href="#skills" className="mr-5 hover:text-white">
                    Game
                </a>
            </nav>
            <a href="#contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                Join Guild <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
        </div>
    </header>
  );
}

export default navbar