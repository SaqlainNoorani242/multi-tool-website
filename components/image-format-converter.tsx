"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUploadZone } from "@/components/file-upload-zone"
import { ConversionOptions } from "@/components/conversion-options"
import { ConversionProgress } from "@/components/conversion-progress"
import { DownloadSection } from "@/components/download-section"
import { HowToUseSection } from "@/components/how-to-use-section"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Zap, Layers, Maximize } from "lucide-react"

export function ImageFormatConverter() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [conversionOptions, setConversionOptions] = useState({
    outputFormat: "webp" as "png" | "jpg" | "webp" | "avif" | "gif" | "bmp",
    quality: 85,
    resize: false,
    width: 1920,
    height: 1080,
    maintainAspectRatio: true,
    removeMetadata: false,
  })

  const handleFileUpload = (file: File) => {
    setUploadedFiles([file])
    setDownloadUrl(null)
    setProgress(0)
  }

  const handleConvert = async () => {
    if (uploadedFiles.length === 0) return

    setIsConverting(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsConverting(false)
          setDownloadUrl(`/api/download/image-converted-${Date.now()}.${conversionOptions.outputFormat}`)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 150)
  }

  const features = [
    {
      icon: <ImageIcon className="w-5 h-5" />,
      title: "Multiple Formats",
      description: "Support for PNG, JPG, WebP, AVIF, GIF, and BMP",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Quality Control",
      description: "Adjust compression and quality settings",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Batch Processing",
      description: "Convert multiple images simultaneously",
    },
    {
      icon: <Maximize className="w-5 h-5" />,
      title: "Resize & Optimize",
      description: "Resize images and remove metadata",
    },
  ]

  const steps = [
    {
      title: "Upload Images",
      description:
        "Upload your image files (PNG, JPG, WebP, GIF, BMP, AVIF) using drag-and-drop or file browser. Maximum 10MB per file.",
    },
    {
      title: "Select Format & Quality",
      description:
        "Choose your desired output format and adjust quality settings. Configure resize options and metadata removal as needed.",
    },
    {
      title: "Configure Options",
      description:
        "Set resize dimensions, maintain aspect ratio, and choose whether to remove metadata for privacy and file size optimization.",
    },
    {
      title: "Convert & Download",
      description:
        "Click 'Convert Images' to start processing. Download your optimized images in the selected format when conversion is complete.",
    },
  ]

  return (
    <div className="space-y-8">
      <ScrollAnimation animation="fade-up">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="animate-pulse-glow">
            Media Converter
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Image Format Converter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert images between all popular formats with advanced optimization. Support for modern formats like WebP
            and AVIF for better compression.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ScrollAnimation animation="fade-left">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Upload Images</CardTitle>
                <CardDescription>Select image files to convert between formats</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploadZone
                  onFileUpload={handleFileUpload}
                  acceptedTypes={["image/png", "image/jpeg", "image/webp", "image/gif", "image/bmp", "image/avif"]}
                  maxSize={10 * 1024 * 1024} // 10MB
                  uploadedFile={uploadedFiles[0]}
                />
              </CardContent>
            </Card>
          </ScrollAnimation>

          {uploadedFiles.length > 0 && (
            <ScrollAnimation animation="scale">
              <Card className="glass hover-lift">
                <CardHeader>
                  <CardTitle>Conversion Settings</CardTitle>
                  <CardDescription>Configure output format and quality options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ConversionOptions
                    type="image-converter"
                    options={conversionOptions}
                    onChange={setConversionOptions}
                    onConvert={handleConvert}
                    isConverting={isConverting}
                  />
                </CardContent>
              </Card>
            </ScrollAnimation>
          )}

          {isConverting && (
            <ScrollAnimation animation="scale">
              <ConversionProgress
                progress={progress}
                status={progress < 100 ? "Converting images..." : "Conversion complete!"}
              />
            </ScrollAnimation>
          )}

          {downloadUrl && (
            <ScrollAnimation animation="fade-up">
              <DownloadSection
                downloadUrl={downloadUrl}
                fileName={`converted-image.${conversionOptions.outputFormat}`}
                fileSize="1.2 MB"
              />
            </ScrollAnimation>
          )}
        </div>

        <div className="space-y-6">
          <ScrollAnimation animation="fade-right">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className={`flex items-start space-x-3 stagger-${index + 1} animate-fade-in-up`}>
                    <div className="text-primary mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-right" delay={200}>
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Supported Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Input:</span>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        PNG
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        JPG
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        WebP
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Output:</span>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        PNG
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        JPG
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        WebP
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        AVIF
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>

      <ScrollAnimation animation="fade-up">
        <HowToUseSection title="How to Convert Image Formats" steps={steps} />
      </ScrollAnimation>
    </div>
  )
}
