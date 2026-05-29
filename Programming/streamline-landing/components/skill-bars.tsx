"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart3,
  Box,
  CheckCircle2,
  Code,
  Cog,
  Globe,
  Layers,
  Radar,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const radarSkills = [
  {
    label: "Testing Frameworks",
    shortLabel: "Testing",
    value: 95,
    color: "#ff4fa3",
    tools: ["Playwright", "Cypress", "WebdriverIO", "Selenium"],
    description: "End-to-end, regression, smoke, and cross-browser testing.",
  },
  {
    label: "Programming Languages",
    shortLabel: "Code",
    value: 82,
    color: "#22d3ee",
    tools: ["JavaScript", "TypeScript", "Python", "Java"],
    description: "Automation scripts, test utilities, and frontend QA support.",
  },
  {
    label: "CI/CD & Tools",
    shortLabel: "CI/CD",
    value: 88,
    color: "#a855f7",
    tools: ["GitHub Actions", "Jenkins", "Docker", "AWS"],
    description: "Pipeline-ready testing, reporting, and release validation.",
  },
  {
    label: "DevOps",
    shortLabel: "DevOps",
    value: 72,
    color: "#3b82f6",
    tools: ["Docker", "Kubernetes", "GitHub Actions", "Cloud Basics"],
    description: "Containerized test execution and environment awareness.",
  },
  {
    label: "Documentation",
    shortLabel: "Docs",
    value: 78,
    color: "#c084fc",
    tools: ["Test Cases", "Bug Reports", "QA Reports", "Client Updates"],
    description: "Clear bug reports, test documentation, and client updates.",
  },
]

const skillBreakdown = [
  {
    title: "Testing Frameworks",
    value: 95,
    color: "from-pink-500 to-pink-400",
    glow: "group-hover:shadow-pink-500/20",
    iconColor: "text-pink-400",
    icon: Box,
    tools: ["Playwright", "Cypress", "WebdriverIO", "Selenium"],
  },
  {
    title: "Programming Languages",
    value: 82,
    color: "from-cyan-400 to-cyan-500",
    glow: "group-hover:shadow-cyan-500/20",
    iconColor: "text-cyan-400",
    icon: Code,
    tools: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "CI/CD & Tools",
    value: 88,
    color: "from-purple-500 to-violet-500",
    glow: "group-hover:shadow-purple-500/20",
    iconColor: "text-purple-400",
    icon: Layers,
    tools: ["GitHub Actions", "Jenkins", "Docker", "AWS"],
  },
  {
    title: "DevOps",
    value: 72,
    color: "from-blue-500 to-sky-400",
    glow: "group-hover:shadow-blue-500/20",
    iconColor: "text-blue-400",
    icon: Cog,
    tools: ["Docker", "Kubernetes", "GitHub Actions", "Cloud Basics"],
  },
  {
    title: "Documentation",
    value: 78,
    color: "from-purple-400 to-fuchsia-500",
    glow: "group-hover:shadow-fuchsia-500/20",
    iconColor: "text-fuchsia-400",
    icon: Globe,
    tools: ["Test Cases", "Bug Reports", "QA Reports", "Client Updates"],
  },
]

const clampValue = (value: number) => Math.max(0, Math.min(100, value))

