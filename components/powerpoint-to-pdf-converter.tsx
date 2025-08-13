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
import { Presentation, FileText, Layout, Printer } from "lucide-react"

export function PowerpointToPdfConverter() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [conversionOptions, setConversionOptions] = useState({
    quality: "high" as "high" | "medium" | "low",
    includeNotes: false,
    includeHiddenSlides: false,
    slidesPerPage: "1" as "1" | "2" | "4" | "6",
    orientation: "landscape" as "landscape" | "portrait",
    passwordProtect: false,
    password: "",
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
          setDownloadUrl(`/api/download/powerpoint-to-pdf-${Date.now()}.pdf`)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 200)
  }

  const features = [
    {
      icon: <Presentation className="w-5 h-5" />,
      title: "Perfect Layout",
      description: "Preserve slide layouts, fonts, and formatting",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Include Notes",
      description: "Option to include speaker notes in PDF",
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Flexible Layout",
      description: "Choose slides per page and orientation",
    },
    {
      icon: <Printer className="w-5 h-5" />,
      title: "Print Ready",
      description: "High-quality output perfect for printing",
    },
  ]

  const steps = [
    {
      title: "Upload PowerPoint File",
      description: "Select your PPTX or PPT presentation file. Files up to 50MB are supported with all slide content.",
    },
    {
      title: "Configure PDF Settings",
      description:
        "Choose quality level, orientation, slides per page, and whether to include speaker notes or hidden slides.",
    },
    {
      title: "Set Layout Options",
      description:
        "Select landscape or portrait orientation, number of slides per page, and optional password protection for security.",
    },
    {
      title: "Download PDF",
      description:
        "Get your professional PDF presentation with preserved formatting, fonts, and layouts ready for sharing or printing.",
    },
  ]

  return (
    <div className="space-y-8">
      <ScrollAnimation animation="fade-up">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="animate-pulse-glow">
            Document Converter
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">PowerPoint to PDF Converter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert PowerPoint presentations to professional PDF format. Preserve layouts, animations, and formatting
            with high-quality output perfect for sharing and printing.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ScrollAnimation animation="fade-left">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Upload PowerPoint</CardTitle>
                <CardDescription>Select a PPTX or PPT file to convert to PDF</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploadZone
                  onFileUpload={handleFileUpload}
                  acceptedTypes={[
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    "application/vnd.ms-powerpoint",
                  ]}
                  maxSize={50 * 1024 * 1024} // 50MB
                  uploadedFile={uploadedFile}
                />
              </CardContent>
            </Card>
          </ScrollAnimation>

          {uploadedFile && (
            <ScrollAnimation animation="scale">
              <Card className="glass hover-lift">
                <CardHeader>
                  <CardTitle>PDF Settings</CardTitle>
                  <CardDescription>Configure your PDF output options</CardDescription>
                </CardHeader>
                <CardContent>
                  <ConversionOptions
                    type="powerpoint-to-pdf"
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
                status={progress < 100 ? "Converting PowerPoint to PDF..." : "Conversion complete!"}
              />
            </ScrollAnimation>
          )}

          {downloadUrl && (
            <ScrollAnimation animation="fade-up">
              <DownloadSection
                downloadUrl={downloadUrl}
                fileName={`${uploadedFile?.name?.replace(/\.(pptx|ppt)$/i, "") || "presentation"}.pdf`}
                fileSize="3.2 MB"
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
                    <div className="space-x-1">
                      <Badge variant="outline">PPTX</Badge>
                      <Badge variant="outline">PPT</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Output:</span>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>

      <ScrollAnimation animation="fade-up">
        <HowToUseSection title="How to Convert PowerPoint to PDF" steps={steps} />
      </ScrollAnimation>
    </div>
  )
}
