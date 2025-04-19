import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg z-10 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition duration-300">
          <a href="#home" className="flex items-center">
            <FaHome className="mr-2" /> 
          </a>
        </div>
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-yellow-400 transition duration-300 flex items-center">
            <FaHome className="mr-2" /> Home
          </a>
          <a href="#technology-stack" className="hover:text-yellow-400 transition duration-300 flex items-center">
            <FaTools className="mr-2" /> Tech-Stack
          </a>
          <a href="#experience" className="hover:text-yellow-400 transition duration-300 flex items-center">
            <FaBriefcase className="mr-2" /> Experience
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition duration-300 flex items-center">
            <FaEnvelope className="mr-2" /> Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
          <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center justify-center space-y-12 py-8 transition-all duration-500 backdrop-blur-lg">

          <a
            href="#home"
            className="text-2xl hover:text-yellow-400 transition duration-300"
            onClick={toggleMenu}
          >
            <FaHome className="ml-5" /> Home
          </a>
          <a
            href="#technology-stack"
            className="text-2xl hover:text-yellow-400 transition duration-300"
            onClick={toggleMenu}
          >
            <FaTools className="ml-10" /> Tech-Stack
          </a>
          <a
            href="#experience"
            className="text-2xl hover:text-yellow-400 transition duration-300"
            onClick={toggleMenu}
          >
            <FaBriefcase className="ml-10" /> Experience
          </a>
          <a
            href="#contact"
            className="mr-5 text-2xl hover:text-yellow-400 transition duration-300"
            onClick={toggleMenu}
          >
            <FaEnvelope className="ml-8" /> Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;