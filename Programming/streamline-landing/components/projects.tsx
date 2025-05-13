"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { ExternalLink, Github, FolderGit2, Code, Search, Tag } from "lucide-react"
import Card3D from "@/components/3d-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "E-commerce Test Automation Framework",
    description:
      "Developed a comprehensive test automation framework for an e-commerce platform using Playwright and TypeScript.",
    image: "/ecommerce-dashboard.png",
    tags: ["Playwright", "TypeScript", "GitHub Actions", "Page Object Model"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    title: "Mobile Banking App Testing",
    description:
      "Created an Appium-based test suite for a mobile banking application, covering both Android and iOS platforms.",
    image: "/mobile-banking-app.png",
    tags: ["Appium", "WebdriverIO", "JavaScript", "Jenkins"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    title: "API Testing Framework",
    description:
      "Built a robust API testing framework using REST Assured and Java for a microservices-based application.",
    image: "/placeholder.svg?key=tuztz",
    tags: ["REST Assured", "Java", "TestNG", "Docker"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    title: "Performance Testing Suite",
    description: "Implemented performance testing using JMeter and Gatling for a high-traffic web application.",
    image: "/placeholder.svg?key=4ub2x",
    tags: ["JMeter", "Gatling", "Grafana", "K6"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
]

const filterCategories = ["All", "Playwright", "Appium", "API", "Performance"]

export default function Projects() {
  const { ref, isInView } = useScrollAnimation(0.1)
  const [activeFilter, setActiveFilter] = useState("All")
  const { theme } = useTheme()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.some((tag) => tag.includes(activeFilter)))

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-accent/5 border border-accent/20 text-accent mb-6"
          >
            <FolderGit2 className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Portfolio</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Here are some of my notable testing projects that showcase my skills and expertise
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {filterCategories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-accent text-white"
                  : "bg-accent/5 text-muted-foreground hover:bg-accent/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              {category === "All" ? (
                <Search className="w-4 h-4 inline-block mr-1" />
              ) : (
                <Tag className="w-4 h-4 inline-block mr-1" />
              )}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card3D className="rounded-xl glass">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      style={{
                        transform: hoveredProject === index ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Project title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded text-xs bg-accent/20 text-white backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 rounded text-xs bg-accent/20 text-white backdrop-blur-sm">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent"
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent"
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* More projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-accent/20 bg-accent/5 text-accent font-medium hover:bg-accent/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-5 h-5 mr-2" />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