function SkillRadar({ isInView }: { isInView: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const size = 680
  const center = size / 2
  const maxRadius = 210
  const labelRadius = 290
  const levels = [20, 40, 60, 80, 100]

  const getPoint = (index: number, value: number, radiusBase = maxRadius) => {
    const angle = (Math.PI * 2 * index) / radarSkills.length - Math.PI / 2
    const radius = (clampValue(value) / 100) * radiusBase

    return {
      angle,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }

  const points = radarSkills.map((skill, index) => {
    const point = getPoint(index, skill.value)

    return {
      ...point,
      labelX: center + labelRadius * Math.cos(point.angle),
      labelY: center + labelRadius * Math.sin(point.angle),
      ...skill,
    }
  })

  const polygonPoints = points.map((point) => `${point.x},${point.y}`).join(" ")
  const activeSkill = activeIndex !== null ? radarSkills[activeIndex] : null
  const activePoint = activeIndex !== null ? points[activeIndex] : null

  return (
    <div
      className="relative flex min-h-[620px] items-center justify-center overflow-visible"
      onMouseLeave={() => setActiveIndex(null)}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[720px] overflow-visible drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]"
      >
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4fa3" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          <radialGradient id="radarFill">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.24" />
            <stop offset="55%" stopColor="#a855f7" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#ff4fa3" stopOpacity="0.12" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static reference level rings */}
        {levels.map((level) => {
          const radius = (level / 100) * maxRadius
          const levelPoints = radarSkills
            .map((_, index) => {
              const point = getPoint(index, level)
              return `${point.x},${point.y}`
            })
            .join(" ")

          return (
            <g key={level}>
              <polygon
                points={levelPoints}
                fill="none"
                stroke="rgba(148, 163, 184, 0.2)"
                strokeWidth={level === 100 ? "1.5" : "1"}
              />

              <text
                x={center + 8}
                y={center - radius + 5}
                className="fill-slate-400 text-[11px]"
              >
                {level}%
              </text>
            </g>
          )
        })}

        {/* Static axis lines */}
        {radarSkills.map((_, index) => {
          const angle = (Math.PI * 2 * index) / radarSkills.length - Math.PI / 2

          return (
            <line
              key={index}
              x1={center}
              y1={center}
              x2={center + maxRadius * Math.cos(angle)}
              y2={center + maxRadius * Math.sin(angle)}
              stroke="rgba(148, 163, 184, 0.16)"
              strokeWidth="1"
            />
          )
        })}

        {/* Slow animated glow only */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
          opacity="0.35"
        >
          <circle
            cx={center}
            cy={center}
            r={maxRadius + 18}
            fill="none"
            stroke="url(#radarGradient)"
            strokeWidth="1"
            strokeDasharray="10 14"
          />
        </motion.g>

        {/* Actual value graph */}
        <motion.polygon
          points={polygonPoints}
          fill="url(#radarFill)"
          stroke="url(#radarGradient)"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.75,
          }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ transformOrigin: "center" }}
        />

        {/* Value points */}
        {points.map((point, index) => (
          <g
            key={point.label}
            className="cursor-pointer"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <motion.circle
              cx={point.x}
              cy={point.y}
              r={activeIndex === index ? 22 : 14}
              fill={point.color}
              opacity="0.18"
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.2 }}
            />

            <motion.circle
              cx={point.x}
              cy={point.y}
              r={activeIndex === index ? 11 : 8}
              fill={point.color}
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1"
              initial={{ scale: 0 }}
              animate={{ scale: isInView ? 1 : 0 }}
              transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
            />
          </g>
        ))}

        {/* Labels */}
        {points.map((point, index) => (
          <g
            key={`${point.label}-label`}
            className="cursor-pointer"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <text
              x={point.labelX}
              y={point.labelY - 8}
              textAnchor="middle"
              className="fill-white text-[15px] font-bold"
            >
              {point.shortLabel}
            </text>

            <rect
              x={point.labelX - 32}
              y={point.labelY + 8}
              width="64"
              height="26"
              rx="13"
              fill={activeIndex === index ? "rgba(255,255,255,0.12)" : "rgba(168,85,247,0.13)"}
              stroke={point.color}
              strokeOpacity={activeIndex === index ? "1" : "0.55"}
            />

            <text
              x={point.labelX}
              y={point.labelY + 26}
              textAnchor="middle"
              fill={point.color}
              className="text-[13px] font-bold"
            >
              {point.value}%
            </text>
          </g>
        ))}
      </svg>

      <AnimatePresence>
        {activeSkill && activePoint && (
          <motion.div
            key={activeSkill.label}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none absolute z-30 w-[280px] rounded-3xl border border-white/10 bg-slate-950/85 p-4 shadow-[0_0_40px_rgba(34,211,238,0.18)] backdrop-blur-xl"
            style={{
              left: `calc(50% + ${(activePoint.x - center) * 0.72}px)`,
              top: `calc(50% + ${(activePoint.y - center) * 0.72}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-white">{activeSkill.label}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {activeSkill.description}
                </p>
              </div>

              <div
                className="rounded-xl border px-3 py-1 text-sm font-bold"
                style={{
                  color: activeSkill.color,
                  borderColor: `${activeSkill.color}66`,
                  backgroundColor: `${activeSkill.color}18`,
                }}
              >
                {activeSkill.value}%
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {activeSkill.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] text-white/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SkillBars() {
  const { ref, isInView } = useScrollAnimation(0.2)

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_55%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/25 bg-pink-500/10 px-5 py-2 text-pink-400">
            <Code className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Expertise</span>
          </div>

          <h2 className="mb-5 text-3xl font-bold sm:text-5xl">
            My <span className="text-gradient">Skills</span> & Proficiency
          </h2>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            A detailed breakdown of my technical skills and expertise levels
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-visible border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="mb-2 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400">
                  <Radar className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Skill Radar</h3>
                  <p className="text-muted-foreground">Hover each point to explore skill details</p>
                </div>
              </div>

              <SkillRadar isInView={isInView} />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400">
                  <BarChart3 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Skill Breakdown</h3>
                  <p className="text-sm text-muted-foreground">Hover to reveal related tools</p>
                </div>
              </div>

              <div className="space-y-3">
                {skillBreakdown.map((skill, index) => {
                  const Icon = skill.icon

                  return (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
                      transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                      className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-2xl ${skill.glow}`}
                    >
                      <div className="grid grid-cols-[42px_1fr] items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110">
                          <Icon className={`h-5 w-5 ${skill.iconColor}`} />
                        </div>

                        <div>
                          <div className="mb-1.5 flex justify-between">
                            <span className="text-sm font-semibold sm:text-base">{skill.title}</span>
                            <span className={skill.iconColor}>{skill.value}%</span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: isInView ? `${skill.value}%` : 0 }}
                              transition={{
                                duration: 1.4,
                                delay: 0.4 + index * 0.12,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <div className="flex flex-wrap gap-2 pl-14 pt-3">
                            {skill.tools.map((tool) => (
                              <span
                                key={tool}
                                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground group-hover:text-white"
                              >
                                <CheckCircle2 className={`h-3 w-3 ${skill.iconColor}`} />
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 p-4 shadow-[0_0_35px_rgba(34,211,238,0.08)]">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(from_180deg,#ff4fa3_0%,#a855f7_45%,#22d3ee_83%,rgba(255,255,255,0.10)_83%)] p-[3px] shadow-[0_0_30px_rgba(168,85,247,0.25)]">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-slate-900/80 via-purple-950/60 to-cyan-950/50">
                      <span className="text-xl font-bold text-white">83%</span>
                      <span className="text-[9px] uppercase tracking-widest text-cyan-300">Overall</span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="mb-1 text-base font-bold text-white">Overall Proficiency</h4>
                    <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                      Strong foundation across testing, automation, and delivery workflows.
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-2.5 py-1 text-[11px] text-pink-300">
                        QA Automation
                      </span>
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-300">
                        CI/CD Ready
                      </span>
                      <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-300">
                        Web Testing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}