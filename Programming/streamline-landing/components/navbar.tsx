"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Home, Layers, FolderGit2, Briefcase, Mail, Menu, X, Sun, Moon, Terminal } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
  { name: "Tech Stack", href: "#tech-stack", icon: <Layers className="w-5 h-5" /> },
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

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const sections = navItems.map((item) => item.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120) {
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 border-b border-white/10 transition-all duration-300 backdrop-blur-xl ${
          isScrolled ? "bg-background/95 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="#home" className="flex items-center gap-3" onClick={() => setActiveSection("home")}>
                <Terminal className="w-6 h-6 text-secondary" />
                <span className="text-gradient font-semibold text-lg">Mohan Shil</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:bg-white/10 hover:text-primary"
                  }`}
                  onClick={() => setActiveSection(item.href.substring(1))}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 rounded-full bg-white/10 p-2 text-primary transition hover:bg-white/15"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full bg-white/10 p-2 text-primary transition hover:bg-white/15"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-full bg-white/10 p-2 text-primary transition hover:bg-white/15"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-4 px-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-full px-5 py-3 text-lg font-medium transition ${
                      activeSection === item.href.substring(1)
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-primary hover:bg-white/10"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
