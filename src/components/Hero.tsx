import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import logo from "../assets/logo.jpg";
import cv from "../assets/QA_CV.pdf";

const Hero = () => {
  const [loop] = useState(true);
  const [text] = useTypewriter({
    words: [
      "QA Engineer",
      "Automation Tester",
      "Functional & Mobile Tester",
    ],
    loop: loop,
    delaySpeed: 2000,
  });

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black h-screen flex flex-col justify-center items-center text-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-72 h-72 bg-yellow-600 rounded-full animate-ping mix-blend-multiply filter blur-2xl opacity-30" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-orange-500 rounded-full animate-pulse mix-blend-multiply filter blur-2xl opacity-20" />
      </div>

      {/* Logo Animation */}
      <motion.img
        src={logo}
        alt="Logo"
        className="w-28 h-28 sm:w-36 sm:h-36 mb-6 rounded-full shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.5 }}
      />

      {/* Name Typing Effect */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Hi 👋🏽 I'm Mohan Shil
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-3xl font-medium text-white mb-4"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {text}
        <Cursor cursorColor="#FFBF50" />
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        className="max-w-lg text-base sm:text-lg leading-relaxed text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        As a QA Automation Tester with three years of expertise, I specialize in crafting robust, scalable test suites for web and mobile platforms using Playwright, WebdriverIO, Cypress, and GitHub Actions. Let’s build rock-solid user experiences together!
      </motion.p>

      {/* Download CV Button */}
      <motion.a
        href={cv}
        download
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12, delay: 2.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download My CV
      </motion.a>
    </motion.section>
  );
};

export default Hero;
