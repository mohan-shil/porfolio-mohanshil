"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface Card3DProps {
  children: ReactNode
  className?: string
  depth?: number
  hoverScale?: number
}

export default function Card3D({ children, className = "", depth = 10, hoverScale = 1.05 }: Card3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 5
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * 5

    setRotateX(rotateX)
    setRotateY(rotateY)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative preserve-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setScale(hoverScale)}
      onMouseLeave={() => {
        setRotateX(0)
        setRotateY(0)
        setScale(1)
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}

      {/* Shadow element */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-black/10 -z-10"
        style={{
          transform: `translateZ(-${depth}px)`,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: rotateX * 0.8,
          rotateY: rotateY * 0.8,
          scale: scale * 0.9,
        }}
      />
    </motion.div>
  )
}
