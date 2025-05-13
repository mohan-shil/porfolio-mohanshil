"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Briefcase, Calendar, CheckCircle, Building } from "lucide-react"
import RotatingCube from "@/components/rotating-cube"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    title: "Senior QA Automation Engineer",
    company: "TechCorp Solutions",
    period: "Jan 2022 - Present",
    description: [
      "Lead a team of 5 QA engineers in implementing test automation strategies",
      "Reduced regression testing time by 70% through implementing Playwright-based automation",
      "Established CI/CD pipelines with GitHub Actions for continuous testing",
      "Implemented mobile testing framework using Appium for cross-platform testing",
    ],
  },
  {
    title: "QA Automation Engineer",
    company: "Digital Innovations Inc.",
    period: "Mar 2020 - Dec 2021",
    description: [
      "Developed and maintained automated test suites using Cypress and WebdriverIO",
      "Created API testing framework using Postman and Newman",
      "Collaborated with developers to implement BDD testing using Cucumber",
      "Performed cross-browser and cross-device testing for web applications",
    ],
  },
  {
    title: "Junior QA Tester",
    company: "WebSoft Technologies",
    period: "Jun 2019 - Feb 2020",
    description: [
      "Executed manual test cases for web and mobile applications",
      "Participated in agile ceremonies and contributed to test planning",
      "Documented bugs and verified fixes in JIRA",
      "Assisted in creating test documentation and test plans",
    ],
  },
]

export default function Experience() {
  const { ref, isInView } = useScrollAnimation(0.1)
  const { theme } = useTheme()

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            <Briefcase className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Career Path</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            My professional journey in quality assurance and test automation
          </motion.p>
        </motion.div>

        {/* Add the rotating cube as a decorative element */}
        <div className="relative">
          <RotatingCube size={80} className="absolute -top-10 -left-10 opacity-50 z-0" />

          <div className="max-w-4xl mx-auto relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative pl-8 pb-12 ${
                  index !== experiences.length - 1 ? "border-l-2 border-accent/30" : "border-l-2 border-transparent"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.5 }}
                />

                <motion.div
                  className="rounded-lg p-6 glass"
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <motion.h3 className="text-xl font-bold flex items-center" whileHover={{ x: 3 }}>
                      <span className="text-gradient">{exp.title}</span>
                    </motion.h3>
                    <motion.div className="flex items-center mt-2 sm:mt-0 text-accent" whileHover={{ scale: 1.05 }}>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </motion.div>
                  </div>

                  <motion.div className="flex items-center mb-4" whileHover={{ x: 3 }}>
                    <Building className="w-5 h-5 mr-2 text-accent" />
                    <span className="font-medium">{exp.company}</span>
                  </motion.div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + i * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0 text-accent" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <RotatingCube size={60} className="absolute -bottom-10 -right-10 opacity-50 z-0" />
        </div>
      </div>
    </section>
  )
}
