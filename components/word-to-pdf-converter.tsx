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
import { FileText, Lock, Palette, Settings } from "lucide-react"

export function WordToPdfConverter() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [conversionOptions, setConversionOptions] = useState({
    quality: "high" as "high" | "medium" | "low",
    passwordProtect: false,
    password: "",
    embedFonts: true,
    preserveHyperlinks: true,
    pdfVersion: "1.7" as "1.4" | "1.7" | "2.0",
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
          setDownloadUrl(`/api/download/word-to-pdf-${Date.now()}.pdf`)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 180)
  }

  const features = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Perfect Formatting",
      description: "Preserve all formatting, fonts, and layout",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Password Protection",
      description: "Add password security to your PDF files",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "High Quality",
      description: "Professional-grade PDF output",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Advanced Options",
      description: "Customize PDF version and compression",
    },
  ]

  const steps = [
    {
      title: "Upload Document",
      description: "Upload your Word document (DOCX or DOC format) using the drag-and-drop zone or file browser.",
    },
    {
      title: "Configure Settings",
      description: "Choose quality settings, add password protection, and customize PDF version options.",
    },
    {
      title: "Convert to PDF",
      description: "Click 'Convert to PDF' to start the conversion process with your selected settings.",
    },
    {
      title: "Download PDF",
      description: "Download your professional PDF file with preserved formatting and applied security settings.",
    },
  ]

  return (
    <div className="space-y-8">
      <ScrollAnimation animation="fade-up">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="animate-pulse-glow">
            Document Converter
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Word to PDF Converter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert Word documents to professional PDF files with perfect formatting preservation. Add password
            protection and customize quality settings.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ScrollAnimation animation="fade-left">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Upload Word Document</CardTitle>
                <CardDescription>Select a DOCX or DOC file to convert to PDF</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploadZone
                  onFileUpload={handleFileUpload}
                  acceptedTypes={[
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    "application/msword",
                  ]}
                  maxSize={25 * 1024 * 1024} // 25MB
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
                    type="word-to-pdf"
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
                status={progress < 100 ? "Converting Word to PDF..." : "Conversion complete!"}
              />
            </ScrollAnimation>
          )}

          {downloadUrl && (
            <ScrollAnimation animation="fade-up">
              <DownloadSection
                downloadUrl={downloadUrl}
                fileName={`${uploadedFile?.name?.replace(/\.(docx|doc)$/i, "") || "document"}.pdf`}
                fileSize="1.8 MB"
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
                      <Badge variant="outline">DOCX</Badge>
                      <Badge variant="outline">DOC</Badge>
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
        <HowToUseSection title="How to Convert Word to PDF" steps={steps} />
      </ScrollAnimation>
    </div>
  )
}
