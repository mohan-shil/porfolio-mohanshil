"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTypewriter } from "react-simple-typewriter"
import { useTheme } from "next-themes"
import { Download, Github, Linkedin, Mail, MapPin, Terminal, ExternalLink } from "lucide-react"

export default function Hero() {
  const [loop] = useState(true)
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()

  const [text] = useTypewriter({
    words: ["QA Engineer", "Automation Tester", "Functional & Mobile Tester"],
    loop: loop,
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 50,
  })

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Terminal-style header */}
            <motion.div
              className="font-mono text-sm text-primary mb-6 typing-animation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-secondary">root@system:</span>~${" "}
              <span className="text-primary">./initialize_profile.sh</span>
            </motion.div>

            {/* Name with glitch effect */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-mono hacker-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient glitch">Mohan Shil</span>
            </motion.h1>

            {/* Typewriter with terminal cursor */}
            <motion.div
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-secondary">$</span> <span>{text}</span>
              <span className="terminal-cursor"></span>
            </motion.div>

            {/* Description in terminal style */}
            <motion.div
              className="text-lg text-muted-foreground mb-8 max-w-xl font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="mb-2">
                <span className="text-secondary">$</span> <span className="text-primary">cat</span> about.txt
              </div>
              <p>
                As a <span className="text-primary">QA Automation Tester</span> with three years of expertise, I
                specialize in crafting robust, scalable test suites for web and mobile platforms using
                <span className="text-primary"> Playwright</span>, <span className="text-primary">WebdriverIO</span>,
                <span className="text-primary"> Cypress</span>, and <span className="text-primary">GitHub Actions</span>
                .
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 hacker-box"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                <span className="font-mono">Download CV</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary/20 bg-primary/5 text-primary font-medium transition-all hover:bg-primary/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Terminal className="w-5 h-5 mr-2" />
                <span className="font-mono">Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center text-muted-foreground mb-8 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <span>New York, United States</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:mohan@example.com", label: "Email" },
                { icon: <ExternalLink className="w-5 h-5" />, href: "#projects", label: "Projects" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center w-10 h-10 rounded-md border border-primary/20 bg-primary/5 text-primary transition-all hover:bg-primary hover:text-white hacker-box"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image with hacker-style border */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-md overflow-hidden hacker-box"
                animate={{
                  boxShadow: [
                    "0 0 5px #00ff41, inset 0 0 5px #00ff41",
                    "0 0 20px #00ff41, inset 0 0 20px #00ff41",
                    "0 0 5px #00ff41, inset 0 0 5px #00ff41",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Image src="/bg-removed.png" alt="Mohan Shil" fill className="object-cover" priority />

                {/* Overlay with scan lines */}
                
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Terminal prompt at bottom */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 font-mono text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-secondary">$</span> <span className="typing-animation">scroll --direction down</span>
        </motion.div>
      </div>
    </section>
  )
}
