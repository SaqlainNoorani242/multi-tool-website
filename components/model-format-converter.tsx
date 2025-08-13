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
import { ModelPreview } from "@/components/model-preview"
import { Box, Sparkles, Zap, Settings, Cpu } from "lucide-react"
import type { ConversionJob, ModelConverterOptions } from "@/lib/types"

export function ModelFormatConverter() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [conversionJob, setConversionJob] = useState<ConversionJob | null>(null)
  const [options, setOptions] = useState<ModelConverterOptions>({
    inputFormat: "glb",
    outputFormat: "fbx",
    scale: 1.0,
    optimize: true,
  })

  const handleFileUpload = (file: File) => {
    setUploadedFile(file)
    setConversionJob(null)

    // Auto-detect input format from file extension
    const extension = file.name.split(".").pop()?.toLowerCase()
    if (extension && ["glb", "fbx", "obj", "stl", "usdz"].includes(extension)) {
      setOptions((prev) => ({ ...prev, inputFormat: extension as any }))
    }
  }

  const handleConvert = async () => {
    if (!uploadedFile) return

    const job: ConversionJob = {
      id: crypto.randomUUID(),
      type: "3d-model-converter",
      status: "processing",
      inputFile: uploadedFile,
      progress: 0,
      createdAt: new Date(),
    }

    setConversionJob(job)

    // Simulate 3D model conversion process
    const stages = [
      { progress: 15, message: "Loading 3D model..." },
      { progress: 30, message: "Parsing geometry..." },
      { progress: 45, message: "Processing materials..." },
      { progress: 60, message: "Optimizing mesh..." },
      { progress: 75, message: "Converting format..." },
      { progress: 90, message: "Preserving textures..." },
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
                outputFile: `converted-${uploadedFile.name.replace(/\.[^/.]+$/, "")}.${options.outputFormat}`,
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
    }, 800)
  }

  const features = [
    "Multiple 3D format support (GLB, FBX, OBJ, STL, USDZ)",
    "Mesh optimization and compression",
    "Texture and material preservation",
    "Batch processing capabilities",
  ]

  const formatDescriptions = {
    glb: "Binary glTF - Web-optimized 3D format",
    fbx: "Autodesk FBX - Industry standard",
    obj: "Wavefront OBJ - Universal format",
    stl: "STL - 3D printing standard",
    usdz: "Apple USDZ - AR/iOS optimized",
  }

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm">
          <Box className="mr-2 h-4 w-4 text-primary" />
          3D Model Format Converter
        </div>
        <h1 className="mb-4 font-heading text-4xl font-bold sm:text-5xl">
          Convert <span className="text-gradient">3D Model Formats</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Seamlessly convert between 3D model formats (GLB, FBX, OBJ, STL, USDZ) with mesh optimization and texture
          preservation for professional workflows.
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
                Upload 3D Model
              </CardTitle>
              <CardDescription>
                Upload your 3D model file. Supports GLB, FBX, OBJ, STL, and USDZ formats up to 50MB.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUploadZone
                acceptedTypes={[
                  "model/gltf-binary",
                  "application/octet-stream",
                  ".glb",
                  ".fbx",
                  ".obj",
                  ".stl",
                  ".usdz",
                ]}
                maxSize={50 * 1024 * 1024} // 50MB
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
                  <Cpu className="h-5 w-5 text-primary" />
                  3D Model Preview
                </CardTitle>
                <CardDescription>Preview of your uploaded 3D model.</CardDescription>
              </CardHeader>
              <CardContent>
                <ModelPreview file={uploadedFile} />
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
                <CardDescription>Configure output format and optimization settings.</CardDescription>
              </CardHeader>
              <CardContent>
                <ConversionOptions
                  type="3d-model-converter"
                  options={options}
                  onChange={(newOptions) => setOptions(newOptions as ModelConverterOptions)}
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

          {/* Format Guide */}
          <Card>
            <CardHeader>
              <CardTitle>Format Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(formatDescriptions).map(([format, description]) => (
                  <div key={format} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {format.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle>Common Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Web deployment (GLB)</li>
                <li>• Game development (FBX)</li>
                <li>• 3D printing (STL)</li>
                <li>• AR experiences (USDZ)</li>
                <li>• Universal exchange (OBJ)</li>
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
          title="How to Convert 3D Model Formats"
          steps={[
            {
              title: "Upload 3D Model",
              description: "Upload your 3D model file. We support GLB, FBX, OBJ, STL, and USDZ formats up to 50MB.",
            },
            {
              title: "Choose Output Format",
              description:
                "Select your desired output format and configure optimization settings like scaling and mesh optimization.",
            },
            {
              title: "Convert & Download",
              description: "Start the conversion process and download your optimized 3D model in the new format.",
            },
          ]}
        />
      </div>
    </div>
  )
}
