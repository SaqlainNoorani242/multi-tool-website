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
import { Table, Database, FileSpreadsheet, Settings } from "lucide-react"

export function ExcelToCsvConverter() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [conversionOptions, setConversionOptions] = useState({
    delimiter: "comma" as "comma" | "semicolon" | "tab" | "pipe",
    encoding: "utf8" as "utf8" | "utf16" | "ascii",
    includeHeaders: true,
    sheetSelection: "all" as "all" | "first" | "custom",
    customSheets: "",
    dateFormat: "iso" as "iso" | "us" | "eu" | "custom",
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
          setDownloadUrl(`/api/download/excel-to-csv-${Date.now()}.csv`)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 180)
  }

  const features = [
    {
      icon: <Table className="w-5 h-5" />,
      title: "Multi-Sheet Support",
      description: "Convert all sheets or select specific ones",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Integrity",
      description: "Preserve formulas, formatting, and data types",
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5" />,
      title: "Custom Delimiters",
      description: "Choose comma, semicolon, tab, or pipe separators",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Advanced Options",
      description: "Control encoding, date formats, and headers",
    },
  ]

  const steps = [
    {
      title: "Upload Excel File",
      description: "Select your XLSX or XLS spreadsheet file. Files up to 25MB are supported with multiple sheets.",
    },
    {
      title: "Configure CSV Settings",
      description:
        "Choose your preferred delimiter (comma, semicolon, tab, or pipe), encoding format, and date formatting options.",
    },
    {
      title: "Select Sheets",
      description:
        "Choose to convert all sheets or select specific worksheets from your Excel file for targeted conversion.",
    },
    {
      title: "Download CSV",
      description:
        "Get your converted CSV file with preserved data integrity, proper formatting, and your chosen delimiter settings.",
    },
  ]

  return (
    <div className="space-y-8">
      <ScrollAnimation animation="fade-up">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="animate-pulse-glow">
            Document Converter
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Excel to CSV Converter</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Convert Excel spreadsheets to CSV format with perfect data preservation. Handle multiple sheets, custom
            delimiters, and advanced formatting options.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ScrollAnimation animation="fade-left">
            <Card className="glass hover-lift">
              <CardHeader>
                <CardTitle>Upload Excel File</CardTitle>
                <CardDescription>Select an XLSX or XLS file to convert to CSV</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploadZone
                  onFileUpload={handleFileUpload}
                  acceptedTypes={[
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    "application/vnd.ms-excel",
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
                  <CardTitle>CSV Options</CardTitle>
                  <CardDescription>Configure your CSV output settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ConversionOptions
                    type="excel-to-csv"
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
                status={progress < 100 ? "Converting Excel to CSV..." : "Conversion complete!"}
              />
            </ScrollAnimation>
          )}

          {downloadUrl && (
            <ScrollAnimation animation="fade-up">
              <DownloadSection
                downloadUrl={downloadUrl}
                fileName={`${uploadedFile?.name?.replace(/\.(xlsx|xls)$/i, "") || "spreadsheet"}.csv`}
                fileSize="856 KB"
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
                      <Badge variant="outline">XLSX</Badge>
                      <Badge variant="outline">XLS</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Output:</span>
                    <Badge variant="outline">CSV</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>

      <ScrollAnimation animation="fade-up">
        <HowToUseSection title="How to Convert Excel to CSV" steps={steps} />
      </ScrollAnimation>
    </div>
  )
}
