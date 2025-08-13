"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime)
          }
          if (entry.entryType === "first-input") {
            console.log("FID:", entry.processingStart - entry.startTime)
          }
        }
      })

      observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] })

      return () => observer.disconnect()
    }
  }, [])

  return null
}
