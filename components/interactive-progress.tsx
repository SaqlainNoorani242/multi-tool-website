"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Loader2, Pause, Play, X } from "lucide-react"

interface ProcessingStep {
  id: string
  name: string
  description: string
  status: "pending" | "processing" | "completed" | "error"
  progress?: number
  duration?: number
}

interface InteractiveProgressProps {
  steps: ProcessingStep[]
  onCancel?: () => void
  onPause?: () => void
  onResume?: () => void
  isPaused?: boolean
  canCancel?: boolean
  canPause?: boolean
  className?: string
}

export function InteractiveProgress({
  steps,
  onCancel,
  onPause,
  onResume,
  isPaused = false,
  canCancel = true,
  canPause = true,
  className = "",
}: InteractiveProgressProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [overallProgress, setOverallProgress] = useState(0)

  useEffect(() => {
    const completedSteps = steps.filter((step) => step.status === "completed").length
    const totalSteps = steps.length
    const currentStep = steps[currentStepIndex]

    let progress = (completedSteps / totalSteps) * 100

    if (currentStep && currentStep.status === "processing" && currentStep.progress) {
      progress += currentStep.progress / totalSteps
    }

    setOverallProgress(Math.min(progress, 100))
  }, [steps, currentStepIndex])

  const getStepIcon = (step: ProcessingStep) => {
    switch (step.status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "processing":
        return <Loader2 className="h-5 w-5 text-primary animate-spin" />
      default:
        return <div className="h-5 w-5 rounded-full border-2 border-muted" />
    }
  }

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  return (
    <Card className={`glass ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Loader2 className={`h-5 w-5 ${isPaused ? "text-yellow-500" : "text-primary animate-spin"}`} />
            {isPaused ? "Processing Paused" : "Processing Files"}
          </CardTitle>
          <div className="flex items-center gap-2">
            {canPause && (
              <Button
                onClick={isPaused ? onResume : onPause}
                variant="outline"
                size="sm"
                className="hover-glow bg-transparent"
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </Button>
            )}
            {canCancel && (
              <Button onClick={onCancel} variant="outline" size="sm" className="hover-glow bg-transparent">
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Overall Progress</span>
            <span>{Math.round(overallProgress)}%</span>
          </div>
          <Progress value={overallProgress} className="h-2 progress-bar" />
        </div>

        {/* Step Details */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-start gap-3 rounded-lg p-3 transition-all ${
                step.status === "processing"
                  ? "bg-primary/5 border border-primary/20 animate-pulse-glow"
                  : step.status === "completed"
                    ? "bg-green-50 dark:bg-green-950/20"
                    : step.status === "error"
                      ? "bg-red-50 dark:bg-red-950/20"
                      : "bg-muted/50"
              }`}
            >
              <div className="mt-0.5">{getStepIcon(step)}</div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{step.name}</h4>
                  {step.duration && (
                    <span className="text-xs text-muted-foreground">{formatDuration(step.duration)}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>

                {step.status === "processing" && step.progress !== undefined && (
                  <div className="mt-2">
                    <Progress value={step.progress} className="h-1" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Status Message */}
        <div className="rounded-lg bg-muted/50 p-3 text-center">
          <p className="text-sm text-muted-foreground">
            {isPaused
              ? "Processing is paused. Click resume to continue."
              : steps.every((step) => step.status === "completed")
                ? "All steps completed successfully!"
                : steps.some((step) => step.status === "error")
                  ? "Some steps encountered errors. Please review and try again."
                  : "Processing your files... This may take a few moments."}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
