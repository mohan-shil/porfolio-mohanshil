"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Home, Layers, FolderGit2, Briefcase, Mail, Menu, X, Sun, Moon, Terminal } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
  { name: "Tech-Stack", href: "#tech-stack", icon: <Layers className="w-5 h-5" /> },
  { name: "Projects", href: "#projects", icon: <FolderGit2 className="w-5 h-5" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Scan line effect */}
      <div className="scan-line"></div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="#home" className="flex items-center" onClick={() => setActiveSection("home")}>
                <Terminal className="w-6 h-6 mr-2 text-primary" />
                <span className="text-gradient font-mono font-bold text-xl">Mohan@Dev</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "bg-primary text-white"
                      : "hover:bg-primary/10 text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setActiveSection(item.href.substring(1))}
                >
                  <span>{item.icon}</span>
                  <span className="font-mono">{item.name}</span>
                </Link>
              ))}

              {/* Theme toggle in navbar */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 p-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>

            {/* Mobile: Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Theme toggle for mobile */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md bg-primary/10 text-primary"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-primary bg-primary/10"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/90 backdrop-blur-md md:hidden flex flex-col items-center justify-between py-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-20 w-full max-h-[70vh] overflow-y-auto flex flex-col items-center">
              <nav className="flex flex-col items-center space-y-4 py-4 w-full">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full px-6"
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 py-2 px-4 rounded-md text-lg font-mono ${
                        activeSection === item.href.substring(1)
                          ? "bg-primary text-white"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={() => {
                        setActiveSection(item.href.substring(1))
                        setMobileMenuOpen(false)
                      }}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Close button at the bottom */}
            <motion.button
              className="absolute bottom-10 bg-primary/20 text-primary px-6 py-2 rounded-md font-mono"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              [Close Terminal]
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
