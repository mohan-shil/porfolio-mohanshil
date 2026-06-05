"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Download, ExternalLink, CheckCircle, Bug, Code2 } from "lucide-react"

const clients = [
  { name: "OXOS", icon: "/tech/Clients/OXOS logo.png" },
  { name: "InterVuAI", icon: "/tech/Clients/InterVuAI logo.png" },
  { name: "Credvue", icon: "/tech/Clients/Credvue logo.png" },
  { name: "Redecto", icon: "/tech/Clients/Redecto logo.png" },
  { name: "Subscribed", icon: "/tech/Clients/Subscribed logo.png" },
  { name: "Upwork", icon: "/tech/Clients/Upwork logo.png" },
  { name: "Jira", icon: "/clients/jira.svg" },
  { name: "BrowserStack", icon: "/clients/browserstack.svg" },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  const [text] = useTypewriter({
    words: ["QA Engineer", "Automation Tester", "Playwright Specialist", "Mobile Testing Expert", "CI/CD Enthusiast"],
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
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 flex flex-col justify-between"
    >
      <div className="absolute left-[-4rem] top-16 sparkle sparkle-blue" />
      <div className="absolute right-[-5rem] top-1/3 sparkle sparkle-pink" />
      <div className="absolute inset-x-0 top-0 h-72 bg-white/5 blur-3xl" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/10 to-transparent opacity-50" />

      <div className="container mx-auto max-w-6xl relative z-10 w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mb-5 text-sm text-primary">
              <span className="mr-3 h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              modern QA engineer
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground dark:text-white mb-5 leading-tight">
              Crafting reliable software with modern{" "}
              <span className="text-gradient">quality systems.</span>
            </h1>

            <p className="max-w-xl text-base md:text-lg leading-7 text-foreground/75 dark:text-muted-foreground mb-6">
              I build QA workflows, automation pipelines, and test frameworks for web and mobile applications.
            </p>

            <div className="mb-7 text-2xl sm:text-3xl font-medium text-foreground dark:text-white">
              <span className="inline-flex items-center gap-3">
                <span className="text-primary">&lt;</span>
                <span>{text}</span>
                <Cursor cursorColor="#FDE68A" />
                <span className="text-primary">/&gt;</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/QA_CV.pdf"
                download
                className="button-glow inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary/90"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-foreground transition hover:border-secondary/40 hover:bg-secondary/10 dark:text-white"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Subtle QA background animation */}
              <motion.div
                className="absolute -left-10 top-12 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-primary/70 backdrop-blur-md"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <CheckCircle className="h-5 w-5" />
              </motion.div>

              <motion.div
                className="absolute -right-8 top-28 rounded-2xl border border-accent/20 bg-accent/5 px-4 py-3 text-accent/70 backdrop-blur-md"
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <Bug className="h-5 w-5" />
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-24 rounded-2xl border border-secondary/20 bg-secondary/5 px-4 py-3 text-secondary/70 backdrop-blur-md"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
              >
                <Code2 className="h-5 w-5" />
              </motion.div>

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10 blur-3xl" />

              <motion.div
                className="relative overflow-hidden rounded-[2rem] glass hero-card"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Image
                  src="/Professional-picture.jpg"
                  alt="Mohan Shil"
                  width={640}
                  height={640}
                  className="object-cover w-full h-full"
                  priority
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-secondary/70 mb-2">
                    QA Portfolio
                  </p>
                  <h2 className="text-xl font-semibold text-white">
                    Reliable test delivery from concept to launch
                  </h2>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Width Hero Footer Client Scroller */}
      <div className="relative z-10 mt-10 w-full border-t border-white/10 bg-background/30 py-2 backdrop-blur-md">
        <div className="mb-2 flex items-center justify-center gap-4 px-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
          <p className="text-center text-[11px] uppercase tracking-[0.28em] text-foreground/50 dark:text-white/50">
            Clients I Have Worked With
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="client-marquee flex w-max items-center">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-4 flex min-w-[140px] items-center justify-center gap-2 py-0 opacity-75 transition hover:opacity-100"
              >
                <Image
                  src={client.icon}
                  alt={client.name}
                  width={client.name === "OXOS" ? 120 : 26}
                  height={client.name === "OXOS" ? 120 : 26}
                  className={
                    client.name === "OXOS"
                      ? "h-28 w-28 object-contain mt-0 my-0"
                      : "h-6 w-6 object-contain mt-0 my-0"
                  }
                />
                <span className="text-sm leading-none font-medium text-foreground/70 dark:text-white/70">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-marquee {
          animation: client-marquee 26s linear infinite;
        }

        @keyframes client-marquee {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}