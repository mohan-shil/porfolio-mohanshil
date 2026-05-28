"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Download, ExternalLink } from "lucide-react"

const heroMotion = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const cardMotion = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

const textMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const [loop] = useState(true)
  const [mounted, setMounted] = useState(false)

  const [text] = useTypewriter({
    words: ["QA Engineer", "Automation Tester", "Playwright Specialist", "Mobile Testing Expert", "CI/CD Enthusiast", "Test Architect"],
    loop,
    delaySpeed: 2200,
    typeSpeed: 70,
    deleteSpeed: 50,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden px-4 pt-24 pb-16"
      initial="hidden"
      animate="visible"
      variants={heroMotion}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute left-[-4rem] top-16 sparkle sparkle-blue" />
      <div className="absolute right-[-5rem] top-1/3 sparkle sparkle-pink" />
      <div className="absolute inset-x-0 top-0 h-80 w-full rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/10 to-transparent opacity-50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={heroMotion}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mb-6 text-sm text-primary"
              variants={textMotion}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <span className="mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              built for modern QA teams
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground dark:text-white mb-6 leading-tight"
              variants={textMotion}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Crafting reliable software with modern
              </motion.span>
              <motion.span
                className="block text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                quality systems.
              </motion.span>
            </motion.h1>

            <motion.p
              className="max-w-2xl text-lg leading-8 text-foreground/80 dark:text-muted-foreground mb-10"
              variants={textMotion}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              I design polished QA journeys, automation pipelines, and test frameworks for web and mobile applications.
              My focus is on fast feedback, stability, and clear results for engineering teams.
            </motion.p>

            <motion.div
              className="relative mb-10 flex h-16 items-center justify-center overflow-hidden rounded-full bg-slate-950/5 px-4 text-sm text-foreground/80 dark:bg-white/5 dark:text-muted-foreground"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <motion.span
                className="absolute left-1/2 top-1/2 h-1 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary to-accent opacity-40 blur-xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <span className="relative z-10">Delivering smarter QA, faster releases, and better confidence.</span>
            </motion.div>

            <motion.div
              className="mb-10 text-2xl sm:text-3xl font-medium text-foreground dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <span className="inline-flex items-center gap-3">
                <span className="text-primary">&lt;</span>
                <span>{text}</span>
                <Cursor cursorColor="#FDE68A" />
                <span className="text-primary">/&gt;</span>
              </span>
            </motion.div>

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
            initial="hidden"
            animate="visible"
            variants={cardMotion}
            transition={{ duration: 0.75, delay: 0.35 }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10 blur-3xl" />
              <motion.div
                className="relative overflow-hidden rounded-[2rem] glass hero-card"
                whileHover={{ y: -8, rotateZ: 0.5 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Image src="/Professional-picture.jpg" alt="Mohan Shil" width={640} height={640} className="object-cover w-full h-full" priority />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-secondary/70 mb-2">QA Portfolio</p>
                  <h2 className="text-2xl font-semibold text-white">Reliable test delivery from concept to launch</h2>
                </div>
              </motion.div>
              <motion.div
                className="absolute -right-8 top-8 h-16 w-16 rounded-full border border-white/20 bg-white/5 blur-2xl"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
