"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileUploadZone } from "@/components/file-upload-zone"
import { ConversionOptions } from "@/components/conversion-options"
import { ConversionProgress } from "@/components/conversion-progress"
import { DownloadSection } from "@/components/download-section"
import { HowToUseSection } from "@/components/how-to-use-section"
import { ImagePreview } from "@/components/image-preview"
import { PenTool, Sparkles, Zap, Settings, Brain } from "lucide-react"
import type { ConversionJob, HandwritingToVectorOptions } from "@/lib/types"

export function HandwritingToVectorConverter() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [conversionJob, setConversionJob] = useState<ConversionJob | null>(null)
  const [options, setOptions] = useState<HandwritingToVectorOptions>({
    outputFormat: "svg",
    smoothing: 5,
    threshold: 128,
  })

  const handleFileUpload = (file: File) => {
    setUploadedFile(file)
    setConversionJob(null)
  }

  const handleConvert = async () => {
    if (!uploadedFile) return

    const job: ConversionJob = {
      id: crypto.randomUUID(),
      type: "handwriting-to-vector",
      status: "processing",
      inputFile: uploadedFile,
      progress: 0,
      createdAt: new Date(),
    }

    setConversionJob(job)

    // Simulate AI conversion process with more realistic stages
    const stages = [
      { progress: 20, message: "Analyzing handwriting..." },
      { progress: 40, message: "Detecting text boundaries..." },
      { progress: 60, message: "Tracing vector paths..." },
      { progress: 80, message: "Optimizing curves..." },
      { progress: 100, message: "Finalizing output..." },
    ]

    let currentStage = 0
    const progressInterval = setInterval(() => {
      setConversionJob((prev) => {
        if (!prev || currentStage >= stages.length) {
          clearInterval(progressInterval)
          return prev
            ? {
                ...prev,
                progress: 100,
                status: "completed",
                completedAt: new Date(),
                outputFile: `vectorized-${uploadedFile.name.replace(/\.[^/.]+$/, "")}.${options.outputFormat}`,
              }
            : prev
        }

        const stage = stages[currentStage]
        currentStage++

        return {
          ...prev,
          progress: stage.progress,
          status: stage.progress >= 100 ? "completed" : "processing",
        }
      })
    }, 1000)
  }

  const features = [
    "AI-powered handwriting recognition",
    "Smart noise reduction and cleanup",
    "Vector path optimization",
    "Multiple output formats (SVG, PDF)",
  ]

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm">
          <PenTool className="mr-2 h-4 w-4 text-primary" />
          AI-Powered Handwriting to Vector
        </div>
        <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl">
          Convert Handwriting to <span className="text-gradient">Vector Graphics</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Transform handwritten text and drawings into crisp, scalable vector graphics using advanced AI. Perfect for
          logos, signatures, and artistic text.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Converter */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Upload Handwriting Image
              </CardTitle>
              <CardDescription>
                Upload an image of handwritten text or drawings. Supports JPG, PNG, and WEBP formats up to 10MB.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUploadZone
                acceptedTypes={["image/jpeg", "image/png", "image/webp"]}
                maxSize={10 * 1024 * 1024} // 10MB
                onFileUpload={handleFileUpload}
                uploadedFile={uploadedFile}
              />
            </CardContent>
          </Card>

          {/* Preview Section */}
          {uploadedFile && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Image Preview
                </CardTitle>
                <CardDescription>Preview of your uploaded handwriting image.</CardDescription>
              </CardHeader>
              <CardContent>
                <ImagePreview file={uploadedFile} />
              </CardContent>
            </Card>
          )}

          {/* Options Section */}
          {uploadedFile && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Conversion Options
                </CardTitle>
                <CardDescription>Adjust AI processing settings for optimal vector conversion.</CardDescription>
              </CardHeader>
              <CardContent>
                <ConversionOptions
                  type="handwriting-to-vector"
                  options={options}
                  onChange={(newOptions) => setOptions(newOptions as HandwritingToVectorOptions)}
                />
                <div className="mt-6">
                  <Button
                    onClick={handleConvert}
                    disabled={!uploadedFile || conversionJob?.status === "processing"}
                    className="w-full"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Convert to {options.outputFormat.toUpperCase()}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Progress Section */}
          {conversionJob && (
            <Card>
              <CardContent className="pt-6">
                <ConversionProgress job={conversionJob} />
              </CardContent>
            </Card>
          )}

          {/* Download Section */}
          {conversionJob?.status === "completed" && (
            <Card>
              <CardContent className="pt-6">
                <DownloadSection job={conversionJob} />
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>AI Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Supported Formats */}
          <Card>
            <CardHeader>
              <CardTitle>Supported Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Input</span>
                  <div className="flex gap-1">
                    <Badge variant="outline">JPG</Badge>
                    <Badge variant="outline">PNG</Badge>
                    <Badge variant="outline">WEBP</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Output</span>
                  <div className="flex gap-1">
                    <Badge variant="secondary">SVG</Badge>
                    <Badge variant="secondary">PDF</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Tips for Best Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use high contrast images</li>
                <li>• Ensure clear, legible handwriting</li>
                <li>• Avoid shadows and reflections</li>
                <li>• Center text in the image</li>
              </ul>
            </CardContent>
          </Card>

          {/* Ad Placeholder */}
          <Card className="border-dashed">
            <CardContent className="flex h-48 items-center justify-center p-6">
              <div className="text-center text-sm text-muted-foreground">
                <div className="mb-2 text-xs">Advertisement</div>
                <div className="text-xs opacity-60">AdSense Placeholder</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="mt-16">
        <HowToUseSection
          title="How to Convert Handwriting to Vector"
          steps={[
            {
              title: "Upload Image",
              description: "Upload a clear image of your handwriting or drawing. JPG, PNG, and WEBP formats supported.",
            },
            {
              title: "Adjust AI Settings",
              description:
                "Fine-tune smoothing and threshold settings for optimal AI recognition and vector conversion.",
            },
            {
              title: "Convert & Download",
              description: "Let our AI process your image and download the vectorized result as SVG or PDF.",
            },
          ]}
        />
      </div>
    </div>
  )
}
