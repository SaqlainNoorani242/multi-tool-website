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
import { Video, Gauge, Smartphone, Monitor } from "lucide-react"

export function VideoFormatConverter() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [conversionOptions, setConversionOptions] = useState({
    outputFormat: "mp4" as "mp4" | "avi" | "mov" | "webm" | "mkv" | "flv",
    quality: "high" as "low" | "medium" | "high" | "ultra",
    resolution: "original" as "original" | "720p" | "1080p" | "4k",
    codec: "h264" as "h264" | "h265" | "vp9" | "av1",
    bitrate: "auto" as "auto" | "1000" | "2000" | "5000" | "10000",
    removeAudio: false,
  })

  const handleFileUpload = (file: File) => {
    setUploadedFile(file)
    setDownloadUrl(null)
    setProgress(0)
  }

  const handleConvert = async () => {
    if (!uploadedFile) return

    setIsConverting(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsConverting(false)
          setDownloadUrl(`/api/download/video-converted-${Date.now()}.${conversionOptions.outputFormat}`)
          return 100
        }
        return prev + Math.random() * 5
      })
    }, 300)
  }

  const features = [
    {
      icon: <Video className="w-5 h-5" />,
      title: "Multiple Formats",
      description: "Support for MP4, AVI, MOV, WebM, MKV, and more",
    },
    {
      icon: <Gauge className="w-5 h-5" />,
      title: "Quality Control",
      description: "Adjust bitrate, codec, and compression settings",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Device Optimization",
      description: "Optimize for mobile, web, or desktop playback",
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      title: "Resolution Options",
      description: "Convert to 720p, 1080p, or 4K resolution",
    },
  ]

  const steps = [
    {
      title: "Upload Video File",
      description:
        "Upload your video file using drag-and-drop or file browser. Supports files up to 500MB in popular formats like MP4, AVI, MOV, WebM, and MKV.",
    },
    {
      title: "Choose Format & Quality",
      description:
        "Select your desired output format and quality settings. Configure resolution, codec (H.264, H.265, VP9, AV1), and bitrate options for optimal results.",
    },
    {
      title: "Configure Settings",
      description:
        "Fine-tune conversion settings including resolution scaling, device optimization, and audio options. Choose modern codecs for better compression.",
    },
    {
      title: "Convert & Download",
      description:
        "Start the conversion process and download your optimized video file. Processing time depends on file size and selected quality settings.",
    },
  ]

  return (
    <div className="space-y-8">
      <ScrollAnimation animation="fade-up">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="animate-pulse-glow">
            Media Converter
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Video Format Converter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert videos between all popular formats with advanced compression. Optimize for web, mobile, or desktop
            with modern codecs like H.265 and AV1.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ScrollAnimation animation="fade-left">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Upload Video</CardTitle>
                <CardDescription>Select a video file to convert between formats</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploadZone
                  onFileUpload={handleFileUpload}
                  acceptedTypes={["video/mp4", "video/avi", "video/mov", "video/webm", "video/mkv", "video/x-flv"]}
                  maxSize={500 * 1024 * 1024} // 500MB
                  uploadedFile={uploadedFile}
                />
              </CardContent>
            </Card>
          </ScrollAnimation>

          {uploadedFile && (
            <ScrollAnimation animation="scale">
              <Card className="glass hover-lift">
                <CardHeader>
                  <CardTitle>Video Settings</CardTitle>
                  <CardDescription>Configure output format and quality options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ConversionOptions
                    type="video-converter"
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
                status={progress < 100 ? "Converting video..." : "Conversion complete!"}
              />
            </ScrollAnimation>
          )}

          {downloadUrl && (
            <ScrollAnimation animation="fade-up">
              <DownloadSection
                downloadUrl={downloadUrl}
                fileName={`converted-video.${conversionOptions.outputFormat}`}
                fileSize="45.2 MB"
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
                        MP4
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        AVI
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        MOV
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Output:</span>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        MP4
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        WebM
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        MKV
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
        <HowToUseSection title="How to Convert Video Formats" steps={steps} />
      </ScrollAnimation>
    </div>
  )
}
