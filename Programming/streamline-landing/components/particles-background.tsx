"use client"

import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const animationRef = useRef<number>()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize particles
    const initParticles = () => {
      const particlesArray: Particle[] = []
      const numberOfParticles = Math.min(window.innerWidth, window.innerHeight) * 0.05

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 1
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = (Math.random() - 0.5) * 0.5
        const speedY = (Math.random() - 0.5) * 0.5
        const opacity = Math.random() * 0.5 + 0.1

        const colors =
          theme === "dark"
            ? ["#F59E0B", "#FBBF24", "#FCD34D", "#D97706"] // Yellow/orange for dark mode
            : ["#6366F1", "#4F46E5", "#4338CA", "#3730A3"] // Indigo/purple for light mode

        const color = colors[Math.floor(Math.random() * colors.length)]

        particlesArray.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color,
          opacity,
        })
      }

      return particlesArray
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Create initial particles
    const particlesArray = initParticles()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i]

        // Move particles
        p.x += p.speedX
        p.y += p.speedY

        // Wrap around edges
        if (p.x > canvas.width) p.x = 0
        if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        if (p.y < 0) p.y = canvas.height

        // Mouse interaction - particles move away from cursor
        const dx = p.x - mousePosition.x
        const dy = p.y - mousePosition.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          p.x += dx * force * 0.05
          p.y += dy * force * 0.05
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()

        // Connect nearby particles with lines
        for (let j = i + 1; j < particlesArray.length; j++) {
          const p2 = particlesArray[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = p.color
            ctx.globalAlpha = (100 - distance) / 1000
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mounted, mousePosition, theme])

  if (!mounted) return null

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
