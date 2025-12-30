"use client"

import { Cloud } from "lucide-react"

interface FloatingCloudProps {
  size?: "sm" | "md" | "lg"
  delay?: string
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"
}

export function FloatingCloud({ size = "md", delay = "0s", position }: FloatingCloudProps) {
  const sizeMap = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const positionMap = {
    "top-left": "top-20 left-20",
    "top-right": "top-32 right-32",
    "bottom-left": "bottom-32 left-32",
    "bottom-right": "bottom-20 right-20",
    "center-left": "top-1/2 left-1/4",
    "center-right": "top-1/2 right-1/4",
  }

  return (
    <div
      className={`absolute ${positionMap[position]} animate-bounce`}
      style={{ animationDelay: delay }}
    >
      <Cloud className={`${sizeMap[size]} text-blue-500/30`} />
    </div>
  )
}
