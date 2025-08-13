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
import { Palette, Sparkles, Zap, Settings } from "lucide-react"
import type { ConversionJob, SvgToEmbroideryOptions } from "@/lib/types"

export function SvgToEmbroideryConverter() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [conversionJob, setConversionJob] = useState<ConversionJob | null>(null)
  const [options, setOptions] = useState<SvgToEmbroideryOptions>({
    format: "pes",
    density: 4.0,
    scale: 1.0,
  })

  const handleFileUpload = (file: File) => {
    setUploadedFile(file)
    setConversionJob(null)
  }

  const handleConvert = async () => {
    if (!uploadedFile) return

    const job: ConversionJob = {
      id: crypto.randomUUID(),
      type: "svg-to-embroidery",
      status: "processing",
      inputFile: uploadedFile,
      progress: 0,
      createdAt: new Date(),
    }

    setConversionJob(job)

    // Simulate conversion process
    const progressInterval = setInterval(() => {
      setConversionJob((prev) => {
        if (!prev || prev.progress >= 100) {
          clearInterval(progressInterval)
          return prev
        }
        const newProgress = Math.min(prev.progress + Math.random() * 20, 100)
        const newStatus = newProgress >= 100 ? "completed" : "processing"
        return {
          ...prev,
          progress: newProgress,
          status: newStatus,
          completedAt: newStatus === "completed" ? new Date() : undefined,
          outputFile: newStatus === "completed" ? `converted-${uploadedFile.name}.${options.format}` : undefined,
        }
      })
    }, 500)
  }

  const features = [
    "Multiple embroidery formats (PES, DST, EXP)",
    "Adjustable stitch density and scaling",
    "Color mapping and optimization",
    "Professional-grade output quality",
  ]

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm">
          <Palette className="mr-2 h-4 w-4 text-primary" />
          SVG to Embroidery Converter
        </div>
        <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl">
          Convert SVG to <span className="text-gradient">Embroidery Files</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Transform your SVG graphics into professional embroidery formats (PES, DST, EXP) with precise stitch control
          and optimization.
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
                Upload SVG File
              </CardTitle>
              <CardDescription>
                Upload your SVG file to convert it to embroidery format. Maximum file size: 10MB.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUploadZone
                acceptedTypes={["image/svg+xml"]}
                maxSize={10 * 1024 * 1024} // 10MB
                onFileUpload={handleFileUpload}
                uploadedFile={uploadedFile}
              />
            </CardContent>
          </Card>

          {/* Options Section */}
          {uploadedFile && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Conversion Options
                </CardTitle>
                <CardDescription>Customize the embroidery output settings for optimal results.</CardDescription>
              </CardHeader>
              <CardContent>
                <ConversionOptions
                  type="svg-to-embroidery"
                  options={options}
                  onChange={(newOptions) => setOptions(newOptions as SvgToEmbroideryOptions)}
                />
                <div className="mt-6">
                  <Button
                    onClick={handleConvert}
                    disabled={!uploadedFile || conversionJob?.status === "processing"}
                    className="w-full"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Convert to {options.format.toUpperCase()}
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
              <CardTitle>Features</CardTitle>
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
                  <Badge variant="outline">SVG</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Output</span>
                  <div className="flex gap-1">
                    <Badge variant="secondary">PES</Badge>
                    <Badge variant="secondary">DST</Badge>
                    <Badge variant="secondary">EXP</Badge>
                  </div>
                </div>
              </div>
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
          title="How to Convert SVG to Embroidery"
          steps={[
            {
              title: "Upload SVG File",
              description: "Click or drag your SVG file into the upload zone. Files up to 10MB are supported.",
            },
            {
              title: "Choose Format & Settings",
              description:
                "Select your desired embroidery format (PES, DST, EXP) and adjust density and scale settings.",
            },
            {
              title: "Convert & Download",
              description: "Click convert and wait for processing. Download your embroidery file when ready.",
            },
          ]}
        />
      </div>
    </div>
  )
}
