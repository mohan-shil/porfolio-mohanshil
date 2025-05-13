"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface TechIcon3DProps {
  icon: string
  name: string
  delay?: number
}

export default function TechIcon3D({ icon, name, delay = 0 }: TechIcon3DProps) {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll()

  // Create scroll-based animations
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [45, 0])

  useEffect(() => {
    controls.start({
      rotateY: isHovered ? 180 : 0,
      transition: { duration: 0.8, type: "spring" },
    })
  }, [isHovered, controls])

  return (
    <motion.div
      className="perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ scale, rotateY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="relative w-full h-full preserve-3d" animate={controls}>
        {/* Front side */}
        <div className="absolute backface-hidden w-full flex flex-col items-center justify-center p-4 rounded-xl glass hover:bg-accent/10 transition-all duration-300">
          <div className="relative w-12 h-12 mb-3">
            <Image src={icon || "/placeholder.svg"} alt={name} width={48} height={48} className="object-contain" />
          </div>
          <span className="text-sm font-medium group-hover:text-accent transition-colors">{name}</span>
        </div>

        {/* Back side */}
        <div className="absolute backface-hidden rotateY-180 w-full flex flex-col items-center justify-center p-4 rounded-xl glass bg-accent/10 transition-all duration-300">
          <span className="text-sm font-medium text-accent">{name}</span>
          <p className="text-xs text-center mt-2">Click to learn more</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
