"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { InteractiveTooltip } from "@/components/interactive-tooltip"
import { Upload, X, FileIcon, AlertCircle, CheckCircle, Info } from "lucide-react"

interface FileWithPreview extends File {
  preview?: string
  id: string
  uploadProgress?: number
  status?: "uploading" | "success" | "error"
  error?: string
}

interface AdvancedFileUploadProps {
  onFilesUpload: (files: File[]) => void
  acceptedTypes: string[]
  maxSize: number
  maxFiles?: number
  showPreview?: boolean
  className?: string
}

export function AdvancedFileUpload({
  onFilesUpload,
  acceptedTypes,
  maxSize,
  maxFiles = 5,
  showPreview = true,
  className = "",
}: AdvancedFileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const validateFile = (file: File): string | null => {
    if (file.size > maxSize) {
      return `File size exceeds ${formatFileSize(maxSize)}`
    }
    if (!acceptedTypes.includes(file.type)) {
      return "File type not supported"
    }
    return null
  }

  const createFilePreview = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => resolve(e.target?.result as string)
        reader.readAsDataURL(file)
      } else {
        resolve("")
      }
    })
  }

  const processFiles = useCallback(
    async (fileList: FileList) => {
      const newFiles: FileWithPreview[] = []

      for (let i = 0; i < Math.min(fileList.length, maxFiles - files.length); i++) {
        const file = fileList[i]
        const error = validateFile(file)
        const preview = showPreview ? await createFilePreview(file) : ""

        const fileWithPreview: FileWithPreview = {
          ...file,
          id: Math.random().toString(36).substr(2, 9),
          preview,
          status: error ? "error" : "success",
          error,
          uploadProgress: error ? 0 : 100,
        }

        newFiles.push(fileWithPreview)
      }

      setFiles((prev) => [...prev, ...newFiles])
      const validFiles = newFiles.filter((f) => !f.error)
      if (validFiles.length > 0) {
        onFilesUpload(validFiles)
      }
    },
    [files.length, maxFiles, maxSize, acceptedTypes, showPreview, onFilesUpload],
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      const droppedFiles = e.dataTransfer.files
      if (droppedFiles.length > 0) {
        processFiles(droppedFiles)
      }
    },
    [processFiles],
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files
      if (selectedFiles && selectedFiles.length > 0) {
        processFiles(selectedFiles)
      }
    },
    [processFiles],
  )

  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId))
  }

  const clearAllFiles = () => {
    setFiles([])
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <Card
        className={`transition-all duration-200 ${
          isDragOver
            ? "border-primary bg-primary/5 scale-105"
            : "border-dashed border-2 hover:border-primary/50 hover:bg-accent/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <div className={`mb-4 rounded-full p-4 ${isDragOver ? "bg-primary/20" : "bg-muted"} transition-colors`}>
            <Upload className={`h-8 w-8 ${isDragOver ? "text-primary animate-bounce" : "text-muted-foreground"}`} />
          </div>

          <h3 className="mb-2 text-lg font-semibold">{isDragOver ? "Drop files here" : "Upload your files"}</h3>

          <p className="mb-4 text-sm text-muted-foreground">Drag and drop files here, or click to browse</p>

          <Button
            onClick={() => fileInputRef.current?.click()}
            variant={isDragOver ? "default" : "outline"}
            className="mb-4"
          >
            Choose Files
          </Button>

          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <InteractiveTooltip content={`Maximum file size: ${formatFileSize(maxSize)}`}>
              <span className="flex items-center gap-1 cursor-help">
                <Info className="h-3 w-3" />
                Max size: {formatFileSize(maxSize)}
              </span>
            </InteractiveTooltip>
            <InteractiveTooltip content={`You can upload up to ${maxFiles} files at once`}>
              <span className="flex items-center gap-1 cursor-help">
                <Info className="h-3 w-3" />
                Max files: {maxFiles}
              </span>
            </InteractiveTooltip>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={acceptedTypes.join(",")}
            onChange={handleFileSelect}
            className="hidden"
          />
        </CardContent>
      </Card>

      {files.length > 0 && (
        <Card className="glass">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-semibold">Uploaded Files ({files.length})</h4>
              <Button onClick={clearAllFiles} variant="ghost" size="sm">
                Clear All
              </Button>
            </div>

            <div className="space-y-3">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center gap-3 rounded-lg border p-3 transition-all hover:bg-accent/50"
                >
                  {file.preview ? (
                    <img
                      src={file.preview || "/placeholder.svg"}
                      alt={file.name}
                      className="h-10 w-10 rounded object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                      <FileIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                    {file.uploadProgress !== undefined && file.uploadProgress < 100 && (
                      <Progress value={file.uploadProgress} className="mt-1 h-1" />
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {file.status === "success" && <CheckCircle className="h-4 w-4 text-green-500" />}
                    {file.status === "error" && (
                      <InteractiveTooltip content={file.error || "Upload failed"}>
                        <AlertCircle className="h-4 w-4 text-red-500 cursor-help" />
                      </InteractiveTooltip>
                    )}
                    <Button onClick={() => removeFile(file.id)} variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
