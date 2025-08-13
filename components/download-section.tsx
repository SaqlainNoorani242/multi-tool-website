"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText, Share2 } from "lucide-react"
import { ApiClient } from "@/lib/api-client"
import { useToast } from "@/hooks/use-toast"
import type { ConversionJob } from "@/lib/types"

interface DownloadSectionProps {
  job: ConversionJob
}

export function DownloadSection({ job }: DownloadSectionProps) {
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      // Extract job ID from output file name or use a stored job ID
      const jobId = job.id || job.outputFile?.split("-")[1]?.split(".")[0]

      if (!jobId) {
        throw new Error("Job ID not found")
      }

      const blob = await ApiClient.downloadFile(jobId)
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = job.outputFile || "converted-file"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast({
        title: "Download started",
        description: "Your converted file is downloading.",
      })
    } catch (error) {
      toast({
        title: "Download failed",
        description: error instanceof Error ? error.message : "Failed to download file",
        variant: "destructive",
      })
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "ConvertHub - File Converted",
        text: "I just converted my file using ConvertHub!",
        url: window.location.href,
      })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
          <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <p className="font-medium">Your file is ready!</p>
          <p className="text-sm text-muted-foreground">{job.outputFile}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button onClick={handleDownload} className="flex-1">
          <Download className="mr-2 h-4 w-4" />
          Download File
        </Button>
        <Button variant="outline" onClick={handleShare}>
          <Share2 className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Your file will be automatically deleted from our servers in 24 hours for your privacy and security.
      </p>
    </div>
  )
}
