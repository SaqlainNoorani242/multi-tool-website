"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, width, height, className, priority = false }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && <div className="absolute inset-0 bg-muted/20 animate-pulse rounded-lg" />}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
