"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileIcon, ImageIcon, Video, Music, FileText, Archive, AlertTriangle } from "lucide-react"

interface FileAnalysis {
  name: string
  size: number
  type: string
  dimensions?: { width: number; height: number }
  duration?: number
  bitrate?: number
  compression?: number
  quality?: "low" | "medium" | "high" | "excellent"
  issues?: string[]
  recommendations?: string[]
}

interface LiveFileAnalyzerProps {
  file: File | null
  onAnalysisComplete?: (analysis: FileAnalysis) => void
  className?: string
}

export function LiveFileAnalyzer({ file, onAnalysisComplete, className = "" }: LiveFileAnalyzerProps) {
  const [analysis, setAnalysis] = useState<FileAnalysis | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!file) {
      setAnalysis(null)
      return
    }

    analyzeFile(file)
  }, [file])

  const analyzeFile = async (file: File) => {
    setIsAnalyzing(true)
    setProgress(0)

    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + Math.random() * 20
      })
    }, 100)

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const mockAnalysis: FileAnalysis = {
      name: file.name,
      size: file.size,
      type: file.type,
      ...generateMockAnalysis(file),
    }

    setProgress(100)
    setAnalysis(mockAnalysis)
    setIsAnalyzing(false)
    onAnalysisComplete?.(mockAnalysis)

    setTimeout(() => clearInterval(progressInterval), 500)
  }

  const generateMockAnalysis = (file: File) => {
    const isImage = file.type.startsWith("image/")
    const isVideo = file.type.startsWith("video/")
    const isAudio = file.type.startsWith("audio/")
    const isPDF = file.type === "application/pdf"

    const baseAnalysis: Partial<FileAnalysis> = {}

    if (isImage) {
      baseAnalysis.dimensions = { width: 1920, height: 1080 }
      baseAnalysis.quality = file.size > 5 * 1024 * 1024 ? "excellent" : file.size > 1024 * 1024 ? "high" : "medium"
      baseAnalysis.compression = Math.random() * 30 + 70
      baseAnalysis.recommendations = [
        "Consider converting to WebP for better compression",
        "Image quality is suitable for web use",
      ]
    }

    if (isVideo) {
      baseAnalysis.duration = Math.floor(Math.random() * 300) + 30
      baseAnalysis.bitrate = Math.floor(Math.random() * 5000) + 1000
      baseAnalysis.quality = "high"
      baseAnalysis.recommendations = [
        "Video bitrate is optimal for streaming",
        "Consider H.265 codec for better compression",
      ]
    }

    if (isAudio) {
      baseAnalysis.duration = Math.floor(Math.random() * 240) + 60
      baseAnalysis.bitrate = Math.floor(Math.random() * 192) + 128
      baseAnalysis.quality = baseAnalysis.bitrate > 256 ? "excellent" : "high"
      baseAnalysis.recommendations = ["Audio quality is suitable for distribution"]
    }

    if (file.size > 50 * 1024 * 1024) {
      baseAnalysis.issues = ["File size is quite large", "Consider compression for faster processing"]
    }

    return baseAnalysis
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <ImageIcon className="h-5 w-5 text-blue-500" />
    if (type.startsWith("video/")) return <Video className="h-5 w-5 text-purple-500" />
    if (type.startsWith("audio/")) return <Music className="h-5 w-5 text-green-500" />
    if (type.includes("pdf")) return <FileText className="h-5 w-5 text-red-500" />
    if (type.includes("zip") || type.includes("archive")) return <Archive className="h-5 w-5 text-yellow-500" />
    return <FileIcon className="h-5 w-5 text-gray-500" />
  }

  const getQualityColor = (quality?: string) => {
    switch (quality) {
      case "excellent":
        return "text-green-600 bg-green-100 dark:bg-green-900"
      case "high":
        return "text-blue-600 bg-blue-100 dark:bg-blue-900"
      case "medium":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900"
      case "low":
        return "text-red-600 bg-red-100 dark:bg-red-900"
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-900"
    }
  }

  if (!file) return null

  return (
    <Card className={`glass ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getFileIcon(file.type)}
          File Analysis
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {isAnalyzing ? (
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Analyzing file...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2 progress-bar" />
          </div>
        ) : analysis ? (
          <div className="space-y-4">
            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Size:</span>
                <p className="font-medium">{formatFileSize(analysis.size)}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Type:</span>
                <p className="font-medium">{analysis.type}</p>
              </div>
            </div>

            {/* Dimensions */}
            {analysis.dimensions && (
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Dimensions:</span>
                  <p className="font-medium">
                    {analysis.dimensions.width} × {analysis.dimensions.height}
                  </p>
                </div>
                {analysis.quality && (
                  <div>
                    <span className="text-muted-foreground">Quality:</span>
                    <Badge className={`ml-2 ${getQualityColor(analysis.quality)}`}>{analysis.quality}</Badge>
                  </div>
                )}
              </div>
            )}

            {/* Duration & Bitrate */}
            {(analysis.duration || analysis.bitrate) && (
              <div className="grid grid-cols-2 gap-4 text-sm">
                {analysis.duration && (
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <p className="font-medium">{formatDuration(analysis.duration)}</p>
                  </div>
                )}
                {analysis.bitrate && (
                  <div>
                    <span className="text-muted-foreground">Bitrate:</span>
                    <p className="font-medium">{analysis.bitrate} kbps</p>
                  </div>
                )}
              </div>
            )}

            {/* Compression */}
            {analysis.compression && (
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Compression Efficiency:</span>
                  <span>{Math.round(analysis.compression)}%</span>
                </div>
                <Progress value={analysis.compression} className="h-2" />
              </div>
            )}

            {/* Issues */}
            {analysis.issues && analysis.issues.length > 0 && (
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 text-sm font-medium text-yellow-600">
                  <AlertTriangle className="h-4 w-4" />
                  Issues Found
                </h4>
                <ul className="space-y-1">
                  {analysis.issues.map((issue, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {issue}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            {analysis.recommendations && analysis.recommendations.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-green-600">Recommendations</h4>
                <ul className="space-y-1">
                  {analysis.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
