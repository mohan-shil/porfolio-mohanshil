"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTypewriter } from "react-simple-typewriter"
import { Download, Terminal, ExternalLink } from "lucide-react"

export default function Hero() {
  const [loop] = useState(true)
  const [mounted, setMounted] = useState(false)

  const [text] = useTypewriter({
    words: ["QA Engineer", "Automation Tester", "Functional & Mobile Tester"],
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
    <section id="home" className="relative overflow-hidden px-4 pt-24 pb-16">
      <div className="absolute left-[-4rem] top-16 sparkle sparkle-blue" />
      <div className="absolute right-[-5rem] top-1/3 sparkle sparkle-pink" />
      <div className="absolute inset-x-0 top-0 h-80 w-full rounded-full bg-white/5 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground dark:text-white mb-6">
              Crafting reliable software with modern <span className="text-gradient">quality systems</span>.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-foreground/80 dark:text-muted-foreground mb-10">
              I design polished QA journeys, automation pipelines, and test frameworks for web and mobile applications.
              My focus is on fast feedback, stability, and clear results for engineering teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.a
                href="/QA_CV.pdf"
                download
                className="button-glow inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary/90"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-foreground transition hover:border-secondary/40 hover:bg-secondary/10 dark:text-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] glass hero-card">
                <Image src="/bg-removed.png" alt="Mohan Shil" width={640} height={640} className="object-cover w-full h-full" priority />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-secondary/70 mb-2">QA Portfolio</p>
                  <h2 className="text-2xl font-semibold text-white">Reliable test delivery from concept to launch</h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
