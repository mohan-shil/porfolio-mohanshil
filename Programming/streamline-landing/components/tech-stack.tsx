"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Code } from "lucide-react"

// Define tech categories and their items
const technologies = [
  { name: "JavaScript", icon: "/tech/javascript.svg", category: "Language" },
  { name: "TypeScript", icon: "/tech/typescript.svg", category: "Language" },
  { name: "React", icon: "/tech/react.svg", category: "Framework" },
  { name: "Next.js", icon: "/tech/nextjs.svg", category: "Framework" },
  { name: "Playwright", icon: "/tech/Playwright--Streamline-Svg-Logos.svg", category: "Testing" },
  { name: "Selenium", icon: "/tech/selenium-svgrepo-com.svg", category: "Testing" },
  { name: "Cypress", icon: "/tech/cypress.svg", category: "Testing" },
  { name: "WebdriverIO", icon: "/tech/webdriverio.svg", category: "Testing" },
  { name: "GitHub Actions", icon: "/tech/github-actions.svg", category: "DevOps" },
  { name: "Jenkins", icon: "/tech/jenkins.svg", category: "DevOps" },
  { name: "Docker", icon: "/tech/docker.svg", category: "DevOps" },
  { name: "Git", icon: "/tech/git.svg", category: "Tool" },
  { name: "Node.js", icon: "/tech/nodejs.svg", category: "Backend" },
  { name: "Python", icon: "/tech/python.svg", category: "Language" },
  { name: "Jira", icon: "/tech/jira-svgrepo-com.svg", category: "Tool" },
  { name: "Azure", icon: "/tech/azure-icon-svgrepo-com.svg", category: "Tool" },
  { name: "Kubernetes", icon: "/tech/kubernetes-svgrepo-com.svg", category: "DevOps" },
  { name: "CSS", icon: "/tech/Css-3--Streamline-Svg-Logos.svg", category: "DevOps" },
  { name: "Angular", icon: "/tech/angular.svg", category: "Framework" },
  { name: "MondoDB", icon: "/tech/mongodb.svg", category: "DevOps" },
]

export default function TechStack() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="tech-stack" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/5 border border-accent/20 text-accent mb-6">
            <Code className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Technical Skills</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to deliver high-quality testing solutions
          </p>
        </div>

        {/* Tech Carousel - Auto-scroll */}
        <div className="glass rounded-xl py-8 overflow-hidden w-full max-w-full">
          <div className="marquee relative w-full">
            <div className="marquee-track flex items-center gap-6 py-4">
              {technologies.concat(technologies).map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center min-w-[110px] rounded-3xl bg-white/5 p-4 shadow-card transition-all duration-300 hover:bg-white/10"
                >
                  <div className="relative w-12 h-12 mb-3">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center text-foreground dark:text-white">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
