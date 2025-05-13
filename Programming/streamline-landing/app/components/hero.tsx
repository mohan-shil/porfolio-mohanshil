"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { useTheme } from "next-themes"
import Image from "next/image"

const Hero = () => {
  const [loop] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: false })
  const controls = useAnimation()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [text] = useTypewriter({
    words: ["QA Engineer", "Automation Tester", "Functional & Mobile Tester"],
    loop: loop,
    delaySpeed: 2000,
  })

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animate elements when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Generate particles
  const particles = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-yellow-300/30 dark:bg-indigo-400/30"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
      }}
      animate={{
        x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth, Math.random() * window.innerWidth],
        y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight, Math.random() * window.innerHeight],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
      }}
    />
  ))

  // Skill icons that float around
  const skills = [
    { name: "Playwright", icon: "🎭" },
    { name: "WebdriverIO", icon: "🌐" },
    { name: "Cypress", icon: "🔍" },
    { name: "GitHub Actions", icon: "⚙️" },
    { name: "Mobile Testing", icon: "📱" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <motion.section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black h-screen flex flex-col justify-center items-center text-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 -z-10">
        {particles}

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-30"
          animate={{
            background:
              theme === "dark"
                ? [
                    "radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(99,102,241,0) 70%)",
                    "radial-gradient(circle, rgba(79,70,229,1) 0%, rgba(79,70,229,0) 70%)",
                    "radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(99,102,241,0) 70%)",
                  ]
                : [
                    "radial-gradient(circle, rgba(255,187,0,1) 0%, rgba(255,187,0,0) 70%)",
                    "radial-gradient(circle, rgba(255,136,0,1) 0%, rgba(255,136,0,0) 70%)",
                    "radial-gradient(circle, rgba(255,187,0,1) 0%, rgba(255,187,0,0) 70%)",
                  ],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            background:
              theme === "dark"
                ? [
                    "radial-gradient(circle, rgba(129,140,248,1) 0%, rgba(129,140,248,0) 70%)",
                    "radial-gradient(circle, rgba(99,102,241,1) 0%, rgba(99,102,241,0) 70%)",
                    "radial-gradient(circle, rgba(129,140,248,1) 0%, rgba(129,140,248,0) 70%)",
                  ]
                : [
                    "radial-gradient(circle, rgba(255,102,0,1) 0%, rgba(255,102,0,0) 70%)",
                    "radial-gradient(circle, rgba(255,64,0,1) 0%, rgba(255,64,0,0) 70%)",
                    "radial-gradient(circle, rgba(255,102,0,1) 0%, rgba(255,102,0,0) 70%)",
                  ],
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating skill icons */}
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl sm:text-3xl filter drop-shadow-lg"
          initial={{
            x: Math.random() * 600 - 300,
            y: Math.random() * 600 - 300,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0.7, 0.9, 0.7],
            scale: 1,
            x:
              (mousePosition.x - window.innerWidth / 2) / (20 + index * 2) +
              Math.sin(Date.now() / (2000 + index * 500)) * 30,
            y:
              (mousePosition.y - window.innerHeight / 2) / (20 + index * 2) +
              Math.cos(Date.now() / (2000 + index * 500)) * 30,
          }}
          transition={{
            opacity: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
            scale: {
              duration: 1,
              delay: index * 0.2,
            },
            x: {
              duration: 0.1,
            },
            y: {
              duration: 0.1,
            },
          }}
          style={{
            left: `${(index + 1) * 15}%`,
            top: `${((index * 15) % 80) + 10}%`,
          }}
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.3 },
          }}
        >
          <div className="relative group">
            <span>{skill.icon}</span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 text-xs bg-gray-800 dark:bg-gray-700 text-yellow-300 dark:text-indigo-300 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Logo Animation with 3D effect */}
      <motion.div
        className="relative mb-6 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-500 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 shadow-xl hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateY: 0,
          boxShadow:
            theme === "dark"
              ? [
                  "0 0 10px rgba(99, 102, 241, 0.5)",
                  "0 0 20px rgba(99, 102, 241, 0.7)",
                  "0 0 10px rgba(99, 102, 241, 0.5)",
                ]
              : [
                  "0 0 10px rgba(255, 191, 0, 0.5)",
                  "0 0 20px rgba(255, 191, 0, 0.7)",
                  "0 0 10px rgba(255, 191, 0, 0.5)",
                ],
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: 0.5,
          boxShadow: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          rotateX: 10,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={144}
          height={144}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white dark:border-gray-800"
        />

        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow:
              theme === "dark"
                ? [
                    "0 0 0 0 rgba(99, 102, 241, 0)",
                    "0 0 0 10px rgba(99, 102, 241, 0.3)",
                    "0 0 0 20px rgba(99, 102, 241, 0)",
                  ]
                : [
                    "0 0 0 0 rgba(255, 191, 0, 0)",
                    "0 0 0 10px rgba(255, 191, 0, 0.3)",
                    "0 0 0 20px rgba(255, 191, 0, 0)",
                  ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      </motion.div>

      {/* Staggered text animations */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {/* Name with 3D effect */}
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-purple-400 mb-2"
              variants={{
                hidden: { y: -50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              whileHover={{
                scale: 1.05,
                textShadow: theme === "dark" ? "0 0 8px rgba(99, 102, 241, 0.5)" : "0 0 8px rgba(255, 191, 0, 0.5)",
              }}
            >
              Hi 👋🏽 I'm Mohan Shil
            </motion.h1>

            {/* Job title with typewriter */}
            <motion.div
              className="relative text-2xl sm:text-3xl font-medium text-gray-800 dark:text-white mb-4 h-10"
              variants={{
                hidden: { y: -20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ delay: 1.2 }}
            >
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
                {text}
                <Cursor cursorColor={theme === "dark" ? "#818cf8" : "#FFBF50"} />
              </motion.span>

              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent dark:via-indigo-400"
                initial={{ width: "0%", x: "-50%" }}
                animate={{ width: "80%", x: "-40%" }}
                transition={{
                  delay: 1.7,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            {/* Intro paragraph with staggered words */}
            <motion.p
              className="max-w-lg text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ delay: 1.8 }}
            >
              {/* Split text into words for staggered animation */}
              {"As a QA Automation Tester with three years of expertise, I specialize in crafting robust, scalable test suites for web and mobile platforms using Playwright, WebdriverIO, Cypress, and GitHub Actions. Let's build rock-solid user experiences together!"
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 2 + i * 0.03,
                      duration: 0.3,
                    }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
            </motion.p>

            {/* Download CV Button with 3D effect */}
            <motion.a
              href="/QA_CV.pdf"
              download
              className="relative inline-block bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-indigo-600 dark:to-purple-600 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-full shadow-lg overflow-hidden group"
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 2.5,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  theme === "dark"
                    ? "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
                    : "0 10px 25px -5px rgba(255, 191, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button text with hover effect */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                Download My CV
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block"
                  animate={{ y: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </motion.svg>
              </span>

              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(to right, #4f46e5, #7c3aed)"
                      : "linear-gradient(to right, #f59e0b, #f97316)",
                }}
                whileHover={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(to right, #7c3aed, #4f46e5)"
                      : "linear-gradient(to right, #f97316, #f59e0b)",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"
                initial={{ left: "-100%" }}
                whileHover={{ left: "100%" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          delay: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-yellow-600 dark:text-indigo-400 text-sm mb-2">Scroll Down</span>
          <motion.div
            className="w-6 h-10 border-2 border-yellow-500 dark:border-indigo-500 rounded-full flex justify-center p-1"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-yellow-500 dark:bg-indigo-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
