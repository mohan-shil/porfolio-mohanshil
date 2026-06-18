"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Download, ExternalLink, Github, Linkedin, BriefcaseBusiness } from "lucide-react"

const clients = [
  { name: "OXOS", icon: "/tech/Clients/OXOS logo.png" },
  { name: "InterVuAI", icon: "/tech/Playwright--Streamline-Svg-Logos.svg" },
  { name: "Credvue", icon: "/tech/Browserstack--Streamline-Svg-Logos.svg" },
  { name: "Redecto", icon: "/tech/azure-icon-svgrepo-com.svg" },
  { name: "Subscribed", icon: "/tech/github-actions.svg" },
  { name: "Upwork", icon: "/tech/docker.svg" },
  { name: "Jira", icon: "/tech/jira-svgrepo-com.svg" },
  { name: "BrowserStack", icon: "/tech/Browserstack--Streamline-Svg-Logos.svg" },
]

const techStack = [
  { name: "JavaScript", icon: "/tech/javascript.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "Playwright", icon: "/tech/Playwright--Streamline-Svg-Logos.svg" },
  { name: "GitHub", icon: "/tech/github-actions.svg" },
  { name: "Jenkins", icon: "/tech/jenkins.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "Git", icon: "/tech/git.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "Python", icon: "/tech/python.svg" },
  { name: "Jira", icon: "/tech/jira-svgrepo-com.svg" },
  { name: "Azure", icon: "/tech/azure-icon-svgrepo-com.svg" },
  { name: "Kubernetes", icon: "/tech/kubernetes-svgrepo-com.svg" },
  { name: "CSS", icon: "/tech/Css-3--Streamline-Svg-Logos.svg" },
  { name: "Angular", icon: "/tech/angular.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "Postman", icon: "/tech/Postman-Icon--Streamline-Svg-Logos.svg" },
  { name: "BrowserStack", icon: "/tech/Browserstack--Streamline-Svg-Logos.svg" },
  { name: "Datadog", icon: "/tech/datadog.svg" },
  { name: "Google Cloud", icon: "/tech/google-cloud.svg" },
  { name: "Slack", icon: "/tech/slack.svg" },
  { name: "Android", icon: "/tech/Android.svg" },
  { name: "Apple", icon: "/tech/Apple--Streamline-Svg-Logos.svg" },
  { name: "AWS", icon: "/tech/aws.svg" },
  { name: "Selenium", icon: "/tech/selenium-svgrepo-com.svg" },
  { name: "Cypress", icon: "/tech/cypress.svg" },
  { name: "WebdriverIO", icon: "/tech/webdriverio.svg" },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  const [text] = useTypewriter({
    words: [
      "QA Engineer",
      "Automation Tester",
      "Playwright Specialist",
      "Mobile Testing Expert",
      "CI/CD Enthusiast",
    ],
    loop: true,
    delaySpeed: 1800,
    typeSpeed: 65,
    deleteSpeed: 45,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute left-[-4rem] top-16 sparkle sparkle-blue" />
      <div className="absolute right-[-5rem] top-1/3 sparkle sparkle-pink" />
      <div className="absolute inset-x-0 top-0 h-72 bg-white/5 blur-3xl" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/10 to-transparent opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[60fr_40fr] lg:items-center">
          <motion.div
            className="flex flex-col gap-6 lg:flex-row lg:items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative h-[220px] w-[220px] shrink-0 overflow-hidden rounded-full border border-primary/30 bg-primary/10 shadow-2xl md:h-[260px] md:w-[260px]">
              <Image
                src="/Professional-picture.jpg"
                alt="Mohan Shil"
                width={650}
                height={650}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <p className="mb-1 text-base font-semibold text-foreground dark:text-white">
                Hi, I’m
              </p>

              <h1 className="mb-1 text-4xl font-semibold leading-tight text-foreground dark:text-white md:text-5xl">
                Mohan <span className="text-gradient">Shil</span>
              </h1>

              <h2 className="mb-4 text-xl font-semibold text-foreground/90 dark:text-white/90">
                QA Automation Engineer
              </h2>

              <p className="mb-5 max-w-md text-sm leading-6 text-foreground/75 dark:text-muted-foreground">
                Building reliable software through automation, CI/CD, and quality engineering.
              </p>

              <div className="mb-5 text-xl font-medium text-foreground dark:text-white">
                <span className="inline-flex items-center gap-3">
                  <span className="text-primary">&lt;</span>
                  <span>{text}</span>
                  <Cursor cursorColor="#FDE68A" />
                  <span className="text-primary">/&gt;</span>
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-primary/10 dark:text-white"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View My Work
                </motion.a>

                <motion.a
                  href="/QA_CV.pdf"
                  download
                  className="button-glow inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-primary/90"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="grid gap-5">
              <div className="grid min-h-[12px] grid-cols-2 gap-4">
                <div className="flex flex-col justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
                  <p className="text-4xl font-bold text-gradient">4+</p>
                  <p className="mt-2 text-sm text-foreground/70 dark:text-white/60">
                    Years
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
                  <p className="text-4xl font-bold text-gradient">20+</p>
                  <p className="mt-2 text-sm text-foreground/70 dark:text-white/60">
                    Clients
                  </p>
                </div>
              </div>

              <div className="h-[166px] rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                <p className="text-4xl font-bold text-gradient">35+</p>
                <p className="mt-2 text-sm text-foreground/70 dark:text-white/60">
                  Projects
                </p>
              </div>
            </div>

            <div className="row-span-2 h-[296px] rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-primary/10 via-white/[0.04] to-accent/10 p-6 backdrop-blur-md">
              <div className="flex h-full flex-col justify-center">
                <p className="text-5xl font-bold text-gradient">98%</p>
                <p className="mt-3 text-sm leading-6 text-foreground/70 dark:text-white/60">
                  Confidence
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack + Social Bento */}
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr_1.7fr]">
          <div className="lg:col-span-3">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-foreground/60 dark:text-white/50">
              Tech Stack
            </p>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] py-2 backdrop-blur-md">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

              <div className="tech-marquee flex w-max items-center">
                {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    title={tech.name}
                    className="mx-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://www.upwork.com/"
            target="_blank"
            rel="noreferrer"
            className="group row-span-2 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-primary/10 via-white/[0.04] to-accent/10 p-7 backdrop-blur-md transition hover:border-primary/30 lg:col-start-4 lg:row-span-2"
          >
            <div className="flex h-full min-h-[250px] flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.25em] text-primary">
                Freelance profile
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-foreground dark:text-white">
                Upwork
              </h3>
              <p className="mt-3 text-sm text-foreground/65 dark:text-white/60">
                QA testing, automation, mobile testing, and release support.
              </p>
            </div>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition hover:border-primary/30 hover:bg-primary/5"
          >
            <Github className="mb-5 h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold text-foreground dark:text-white">
              GitHub
            </h3>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition hover:border-primary/30 hover:bg-primary/5"
          >
            <Linkedin className="mb-5 h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold text-foreground dark:text-white">
              LinkedIn
            </h3>
          </a>

          <a
            href="#consultation"
            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition hover:border-primary/30 hover:bg-primary/5"
          >
            <BriefcaseBusiness className="mb-5 h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold text-foreground dark:text-white">
              Consultancy
            </h3>
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-6 w-full border-t border-white/10 bg-background/30 py-3 backdrop-blur-md">
        <div className="mb-2 flex items-center justify-center gap-4 px-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
          <p className="text-center text-[11px] uppercase tracking-[0.28em] text-foreground/50 dark:text-white/50">
            Clients I Have Worked With
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="client-marquee flex w-max items-center">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-6 flex min-w-[150px] items-center justify-center gap-3 opacity-75 transition hover:opacity-100"
              >
                <Image
                  src={client.icon}
                  alt={client.name}
                  width={client.name === "OXOS" ? 120 : 34}
                  height={client.name === "OXOS" ? 60 : 34}
                  className={
                    client.name === "OXOS"
                      ? "h-12 w-auto object-contain"
                      : "h-8 w-8 object-contain"
                  }
                />
                <span className="text-sm font-medium text-foreground/70 dark:text-white/70">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-marquee {
          animation: client-marquee 28s linear infinite;
        }

        .tech-marquee {
          animation: tech-marquee 36s linear infinite;
        }

        @keyframes client-marquee {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes tech-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}