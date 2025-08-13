"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade-in"
  delay?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view")
            }, delay)
          }
        })
      },
      { threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay, threshold])

  const animationClass = {
    "fade-up": "scroll-animate",
    "fade-left": "scroll-animate-left",
    "fade-right": "scroll-animate-right",
    scale: "scroll-animate-scale",
    "fade-in": "scroll-animate",
  }[animation]

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}
