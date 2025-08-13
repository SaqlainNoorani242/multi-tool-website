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
import { FileText, Zap, Shield, Clock } from "lucide-react"

export function PdfToWordConverter() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [conversionOptions, setConversionOptions] = useState({
    ocrEnabled: true,
    preserveFormatting: true,
    extractImages: true,
    pageRange: "all" as "all" | "custom",
    customRange: "",
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

    // Simulate conversion progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsConverting(false)
          setDownloadUrl(`/api/download/pdf-to-word-${Date.now()}.docx`)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
  }

  const features = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "OCR Technology",
      description: "Convert scanned PDFs to editable Word documents",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Processing",
      description: "Convert large PDF files in seconds",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure & Private",
      description: "Files are automatically deleted after 24 hours",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Batch Processing",
      description: "Convert multiple PDFs simultaneously",
    },
  ]

  const steps = [
    {
      title: "Upload PDF File",
      description: "Upload your PDF file using drag & drop or click to browse. Supports files up to 50MB in size.",
    },
    {
      title: "Configure Options",
      description: "Configure OCR settings, formatting preservation, and page range options as needed.",
    },
    {
      title: "Start Conversion",
      description: "Click 'Convert to Word' to start the conversion process with advanced OCR technology.",
    },
    {
      title: "Download DOCX",
      description: "Download your converted DOCX file when ready. Files are automatically deleted after 24 hours.",
    },
  ]

  return (
    <div className="space-y-8">
      <ScrollAnimation animation="fade-up">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="animate-pulse-glow">
            Document Converter
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">PDF to Word Converter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert PDF files to editable Word documents with advanced OCR technology. Perfect for editing scanned
            documents and preserving formatting.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ScrollAnimation animation="fade-left">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Upload PDF File</CardTitle>
                <CardDescription>Select a PDF file to convert to Word format</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploadZone
                  onFileUpload={handleFileUpload}
                  acceptedTypes={["application/pdf"]}
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
                  <CardTitle>Conversion Options</CardTitle>
                  <CardDescription>Configure how your PDF will be converted</CardDescription>
                </CardHeader>
                <CardContent>
                  <ConversionOptions
                    type="pdf-to-word"
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
                status={progress < 100 ? "Converting PDF to Word..." : "Conversion complete!"}
              />
            </ScrollAnimation>
          )}

          {downloadUrl && (
            <ScrollAnimation animation="fade-up">
              <DownloadSection
                downloadUrl={downloadUrl}
                fileName={`${uploadedFile?.name?.replace(".pdf", "") || "document"}.docx`}
                fileSize="2.1 MB"
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
                    <Badge variant="outline">PDF</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Output:</span>
                    <Badge variant="outline">DOCX</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>

      <ScrollAnimation animation="fade-up">
        <HowToUseSection title="How to Convert PDF to Word" steps={steps} />
      </ScrollAnimation>
    </div>
  )
}
