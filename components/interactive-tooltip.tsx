"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"

interface InteractiveTooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  delay?: number
  className?: string
}

export function InteractiveTooltip({
  content,
  children,
  position = "top",
  delay = 300,
  className = "",
}: InteractiveTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect()
        const scrollX = window.pageXOffset
        const scrollY = window.pageYOffset

        let x = rect.left + scrollX + rect.width / 2
        let y = rect.top + scrollY

        switch (position) {
          case "top":
            y -= 10
            break
          case "bottom":
            y += rect.height + 10
            break
          case "left":
            x = rect.left + scrollX - 10
            y += rect.height / 2
            break
          case "right":
            x = rect.right + scrollX + 10
            y += rect.height / 2
            break
        }

        setTooltipPosition({ x, y })
        setIsVisible(true)
      }
    }, delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const tooltipElement = isVisible ? (
    <div
      className={`fixed z-50 animate-fade-in-up ${className}`}
      style={{
        left: tooltipPosition.x,
        top: tooltipPosition.y,
        transform: position === "top" || position === "bottom" ? "translateX(-50%)" : "translateY(-50%)",
      }}
    >
      <div className="glass rounded-lg border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-lg">
        {content}
        <div
          className={`absolute h-2 w-2 rotate-45 bg-popover ${
            position === "top"
              ? "bottom-[-4px] left-1/2 -translate-x-1/2"
              : position === "bottom"
                ? "top-[-4px] left-1/2 -translate-x-1/2"
                : position === "left"
                  ? "right-[-4px] top-1/2 -translate-y-1/2"
                  : "left-[-4px] top-1/2 -translate-y-1/2"
          }`}
        />
      </div>
    </div>
  ) : null

  return (
    <>
      <div ref={triggerRef} onMouseEnter={showTooltip} onMouseLeave={hideTooltip} className="inline-block">
        {children}
      </div>
      {typeof window !== "undefined" && tooltipElement && createPortal(tooltipElement, document.body)}
    </>
  )
}
