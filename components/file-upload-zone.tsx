"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Upload, File, X, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploadZoneProps {
  acceptedTypes: string[]
  maxSize: number
  onFileUpload: (file: File) => void
  uploadedFile?: File | null
}

export function FileUploadZone({ acceptedTypes, maxSize, onFileUpload, uploadedFile }: FileUploadZoneProps) {
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      setError(null)

      if (rejectedFiles.length > 0) {
        const rejection = rejectedFiles[0]
        if (rejection.errors[0]?.code === "file-too-large") {
          setError(`File is too large. Maximum size is ${Math.round(maxSize / 1024 / 1024)}MB.`)
        } else if (rejection.errors[0]?.code === "file-invalid-type") {
          setError("Invalid file type. Please upload a supported file format.")
        } else {
          setError("File upload failed. Please try again.")
        }
        return
      }

      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0])
      }
    },
    [maxSize, onFileUpload],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    maxSize,
    multiple: false,
  })

  const removeFile = () => {
    onFileUpload(null as any)
    setError(null)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  if (uploadedFile) {
    return (
      <div className="rounded-lg border-2 border-dashed border-muted-foreground/25 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <File className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">{uploadedFile.name}</p>
              <p className="text-sm text-muted-foreground">{formatFileSize(uploadedFile.size)}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={removeFile}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      {...getRootProps()}
      className={cn(
        "cursor-pointer rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 text-center transition-colors hover:border-muted-foreground/50",
        isDragActive && "border-primary bg-primary/5",
        error && "border-destructive bg-destructive/5",
      )}
    >
      <input {...getInputProps()} />
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
        <Upload className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">
          {isDragActive ? "Drop your file here" : "Click to upload or drag and drop"}
        </p>
        <p className="text-xs text-muted-foreground">
          Supported formats:{" "}
          {acceptedTypes
            .map((type) => {
              const parts = type.split("/")
              const extension = parts[1] || type
              return extension.toUpperCase()
            })
            .join(", ")}{" "}
          (max {Math.round(maxSize / 1024 / 1024)}MB)
        </p>
      </div>
      {error && (
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}
    </div>
  )
}
