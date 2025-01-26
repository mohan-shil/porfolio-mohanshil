import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl">❤️</div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#technology-stack" className="hover:text-gray-400">
            Tech-Stack
          </a>
          <a href="#experience" className="hover:text-gray-400">
            Experience
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 text-white flex flex-col items-center justify-center space-y-4">
          <a
            href="#home"
            className="text-2xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#technology-stack"
            className="text-2xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Tech-Stack
          </a>
          <a
            href="#experience"
            className="text-2xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-2xl hover:text-gray-400"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
