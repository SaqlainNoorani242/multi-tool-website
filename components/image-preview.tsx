"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface ImagePreviewProps {
  file: File
}

export function ImagePreview({ file }: ImagePreviewProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
      setIsLoading(false)

      return () => {
        URL.revokeObjectURL(url)
      }
    }
  }, [file])

  if (isLoading) {
    return <Skeleton className="h-64 w-full rounded-lg" />
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        {imageUrl && (
          <img
            src={imageUrl || "/placeholder.svg"}
            alt="Handwriting preview"
            className="h-64 w-full object-contain bg-muted rounded-lg"
          />
        )}
        <div className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
          {file.name}
        </div>
      </div>
    </Card>
  )
}
