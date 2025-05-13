"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Code, Layers } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Define skills with their proficiency levels
const skills = [
  {
    category: "Testing Frameworks",
    items: [
      { name: "Playwright", level: 95 },
      { name: "Cypress", level: 90 },
      { name: "WebdriverIO", level: 85 },
      { name: "Selenium", level: 80 },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    category: "CI/CD & Tools",
    items: [
      { name: "GitHub Actions", level: 90 },
      { name: "Jenkins", level: 85 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
    ],
  },
]

export default function SkillBars() {
  const { ref, isInView } = useScrollAnimation(0.2)
  const { theme } = useTheme()

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
            <Code className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Expertise</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My <span className="text-gradient">Skills</span> & Proficiency
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A detailed breakdown of my technical skills and expertise levels
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mr-4">
                  {categoryIndex === 0 ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 7L12 3L4 7M20 7V17L12 21M20 7L12 11M12 21L4 17V7M12 21V11M4 7L12 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : categoryIndex === 1 ? (
                    <Code className="w-5 h-5" />
                  ) : (
                    <Layers className="w-5 h-5" />
                  )}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-accent/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${skill.level}%` : 0 }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
