"use client"

import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"
import type { ConversionJob } from "@/lib/types"

interface ConversionProgressProps {
  job: ConversionJob
}

export function ConversionProgress({ job }: ConversionProgressProps) {
  const getStatusIcon = () => {
    switch (job.status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "failed":
        return <AlertCircle className="h-5 w-5 text-destructive" />
      default:
        return <Clock className="h-5 w-5 text-primary animate-spin" />
    }
  }

  const getStatusText = () => {
    switch (job.status) {
      case "pending":
        return "Preparing conversion..."
      case "processing":
        return "Converting your file..."
      case "completed":
        return "Conversion completed successfully!"
      case "failed":
        return job.error || "Conversion failed. Please try again."
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        {getStatusIcon()}
        <div>
          <p className="font-medium">{getStatusText()}</p>
          <p className="text-sm text-muted-foreground">
            {job.status === "completed" && job.completedAt
              ? `Completed in ${Math.round((job.completedAt.getTime() - job.createdAt.getTime()) / 1000)}s`
              : `Processing ${job.inputFile.name}`}
          </p>
        </div>
      </div>

      {job.status !== "completed" && job.status !== "failed" && (
        <div className="space-y-2">
          <Progress value={job.progress} className="w-full" />
          <p className="text-center text-sm text-muted-foreground">{Math.round(job.progress)}% complete</p>
        </div>
      )}
    </div>
  )
}
