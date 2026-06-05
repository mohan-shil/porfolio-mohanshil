"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Code } from "lucide-react"

const technologies = [
  { name: "JavaScript", icon: "/tech/javascript.svg", category: "Language" },
  { name: "TypeScript", icon: "/tech/typescript.svg", category: "Language" },
  { name: "React", icon: "/tech/react.svg", category: "Framework" },
  { name: "Next.js", icon: "/tech/nextjs.svg", category: "Framework" },
  { name: "Playwright", icon: "/tech/Playwright--Streamline-Svg-Logos.svg", category: "Testing" },
  { name: "GitHub", icon: "/tech/github-actions.svg", category: "DevOps" },
  { name: "Jenkins", icon: "/tech/jenkins.svg", category: "DevOps" },
  { name: "Docker", icon: "/tech/docker.svg", category: "DevOps" },
  { name: "Git", icon: "/tech/git.svg", category: "Tool" },
  { name: "Node.js", icon: "/tech/nodejs.svg", category: "Backend" },
  { name: "Python", icon: "/tech/python.svg", category: "Language" },
  { name: "Jira", icon: "/tech/jira-svgrepo-com.svg", category: "Tool" },
  { name: "Azure", icon: "/tech/azure-icon-svgrepo-com.svg", category: "Cloud" },
  { name: "Kubernetes", icon: "/tech/kubernetes-svgrepo-com.svg", category: "DevOps" },
  { name: "CSS", icon: "/tech/Css-3--Streamline-Svg-Logos.svg", category: "Language" },
  { name: "Angular", icon: "/tech/angular.svg", category: "Framework" },
  { name: "MongoDB", icon: "/tech/mongodb.svg", category: "Database" },
]

const tools = [
  { name: "Postman", icon: "/tech/Postman-Icon--Streamline-Svg-Logos.svg", category: "API Testing" },
  { name: "BrowserStack", icon: "/tech/Browserstack--Streamline-Svg-Logos.svg", category: "Testing" },
  { name: "Datadog", icon: "/tech/datadog.svg", category: "Monitoring" },
  { name: "Google Cloud", icon: "/tech/google-cloud.svg", category: "Cloud" },
  { name: "Slack", icon: "/tech/slack.svg", category: "Communication" },
  { name: "Android", icon: "tech/Android.svg", category: "Platform" },
  { name: "Apple", icon: "/tech/Apple--Streamline-Svg-Logos.svg", category: "Platform" },
  { name: "AWS", icon: "/tech/aws.svg", category: "Cloud" },
  { name: "Selenium", icon: "/tech/selenium-svgrepo-com.svg", category: "Testing" },
  { name: "Cypress", icon: "/tech/cypress.svg", category: "Testing" },
  { name: "WebdriverIO", icon: "/tech/webdriverio.svg", category: "Testing" },
]

export default function TechStack() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const renderTechCard = (
    tech: { name: string; icon: string; category: string },
    index: number
  ) => (
    <div
      key={`${tech.name}-${index}`}
      className="group flex flex-col items-center justify-center min-w-[78px] rounded-3xl border border-border/40 bg-background/70 p-2.5 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/10 hover:shadow-xl sm:min-w-[110px] sm:p-4"
    >
      <div className="relative mb-2 h-8 w-8 transition-transform duration-300 group-hover:scale-110 sm:mb-3 sm:h-12 sm:w-12">
        <Image
          src={tech.icon || "/placeholder.svg"}
          alt={tech.name}
          fill
          className="object-contain"
        />
      </div>

      <span className="text-center text-[0.65rem] font-medium text-foreground transition-colors duration-300 group-hover:text-accent sm:text-sm">
        {tech.name}
      </span>
    </div>
  )

  return (
    <section id="tech-stack" className="relative w-screen overflow-hidden py-20">
      <style jsx>{`
        .marquee-left {
          animation: marquee-left 35s linear infinite;
        }

        .marquee-right {
          animation: marquee-right 28s linear infinite;
        }

        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }

        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-1/3 w-1/3 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-1/3 w-1/3 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-screen">
        <div className="mx-auto mb-16 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-accent">
            <Code className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Technical Skills</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            My <span className="text-gradient">Tech Stack</span>
          </h2>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            Technologies and tools I work with to deliver high-quality testing solutions
          </p>
        </div>

        <div className="relative w-screen overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

          <div className="marquee-left flex w-max items-center gap-3 py-2.5 sm:gap-6 sm:py-4">
            {[...technologies, ...technologies, ...technologies].map(renderTechCard)}
          </div>
        </div>

        <div className="relative mt-6 w-screen overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

          <div className="marquee-right flex w-max items-center gap-3 py-2.5 sm:gap-6 sm:py-4">
            {[...tools, ...tools, ...tools, ...tools, ...tools, ...tools].map(renderTechCard)}
          </div>
        </div>
      </div>
    </section>
  )
}