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
        <div className="md:hidden bg-gray-800 text-white p-4">
          <a
            href="#home"
            className="block py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 hover:text-gray-400"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-gray-400"
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
