"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Box, FileText, Info } from "lucide-react"

interface ModelPreviewProps {
  file: File
}

export function ModelPreview({ file }: ModelPreviewProps) {
  const [fileInfo, setFileInfo] = useState<{
    name: string
    size: string
    format: string
    lastModified: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (file) {
      const formatFileSize = (bytes: number) => {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const sizes = ["Bytes", "KB", "MB", "GB"]
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
      }

      const getFileFormat = (filename: string) => {
        const extension = filename.split(".").pop()?.toLowerCase()
        return extension?.toUpperCase() || "Unknown"
      }

      setFileInfo({
        name: file.name,
        size: formatFileSize(file.size),
        format: getFileFormat(file.name),
        lastModified: new Date(file.lastModified).toLocaleDateString(),
      })
      setIsLoading(false)
    }
  }, [file])

  if (isLoading) {
    return <Skeleton className="h-64 w-full rounded-lg" />
  }

  return (
    <div className="space-y-4">
      {/* 3D Preview Placeholder */}
      <Card className="overflow-hidden">
        <div className="relative h-64 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Box className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <p className="font-medium">3D Model Preview</p>
              <p className="text-sm text-muted-foreground">Interactive 3D preview coming soon</p>
            </div>
          </div>
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">{fileInfo?.format}</Badge>
          </div>
        </div>
      </Card>

      {/* File Information */}
      <Card>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="h-4 w-4 text-primary" />
            <span className="font-medium text-sm">File Information</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Name:</span>
              <p className="font-medium truncate">{fileInfo?.name}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Size:</span>
              <p className="font-medium">{fileInfo?.size}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Format:</span>
              <p className="font-medium">{fileInfo?.format}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Modified:</span>
              <p className="font-medium">{fileInfo?.lastModified}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Processing Info */}
      <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
        <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm">
          <p className="font-medium text-blue-900 dark:text-blue-100">Processing Note</p>
          <p className="text-blue-700 dark:text-blue-300">
            Large 3D models may take longer to process. Optimization settings can help reduce file size.
          </p>
        </div>
      </div>
    </div>
  )
}
