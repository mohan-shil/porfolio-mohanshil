"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useTheme } from "next-themes"

interface RotatingCubeProps {
  size?: number
  className?: string
}

export default function RotatingCube({ size = 100, className = "" }: RotatingCubeProps) {
  const controls = useAnimation()
  const { theme } = useTheme()

  useEffect(() => {
    controls.start({
      rotateX: [0, 360],
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    })
  }, [controls])

  const faceStyle = {
    position: "absolute" as const,
    width: `${size}px`,
    height: `${size}px`,
    backfaceVisibility: "hidden" as const,
  }

  const primaryColor = theme === "dark" ? "rgba(99, 102, 241, 0.2)" : "rgba(6, 182, 212, 0.2)"
  const accentColor = theme === "dark" ? "rgba(79, 70, 229, 0.2)" : "rgba(59, 130, 246, 0.2)"

  return (
    <div className={`perspective-1000 ${className}`} style={{ width: `${size}px`, height: `${size}px` }}>
      <motion.div
        className="relative preserve-3d w-full h-full"
        animate={controls}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front face */}
        <div
          style={{
            ...faceStyle,
            transform: `translateZ(${size / 2}px)`,
            background: primaryColor,
            border: `1px solid ${accentColor}`,
          }}
          className="rounded-lg glass"
        />

        {/* Back face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
            background: accentColor,
            border: `1px solid ${primaryColor}`,
          }}
          className="rounded-lg glass"
        />

        {/* Right face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
            background: primaryColor,
            border: `1px solid ${accentColor}`,
          }}
          className="rounded-lg glass"
        />

        {/* Left face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
            background: accentColor,
            border: `1px solid ${primaryColor}`,
          }}
          className="rounded-lg glass"
        />

        {/* Top face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
            background: primaryColor,
            border: `1px solid ${accentColor}`,
          }}
          className="rounded-lg glass"
        />

        {/* Bottom face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
            background: accentColor,
            border: `1px solid ${primaryColor}`,
          }}
          className="rounded-lg glass"
        />
      </motion.div>
    </div>
  )
}
