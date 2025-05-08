import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition duration-300">
          <a href="#home" className="flex items-center">
            <FaHome className="mr-2" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a
            href="#home"
            className="hover:text-yellow-400 transition duration-300 flex items-center"
          >
            <FaHome className="mr-2" /> Home
          </a>
          <a
            href="#technology-stack"
            className="hover:text-yellow-400 transition duration-300 flex items-center"
          >
            <FaTools className="mr-2" /> Tech-Stack
          </a>
          <a
            href="#projects"
            className="hover:text-yellow-400 transition duration-300 flex items-center"
          >
            <FaTools className="mr-2" /> Projects
          </a>
          <a
            href="#experience"
            className="hover:text-yellow-400 transition duration-300 flex items-center"
          >
            <FaBriefcase className="mr-2" /> Experience
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition duration-300 flex items-center"
          >
            <FaEnvelope className="mr-2" /> Contact
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-3xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center justify-center space-y-10 py-8 z-40 transition-all duration-500 backdrop-blur-lg">
          <a
            href="#home"
            onClick={toggleMenu}
            className="text-2xl hover:text-yellow-400 flex items-center space-x-2"
          >
            <FaHome /> <span>Home</span>
          </a>
          <a
            href="#technology-stack"
            onClick={toggleMenu}
            className="text-2xl hover:text-yellow-400 flex items-center space-x-2"
          >
            <FaTools /> <span>Tech-Stack</span>
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="text-2xl hover:text-yellow-400 flex items-center space-x-2"
          >
            <FaTools /> <span>Projects</span>
          </a>
          <a
            href="#experience"
            onClick={toggleMenu}
            className="text-2xl hover:text-yellow-400 flex items-center space-x-2"
          >
            <FaBriefcase /> <span>Experience</span>
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-2xl hover:text-yellow-400 flex items-center space-x-2"
          >
            <FaEnvelope /> <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
